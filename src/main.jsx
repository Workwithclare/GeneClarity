import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { AppProvider } from './store/AppStore.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { captureRecoveryLink } from './lib/auth.js'
import './styles/index.css'

// A password-recovery email lands here with its tokens in the URL
// fragment (`#access_token=…&type=recovery`). The Supabase client is
// created during the imports above and exchanges those tokens, then
// CLEARS the fragment — so record that the landing happened now, before
// React renders; App routes to the set-new-password screen from this
// flag instead of from the URL.
captureRecoveryLink()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <LanguageProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>,
)
