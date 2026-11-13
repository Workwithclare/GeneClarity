import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Button, SafetyNote, EmptyState, Pill } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'
import { supabaseEnabled } from '../lib/supabase.js'
import {
  listDocuments,
  uploadDocument,
  openDocument,
  downloadDocument,
  deleteDocument,
} from '../lib/documents.js'

/**
 * My Screening Results — the private document store.
 *
 * ─────────────────────────────────────────────────────────────────
 * • Auth required (useRequireAuth) — no signed-in user, no screen.
 * • Files go to the PRIVATE `screening-documents` Supabase Storage
 *   bucket at <user id>/<doc id>.<ext>; RLS in migration 0005 limits
 *   every operation to the owner. No public URLs, no service key.
 * • Client-side type/size validation first (PDF/JPG/PNG, ≤10 MB) —
 *   the bucket repeats both rules server-side.
 * • The list is read fresh from the server on every visit; nothing is
 *   kept in localStorage, so file bytes never touch shared state.
 * • The app NEVER opens, reads or interprets document content — only
 *   the owner can open/download their own file.
 * • Degrades honestly: demo mode → journey.errDemo; backend present
 *   but migration not yet applied → journey.errGeneric.
 * ─────────────────────────────────────────────────────────────────
 */
const MAX_SIZE_LABEL = '10 MB'

export default function JourneyDocuments() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const user = useRequireAuth()

  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null) // translation key or null
  const [notice, setNotice] = useState(null) // success key or null
  const [busyId, setBusyId] = useState(null) // doc id with an action running
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef(null)

  useEffect(() => {
    let alive = true
    ;(async () => {
      const { docs: rows, error: err } = await listDocuments()
      if (!alive) return
      if (err) setError(err)
      else {
        setError(null)
        setDocs(rows)
      }
      setLoading(false)
    })()
    return () => {
      alive = false
    }
  }, [])

  const handlePick = async (event) => {
    const file = event.target.files?.[0]
    event.target.value = '' // allow re-picking the same file
    if (!file || !user) return
    setNotice(null)
    setError(null)
    setUploading(true)
    const { doc, error: err } = await uploadDocument(user.id, file)
    setUploading(false)
    if (err) {
      setError(err)
      return
    }
    setNotice('journey.uploaded')
    setDocs((prev) => [doc, ...prev])
  }

  const run = async (doc, action) => {
    setBusyId(doc.id)
    setError(null)
    setNotice(null)
    const { error: err } = await action(doc)
    setBusyId(null)
    if (err) setError(err)
    return err
  }

  const handleDelete = async (doc) => {
    // eslint-disable-next-line no-alert -- destructive action needs confirmation
    if (!window.confirm(t('journey.deleteConfirm'))) return
    const err = await run(doc, deleteDocument)
    // Only drop the row from the list when the server confirmed it.
    if (!err) setDocs((prev) => prev.filter((d) => d.id !== doc.id))
  }

  const formatDate = (iso) => {
    try {
      return new Intl.DateTimeFormat(lang === 'ar' ? 'ar' : 'en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(new Date(iso))
    } catch {
      return iso.slice(0, 10)
    }
  }

  const typeLabel = (mime) =>
    mime === 'application/pdf' ? 'PDF' : mime === 'image/png' ? 'PNG' : 'JPG'

  if (!user) return null

  return (
    <Screen>
      <AppBar title={t('journey.docsTitle')} onBack={() => navigate('/journey')} />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        <p className="text-[13.5px] leading-relaxed text-ink-400 animate-fade-up">
          {t('journey.docsPrivacy')}
        </p>

        {/* Upload control */}
        <div className="mt-4">
          <input
            ref={fileRef}
            type="file"
            className="sr-only"
            accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
            onChange={handlePick}
            aria-label={t('journey.upload')}
          />
          <Button
            size="lg"
            icon="upload"
            className="w-full"
            disabled={uploading}
            onClick={() => fileRef.current?.click()}
          >
            {uploading ? t('journey.uploading') : t('journey.upload')}
          </Button>
          <p className="mt-2 text-center text-[12px] text-ink-300">
            {t('journey.formats')}
          </p>
        </div>

        {notice && (
          <div
            role="status"
            className="mt-3 flex items-start gap-2.5 rounded-control border border-brand-200 bg-mint-100 px-4 py-3 animate-fade-up"
          >
            <span className="mt-0.5 shrink-0 text-brand-700">
              <Icon name="checkCircle" size={17} />
            </span>
            <p className="text-[13px] leading-snug text-brand-900">{t(notice)}</p>
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="mt-3 flex items-start gap-2.5 rounded-control border border-danger-100 bg-danger-100 px-4 py-3 animate-fade-up"
          >
            <span className="mt-0.5 shrink-0 text-danger-500">
              <Icon name="alert" size={17} />
            </span>
            <p className="text-[13px] leading-snug text-danger-500">{t(error)}</p>
          </div>
        )}

        {/* Document list */}
        <section className="mt-6">
          {loading ? (
            <p className="py-8 text-center text-[13.5px] text-ink-400">
              {t('splash.loading')}
            </p>
          ) : docs.length === 0 && !error ? (
            <EmptyState
              icon="file"
              title={t('journey.emptyTitle')}
              body={t('journey.emptyBody')}
              action={
                <Button
                  variant="soft"
                  icon="info"
                  onClick={() => navigate('/journey/sample')}
                >
                  {t('journey.viewSample')}
                </Button>
              }
            />
          ) : (
            <ul className="space-y-3">
              {docs.map((doc, i) => (
                <li
                  key={doc.id}
                  className="rounded-card border border-mint-200 bg-white p-4 shadow-card animate-fade-up"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint-100 text-brand-700">
                      <Icon name="file" size={20} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[14.5px] font-extrabold text-ink-900">
                        {doc.fileName}
                      </p>
                      <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-ink-400">
                        <Pill tone="neutral">{typeLabel(doc.mimeType)}</Pill>
                        <span>
                          {t('journey.uploadedBy')} {formatDate(doc.createdAt)}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      variant="soft"
                      size="sm"
                      icon="eye"
                      disabled={busyId === doc.id}
                      onClick={() => run(doc, openDocument)}
                    >
                      {t('journey.open')}
                    </Button>
                    <Button
                      variant="soft"
                      size="sm"
                      icon="download"
                      disabled={busyId === doc.id}
                      onClick={() => run(doc, downloadDocument)}
                    >
                      {t('journey.download')}
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      icon="trash"
                      disabled={busyId === doc.id}
                      onClick={() => handleDelete(doc)}
                    >
                      {t('journey.delete')}
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Clear distinction: built-in synthetic sample vs user uploads */}
        {!supabaseEnabled && (
          <div className="mt-5">
            <SafetyNote tone="info" text={t('journey.errDemo')} />
          </div>
        )}

        <div className="mt-5">
          <SafetyNote text={t('notice.notDiagnostic')} />
        </div>
      </main>
    </Screen>
  )
}
