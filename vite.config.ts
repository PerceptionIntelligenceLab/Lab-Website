import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages serves from:
  // https://<org>.github.io/<repo>/
  // so this repo should be rooted at /Lab-Website/.
  base: '/Lab-Website/',
  plugins: [
    react(),
    tailwindcss(),
  ],
});
