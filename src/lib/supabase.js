import { createClient } from '@supabase/supabase-js'

/**
 * Supabase client — dual-mode by design.
 *
 * When `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are present in
 * `.env.local`, the app talks to a real Supabase project (Auth +
 * PostgreSQL). When they are absent, `supabase` is null and every caller
 * falls back to the original localStorage demo behaviour, so the
 * prototype always runs — with or without a backend.
 *
 * The anon key is a *public* client key: it only ever grants what the
 * Row Level Security policies in `supabase/migrations/` allow (see that
 * file — RLS, not the key, is the security boundary).
 */

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabaseEnabled = Boolean(url && anonKey)

export const supabase = supabaseEnabled ? createClient(url, anonKey) : null
