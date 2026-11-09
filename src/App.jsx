import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useLanguage } from './i18n/LanguageContext.jsx'

import Splash from './screens/Splash.jsx'
import Welcome from './screens/Welcome.jsx'
import Onboarding from './screens/Onboarding.jsx'
import Consent from './screens/Consent.jsx'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'
import Dashboard from './screens/Dashboard.jsx'
import Report from './screens/Report.jsx'
import ResultDetail from './screens/ResultDetail.jsx'
import Learn from './screens/Learn.jsx'
import ConditionDetail from './screens/ConditionDetail.jsx'
import CoupleConnect from './screens/CoupleConnect.jsx'
import PartnerConsent from './screens/PartnerConsent.jsx'
import Support from './screens/Support.jsx'
import Profile from './screens/Profile.jsx'
import Settings from './screens/Settings.jsx'
import PrivacySettings from './screens/PrivacySettings.jsx'
import Notifications from './screens/Notifications.jsx'
import Activity from './screens/Activity.jsx'
import NotFound from './screens/NotFound.jsx'

/**
 * Scrolls to the top whenever the route changes, so navigating between
 * screens never leaves the user halfway down a page.
 */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/**
 * Keeps the document's lang and dir attributes in step with the chosen
 * language. This is what makes Arabic layout flip to right-to-left and
 * makes screen readers announce content in the right language.
 */
function DocumentDirection() {
  const { lang } = useLanguage()
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <DocumentDirection />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/consent" element={<Consent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<Report />} />
        <Route path="/report/:resultId" element={<ResultDetail />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:conditionId" element={<ConditionDetail />} />
        <Route path="/couple" element={<CoupleConnect />} />
        <Route path="/couple/consent" element={<PartnerConsent />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/privacy" element={<PrivacySettings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
