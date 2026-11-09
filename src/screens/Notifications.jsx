import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Button, EmptyState, Pill } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

const TYPE_META = {
  report: { icon: 'file', tone: 'bg-brand-100 text-brand-700' },
  privacy: { icon: 'lock', tone: 'bg-mint-100 text-brand-700' },
  education: { icon: 'book', tone: 'bg-ink-50 text-ink-500' },
  partner: { icon: 'users', tone: 'bg-caution-100 text-caution-600' },
}

function timeAgo(iso, isAr) {
  const diffMs = Date.now() - new Date(iso).getTime()
  const mins = Math.floor(diffMs / 60000)
  if (mins < 1) return isAr ? 'الآن' : 'Just now'
  if (mins < 60) return isAr ? `قبل ${mins} دقيقة` : `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return isAr ? `قبل ${hours} ساعة` : `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return isAr ? `قبل ${days} يوم` : `${days}d ago`
  return iso.slice(0, 10)
}

/**
 * Notifications inbox. Marking read is optimistic and local — there is
 * no push service and no server involved in this prototype.
 */
export default function Notifications() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const { state, dispatch } = useStore()
  const user = useRequireAuth()
  const [showAll, setShowAll] = useState(false)

  if (!user) return null

  const isAr = lang === 'ar'
  const items = showAll ? state.notifications : state.notifications.filter((n) => !n.read)
  const unreadCount = state.notifications.filter((n) => !n.read).length

  return (
    <Screen>
      <AppBar
        title={t('notif.title')}
        onBack={() => navigate('/profile')}
        right={
          unreadCount > 0 ? (
            <button
              type="button"
              onClick={() => dispatch({ type: 'MARK_ALL_READ' })}
              className="rounded-full px-2 py-1 text-[12px] font-bold text-brand-700 transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
            >
              {t('notif.markRead')}
            </button>
          ) : null
        }
      />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        {/* Filter: unread vs all */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowAll(false)}
            aria-pressed={!showAll}
            className={`rounded-full px-4 py-2 text-[13px] font-bold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 ${
              !showAll ? 'bg-brand-700 text-white shadow-button' : 'border border-ink-100 bg-white text-ink-500'
            }`}
          >
            {t('notif.unread')} {unreadCount > 0 && `(${unreadCount})`}
          </button>
          <button
            type="button"
            onClick={() => setShowAll(true)}
            aria-pressed={showAll}
            className={`rounded-full px-4 py-2 text-[13px] font-bold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 ${
              showAll ? 'bg-brand-700 text-white shadow-button' : 'border border-ink-100 bg-white text-ink-500'
            }`}
          >
            {t('learn.all')}
          </button>
        </div>

        {items.length === 0 ? (
          <EmptyState icon="bell" title={t('notif.empty')} body={t('notif.allRead')} />
        ) : (
          <ul className="mt-4 space-y-3">
            {items.map((n, i) => {
              const meta = TYPE_META[n.type] || TYPE_META.report
              return (
                <li
                  key={n.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  <div
                    className={`flex gap-3.5 rounded-card border p-4 shadow-card ${
                      n.read
                        ? 'border-mint-200 bg-white'
                        : 'border-brand-200 bg-mint-100'
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${meta.tone}`}
                    >
                      <Icon name={meta.icon} size={19} />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[14.5px] font-extrabold leading-snug text-ink-900">
                          {isAr ? n.titleAr : n.titleEn}
                        </p>
                        {!n.read && (
                          <span
                            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500"
                            aria-label={t('notif.unread')}
                          />
                        )}
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-ink-500">
                        {isAr ? n.bodyAr : n.bodyEn}
                      </p>
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="text-[11.5px] font-semibold text-ink-300">
                          {timeAgo(n.at, isAr)}
                        </span>
                        {!n.read && (
                          <button
                            type="button"
                            onClick={() => dispatch({ type: 'MARK_READ', id: n.id })}
                            className="rounded-full px-2.5 py-1 text-[11.5px] font-bold text-brand-700 transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
                          >
                            {t('notif.markOne')}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        )}

        <div className="mt-6">
          <Button
            variant="secondary"
            icon="clock"
            onClick={() => navigate('/activity')}
          >
            {t('act2.title')}
          </Button>
        </div>

        <div className="mt-4 flex justify-center">
          <Pill tone="neutral">{t('act2.note')}</Pill>
        </div>
      </main>
    </Screen>
  )
}
