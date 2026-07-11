import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LazyVideo = ({ src, poster, className, style }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (reduced) {
      el.pause();
      el.removeAttribute('src');
      return;
    }

    let disposed = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || disposed) return;
        if (!el.src) {
          el.src = src;
          el.load();
        }
        el.play().catch(() => undefined);
        observer.disconnect();
      },
      { threshold: 0.25 }
    );
    observer.observe(el);

    const pauseIfHidden = () => {
      if (document.hidden) el.pause();
    };
    document.addEventListener('visibilitychange', pauseIfHidden);

    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener('visibilitychange', pauseIfHidden);
    };
  }, [src, reduced]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      className={className}
      style={style}
    />
  );
};

export default LazyVideo;
