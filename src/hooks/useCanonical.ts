import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_ORIGIN = 'https://perceptionintelligencelab.github.io';

const buildCanonical = (basename: string, pathname: string): string => {
  const base = basename.endsWith('/') ? basename.slice(0, -1) : basename;
  const path = pathname === '/home' ? '/' : pathname;
  const normalized = path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;
  return `${SITE_ORIGIN}${base}${normalized}`;
};

export const useCanonical = (): void => {
  const { pathname } = useLocation();

  useEffect(() => {
    const href = buildCanonical(import.meta.env.BASE_URL, pathname);
    let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!el) {
      el = document.createElement('link');
      el.rel = 'canonical';
      document.head.appendChild(el);
    }
    el.href = href;

    let og = document.head.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!og) {
      og = document.createElement('meta');
      og.setAttribute('property', 'og:url');
      document.head.appendChild(og);
    }
    og.content = href;
  }, [pathname]);
};
