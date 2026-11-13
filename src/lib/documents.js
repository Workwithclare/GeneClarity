import { supabase, supabaseEnabled } from './supabase.js'

/**
 * My Screening Journey — document storage access (backend mode only).
 *
 * ─────────────────────────────────────────────────────────────────
 * SECURITY MODEL (enforced by supabase/migrations/0005, verified by
 * the two-account test in docs/11):
 *   • Private bucket `screening-documents` — no public URLs, ever.
 *   • Every object lives at  <user id>/<doc id>.<ext>; storage RLS
 *     policies compare that folder to auth.uid(), so a second account
 *     cannot select, insert, or delete another account's objects.
 *   • The bucket enforces types (PDF/JPG/PNG) and the 10 MB limit
 *     server-side; `validateFile` repeats both checks client-side for
 *     fast, friendly errors.
 *   • Opening/downloading uses a short-lived signed URL created for
 *     the signed-in owner per request (5 min TTL).
 *   • No service-role key is used anywhere in this file.
 *
 * This module deliberately keeps documents OUT of the global store:
 * file bytes never touch localStorage, and the list is read fresh on
 * each visit. The app explains and stores — it never interprets the
 * content of an uploaded document.
 * ─────────────────────────────────────────────────────────────────
 */

export const BUCKET = 'screening-documents'
export const MAX_SIZE_BYTES = 10 * 1024 * 1024 // 10 MB, matches the bucket
export const ACCEPTED_TYPES = {
  'application/pdf': 'pdf',
  'image/jpeg': 'jpg',
  'image/png': 'png',
}

const SIGNED_URL_TTL = 300 // seconds — short-lived, per request

const warn = (what, err) =>
  console.warn(`[geneclarity] documents failed (${what}):`, err?.message || err)

/**
 * Client-side validation (the server repeats both rules).
 * Returns a translation key for the problem, or null when the file is
 * acceptable.
 */
export function validateFile(file) {
  if (!file) return 'journey.errGeneric'
  const ext = (file.name.split('.').pop() || '').toLowerCase()
  const expected = ACCEPTED_TYPES[file.type]
  const extOk = ['pdf', 'jpg', 'jpeg', 'png'].includes(ext)
  // Both the declared type and the extension must look right.
  if (!expected || !extOk) return 'journey.errType'
  if (file.size > MAX_SIZE_BYTES) return 'journey.errSize'
  if (file.size === 0) return 'journey.errGeneric'
  return null
}

const rowToDoc = (r) => ({
  id: r.id,
  fileName: r.file_name,
  storagePath: r.storage_path,
  mimeType: r.mime_type,
  sizeBytes: r.size_bytes,
  createdAt: r.created_at,
})

/** The owner's own documents, newest first. */
export async function listDocuments() {
  if (!supabaseEnabled) return { error: 'journey.errDemo' }
  try {
    const { data, error } = await supabase
      .from('screening_documents')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw error
    return { docs: data.map(rowToDoc) }
  } catch (err) {
    warn('list', err)
    return { error: 'journey.errGeneric' }
  }
}

/**
 * Upload one validated file: private bucket first, then the metadata
 * row. If the row insert fails, the just-uploaded object is removed
 * again so no orphaned file lingers in storage.
 *
 * @returns {{doc?: object, error?: string}} error values are keys
 */
export async function uploadDocument(userId, file) {
  if (!supabaseEnabled) return { error: 'journey.errDemo' }
  const invalid = validateFile(file)
  if (invalid) return { error: invalid }

  const ext = ACCEPTED_TYPES[file.type] === 'jpg' ? 'jpg' : ACCEPTED_TYPES[file.type]
  const id = `doc_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`
  const path = `${userId}/${id}.${ext}`

  try {
    const { error: upErr } = await supabase.storage
      .from(BUCKET)
      .upload(path, file, { contentType: file.type, upsert: false })
    if (upErr) throw upErr

    const row = {
      id,
      user_id: userId,
      file_name: file.name.slice(0, 200),
      storage_path: path,
      mime_type: file.type,
      size_bytes: file.size,
    }
    const { data, error: insErr } = await supabase
      .from('screening_documents')
      .insert(row)
      .select()
      .single()
    if (insErr) throw insErr

    return { doc: rowToDoc(data) }
  } catch (err) {
    warn('upload', err)
    // Best-effort cleanup so a failed insert leaves no file behind.
    supabase.storage
      .from(BUCKET)
      .remove([path])
      .catch(() => {})
    if (String(err?.message || '').includes('exceeded')) return { error: 'journey.errSize' }
    if (String(err?.message || '').includes('mime')) return { error: 'journey.errType' }
    return { error: 'journey.errUpload' }
  }
}

/** Open the owner's document in a new tab via a 5-minute signed URL. */
export async function openDocument(doc) {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .createSignedUrl(doc.storagePath, SIGNED_URL_TTL)
    if (error) throw error
    window.open(data.signedUrl, '_blank', 'noopener,noreferrer')
    return {}
  } catch (err) {
    warn('open', err)
    return { error: 'journey.errGeneric' }
  }
}

/**
 * Download the owner's document. Fetches the signed URL as bytes and
 * saves through a transient object URL (no token lands in a link the
 * user could bookmark or share).
 */
export async function downloadDocument(doc) {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .createSignedUrl(doc.storagePath, SIGNED_URL_TTL, { download: doc.fileName })
    if (error) throw error
    const res = await fetch(data.signedUrl)
    if (!res.ok) throw new Error(`download failed: ${res.status}`)
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = doc.fileName
    document.body.appendChild(a)
    a.click()
    a.remove()
    setTimeout(() => URL.revokeObjectURL(url), 4000)
    return {}
  } catch (err) {
    warn('download', err)
    return { error: 'journey.errGeneric' }
  }
}

/**
 * Delete: storage object first (the privacy-critical step), then the
 * metadata row. Returns an error key only if the row cannot be
 * removed afterwards.
 */
export async function deleteDocument(doc) {
  if (!supabaseEnabled) return { error: 'journey.errDemo' }
  try {
    const { error: rmErr } = await supabase.storage.from(BUCKET).remove([doc.storagePath])
    if (rmErr) throw rmErr
    const { error: delErr } = await supabase
      .from('screening_documents')
      .delete()
      .eq('id', doc.id)
    if (delErr) throw delErr
    return {}
  } catch (err) {
    warn('delete', err)
    return { error: 'journey.errGeneric' }
  }
}
