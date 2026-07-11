import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';

const stripTrailingSlash = (value: string): string =>
  value.endsWith('/') && value.length > 1 ? value.slice(0, -1) : value;

const container = document.getElementById('root');
if (!container) throw new Error('Root element #root not found');

createRoot(container).render(
  <StrictMode>
    <BrowserRouter basename={stripTrailingSlash(import.meta.env.BASE_URL)}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
