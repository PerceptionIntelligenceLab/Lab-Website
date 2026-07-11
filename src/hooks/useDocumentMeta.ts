import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description?: string;
}

const DEFAULT_TITLE = 'Biomedical Perception & Intelligence Lab';

const setMetaTag = (name: string, content: string): (() => void) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  const created = !el;
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  const previous = el.content;
  el.content = content;
  return () => {
    if (created && el?.parentNode) el.parentNode.removeChild(el);
    else if (el) el.content = previous;
  };
};

export const useDocumentMeta = ({ title, description }: DocumentMeta): void => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} · ${DEFAULT_TITLE}` : DEFAULT_TITLE;
    const restore = description ? setMetaTag('description', description) : undefined;
    return () => {
      document.title = previousTitle;
      restore?.();
    };
  }, [title, description]);
};
