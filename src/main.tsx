import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModalProvider } from './context/modal-context.tsx'
import { ThemeContextProvider } from './context/theme-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
