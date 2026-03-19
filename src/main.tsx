import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'
// @ts-expect-error - fontsource package lacks TypeScript types
import "@fontsource/pacifico";
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter
      basename={
        // Vite's BASE_URL matches the deployed subfolder (configured in `vite.config.ts`).
        import.meta.env.BASE_URL.endsWith('/')
          ? import.meta.env.BASE_URL.slice(0, -1)
          : import.meta.env.BASE_URL
      }
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
)