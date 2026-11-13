import { supabase, supabaseEnabled } from './supabase.js'
import {
  demoResults,
  demoNotifications,
  demoActivity,
} from '../data/demoData.js'

/**
 * Server-side data sync — active ONLY in backend mode.
 *
 * Design: local-first. The reducer always updates state immediately
 * (the UI never waits for the network); this module mirrors those
 * changes to Supabase afterwards, and pulls server rows back in when
 * the account signs in. Failures are logged as warnings and never
 * break the UI — docs/11 declares this as best-effort, no retry queue.
 *
 * Row Level Security (supabase/migrations/) is the real boundary:
 * every function here assumes the server will reject anything the
 * signed-in user is not allowed to touch.
 *
 * Seeding: the FIRST time an account signs in, its empty tables are
 * filled with the same synthetic demonstration content demo mode shows
 * (never with a previous account's local state — no cross-account
 * bleed). Ids are prefixed per account so the app's stable keys
 * ("res_hbs", "ntf_01" …) stay unique across every user's rows.
 */

const warn = (what, err) =>
  console.warn(`[geneclarity] server sync failed (${what}):`, err?.message || err)

const seedId = (id, userId) => `${id}__${userId.slice(0, 8)}`

/* ── row ↔ state mapping ──────────────────────────────────────────── */

const settingsToRow = (userId, s) => ({
  user_id: userId,
  notify_notifications: !!s.notifyNotifications,
  auto_lock: !!s.autoLock,
  share_research: !!s.shareResearch,
  profile_visibility: !!s.profileVisibility,
})

const rowToSettings = (r) => ({
  notifyNotifications: !!r.notify_notifications,
  autoLock: !!r.auto_lock,
  shareResearch: !!r.share_research,
  profileVisibility: !!r.profile_visibility,
})

const sharesToCols = (s) => ({
  share_summary: !!s.summary,
  share_full_report: !!s.full,
  share_notifications: !!s.activity,
})

const colsToShares = (r) => ({
  summary: !!r.share_summary,
  full: !!r.share_full_report,
  activity: !!r.share_notifications,
})

const resultToRow = (userId, r) => ({
  id: r.id,
  user_id: userId,
  condition_key: r.conditionId,
  status: r.status,
  synthetic: true,
  payload: r,
})

const notificationToRow = (userId, n) => ({
  id: n.id,
  user_id: userId,
  kind: n.type || 'info',
  is_read: !!n.read,
  created_at: n.at,
  payload: { ...n },
})

const activityToRow = (userId, a) => ({
  id: a.id,
  user_id: userId,
  kind: a.kind,
  detail_en: a.detailEn || '',
  detail_ar: a.detailAr || '',
  created_at: a.at,
})

/* ── load (with first-login seeding) ──────────────────────────────── */

/**
 * Pull the account's rows; seed from the synthetic demo set when a
 * table is still empty. Returns a SERVER_LOAD payload.
 */
export async function loadServerData(user) {
  const uid = user.id
  const payload = {}

  // — profiles: account-level privacy acceptance —
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('consent_accepted_at')
      .eq('id', uid)
      .maybeSingle()
    if (error) throw error
    const at = data?.consent_accepted_at || null
    payload.consentAccepted = !!at
    payload.consentAt = at
  } catch (err) {
    warn('load profiles', err)
    payload.consentAccepted = false
    payload.consentAt = null
  }

  // — settings —
  try {
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .eq('user_id', uid)
      .maybeSingle()
    if (error) throw error
    if (data) {
      payload.settings = rowToSettings(data)
    } else {
      // First sign-in: seed with the app's default settings.
      const defaults = {
        notifyNotifications: false,
        autoLock: true,
        shareResearch: false,
        profileVisibility: true,
      }
      const { error: insErr } = await supabase
        .from('settings')
        .insert(settingsToRow(uid, defaults))
      if (insErr) throw insErr
      payload.settings = defaults
    }
  } catch (err) {
    warn('load settings', err)
    delete payload.settings
  }

  // — results —
  try {
    const { data, error } = await supabase
      .from('results')
      .select('*')
      .order('created_at', { ascending: true })
    if (error) throw error
    if (data.length) {
      payload.results = data.map((r) => ({ ...r.payload, id: r.id }))
    } else {
      const seeded = demoResults.map((r) => ({
        ...r,
        id: seedId(r.id, uid),
      }))
      const { error: insErr } = await supabase
        .from('results')
        .insert(seeded.map((r) => resultToRow(uid, r)))
      if (insErr) throw insErr
      payload.results = seeded
    }
  } catch (err) {
    warn('load results', err)
    delete payload.results
  }

  // — notifications —
  try {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw error
    if (data.length) {
      payload.notifications = data.map((n) => ({
        ...n.payload,
        id: n.id,
        read: !!n.is_read,
      }))
    } else {
      const seeded = demoNotifications.map((n) => ({
        ...n,
        id: seedId(n.id, uid),
      }))
      const { error: insErr } = await supabase
        .from('notifications')
        .insert(seeded.map((n) => notificationToRow(uid, n)))
      if (insErr) throw insErr
      payload.notifications = seeded
    }
  } catch (err) {
    warn('load notifications', err)
    delete payload.notifications
  }

  // — activity (append-only audit trail, newest 60) —
  try {
    const { data, error } = await supabase
      .from('activity')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(60)
    if (error) throw error
    if (data.length) {
      payload.activity = data.map((a) => ({
        id: a.id,
        kind: a.kind,
        at: a.created_at,
        detailEn: a.detail_en,
        detailAr: a.detail_ar,
      }))
    } else {
      const seeded = demoActivity.map((a) => ({
        ...a,
        id: seedId(a.id, uid),
      }))
      const { error: insErr } = await supabase
        .from('activity')
        .insert(seeded.map((a) => activityToRow(uid, a)))
      if (insErr) throw insErr
      payload.activity = seeded
    }
  } catch (err) {
    warn('load activity', err)
    delete payload.activity
  }

  // — partner consent (the owner's own grant rows) —
  try {
    const { data, error } = await supabase
      .from('consents')
      .select('*')
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle()
    if (error) throw error
    if (data) {
      const status = data.granted_at
        ? data.revoked_at
          ? 'revoked'
          : 'active'
        : data.revoked_at
          ? 'revoked'
          : 'pending'
      payload.partner = {
        partnerId: data.partner_id,
        name: data.partner_name || null,
        status,
        shares: colsToShares(data),
        grantedAt: data.granted_at,
        revokedAt: data.revoked_at,
      }
    }
  } catch (err) {
    warn('load consents', err)
  }

  return payload
}

/* ── diff push (called after each committed state change) ─────────── */

/**
 * Mirror local changes to the server. Only NEW ids and CHANGED flags
 * are sent — nothing already on the server is ever re-sent.
 *
 * @param {object} prev  previous committed state
 * @param {object} next  newly committed state
 * @param {{userId: string, syncedActivity: Set<string>}} ctx
 */
export function syncDiffs(prev, next, ctx) {
  if (!supabaseEnabled || !next.user) return
  const uid = ctx.userId || next.user.id
  if (uid !== next.user.id) return

  // settings (whole row upsert on any change)
  if (
    JSON.stringify(prev.settings) !== JSON.stringify(next.settings)
  ) {
    supabase
      .from('settings')
      .upsert(settingsToRow(uid, next.settings), { onConflict: 'user_id' })
      .then(({ error }) => error && warn('settings', error))
      .catch((e) => warn('settings', e))
  }

  // privacy acceptance (account-level; write-once flip false → true)
  if (!prev.consentAccepted && next.consentAccepted) {
    supabase
      .from('profiles')
      .update({ consent_accepted_at: next.consentAt || new Date().toISOString() })
      .eq('id', uid)
      .then(({ error }) => error && warn('consent', error))
      .catch((e) => warn('consent', e))
  }

  // results (insert-only in this prototype)
  const prevResultIds = new Set(prev.results.map((r) => r.id))
  const newResults = next.results.filter((r) => !prevResultIds.has(r.id))
  if (newResults.length) {
    supabase
      .from('results')
      .insert(newResults.map((r) => resultToRow(uid, r)))
      .then(({ error }) => error && warn('results', error))
      .catch((e) => warn('results', e))
  }

  // notifications: inserts + read-flag updates
  const prevNotif = new Map(prev.notifications.map((n) => [n.id, n]))
  const inserts = []
  const readIds = []
  for (const n of next.notifications) {
    const p = prevNotif.get(n.id)
    if (!p) inserts.push(n)
    else if (!p.read && n.read) readIds.push(n.id)
  }
  if (inserts.length) {
    supabase
      .from('notifications')
      .insert(inserts.map((n) => notificationToRow(uid, n)))
      .then(({ error }) => error && warn('notifications', error))
      .catch((e) => warn('notifications', e))
  }
  if (readIds.length) {
    supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('user_id', uid)
      .in('id', readIds)
      .then(({ error }) => error && warn('mark read', error))
      .catch((e) => warn('mark read', e))
  }

  // activity: append-only — insert entries not yet on the server
  const prevAct = new Set(prev.activity.map((a) => a.id))
  for (const a of next.activity) {
    if (prevAct.has(a.id) || ctx.syncedActivity.has(a.id)) continue
    ctx.syncedActivity.add(a.id)
    supabase
      .from('activity')
      .insert(activityToRow(uid, a))
      .then(({ error }) => error && warn('activity', error))
      .catch((e) => warn('activity', e))
  }

  // partner consent (the privacy-critical writes)
  syncPartner(prev.partner, next.partner, uid)
}

/**
 * Insert specific activity entries that are not on the server yet.
 * Used right after SERVER_LOAD for entries created alongside it
 * (e.g. this sign-in's audit line) without re-sending loaded rows.
 */
export function syncActivityEntries(entries, ctx) {
  if (!supabaseEnabled || !entries.length) return
  for (const a of entries) {
    if (ctx.syncedActivity.has(a.id)) continue
    ctx.syncedActivity.add(a.id)
    supabase
      .from('activity')
      .insert(activityToRow(ctx.userId, a))
      .then(({ error }) => error && warn('activity', error))
      .catch((e) => warn('activity', e))
  }
}

/** Mirror invite / grant / revoke / clear to the consents table. */
function syncPartner(prevP, nextP, uid) {
  // Connection removed entirely → delete the grant row.
  if (prevP.partnerId && !nextP.partnerId) {
    supabase
      .from('consents')
      .delete()
      .eq('owner_id', uid)
      .eq('partner_id', prevP.partnerId)
      .then(({ error }) => error && warn('clear partner', error))
      .catch((e) => warn('clear partner', e))
    return
  }

  if (!nextP.partnerId) return // demo-mode partner has no account

  const changed =
    prevP.partnerId !== nextP.partnerId ||
    prevP.status !== nextP.status ||
    JSON.stringify(prevP.shares) !== JSON.stringify(nextP.shares) ||
    prevP.grantedAt !== nextP.grantedAt ||
    prevP.revokedAt !== nextP.revokedAt
  if (!changed) return

  const row = {
    owner_id: uid,
    partner_id: nextP.partnerId,
    partner_name: nextP.name,
    ...sharesToCols(nextP.shares),
    granted_at: nextP.grantedAt,
    revoked_at: nextP.revokedAt,
  }
  supabase
    .from('consents')
    .upsert(row, { onConflict: 'owner_id,partner_id' })
    .then(({ error }) => error && warn('consent', error))
    .catch((e) => warn('consent', e))
}

/* ── invite lookup ────────────────────────────────────────────────── */

/**
 * Resolve a partner's email to { partnerId, name }, or null when no
 * account exists. Authenticated-only RPC (see 0004 for the declared
 * tradeoff).
 */
export async function resolvePartner(email) {
  if (!supabaseEnabled) return null
  try {
    const { data, error } = await supabase.rpc('find_partner_by_email', {
      p_email: email.trim(),
    })
    if (error) throw error
    const row = Array.isArray(data) ? data[0] : data
    if (!row) return null
    return { partnerId: row.user_id, name: row.display_name }
  } catch (err) {
    warn('resolve partner', err)
    return null
  }
}
