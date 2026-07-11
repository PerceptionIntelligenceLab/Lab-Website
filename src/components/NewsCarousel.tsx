import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CATEGORY_COLOR, NEWS, type NewsItem } from '../data/news';
import { CarouselController } from '../lib/CarouselController';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import '../Styles/NewsCarousel.css';

interface NewsCardProps {
  item: NewsItem;
  index: number;
  total: number;
}

const NewsCard = ({ item, index, total }: NewsCardProps) => (
  <article className="news-card">
    <div className="news-card-img">
      <img
        src={item.img}
        alt={item.headline}
        draggable={false}
        loading="lazy"
        decoding="async"
        width={340}
        height={200}
      />
      <span
        className="news-card-cat"
        style={{ background: CATEGORY_COLOR[item.category] }}
      >
        {item.category}
      </span>
      <span className="news-card-num">
        {String((index % total) + 1).padStart(2, '0')} / {total}
      </span>
    </div>
    <div className="news-card-body">
      <div className="news-card-meta">
        <span className="news-card-source">BPI Lab</span>
        <span className="news-card-dot" aria-hidden="true" />
        <span className="news-card-time">{item.date}</span>
      </div>
      <h3 className="news-card-headline">{item.headline}</h3>
      <p className="news-card-excerpt">{item.excerpt}</p>
      <div className="news-card-tags">
        {item.tags.map(t => (
          <span className="news-tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
    <div className="news-card-footer">
      <a
        className="news-read-link"
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read more about ${item.headline}`}
      >
        Read More <span className="news-read-arrow" aria-hidden="true">→</span>
      </a>
    </div>
  </article>
);

export const NewsCarousel = ({ items = NEWS }: { items?: NewsItem[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<CarouselController | null>(null);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!trackRef.current) return;
    controllerRef.current = new CarouselController(trackRef.current);
    return () => { controllerRef.current = null; };
  }, []);

  useEffect(() => {
    if (reduced) controllerRef.current?.pause();
    else controllerRef.current?.resume();
  }, [reduced]);

  const onNudge = useCallback((dir: 'left' | 'right') => {
    controllerRef.current?.nudge(dir, items.length);
  }, [items.length]);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    controllerRef.current?.dragStart(e.clientX);
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    controllerRef.current?.dragMove(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    (e.target as Element).releasePointerCapture?.(e.pointerId);
    controllerRef.current?.dragEnd();
    setDragging(false);
  };

  const doubled = useMemo(() => [...items, ...items], [items]);

  return (
    <>
      <div className="news-subheader">
        <div className="news-subheader-left">
          <div className="news-subheader-label">Biomedical Perception &amp; Intelligence Lab · Dr. Debesh Jha</div>
          <h2>Recent <span>Highlights</span></h2>
        </div>
        <div style={{ display: 'flex', gap: '0.7rem' }}>
          <button className="news-nav-btn" onClick={() => onNudge('left')} aria-label="Scroll left">←</button>
          <button className="news-nav-btn" onClick={() => onNudge('right')} aria-label="Scroll right">→</button>
        </div>
      </div>

      <div className="news-track-outer">
        <div className="news-track">
          <div
            ref={trackRef}
            className={`news-track-inner${paused && !dragging ? ' is-paused' : ''}${dragging ? ' is-dragging' : ''}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {doubled.map((item, idx) => (
              <NewsCard key={`${item.id}-${idx}`} item={item} index={idx} total={items.length} />
            ))}
          </div>
        </div>
      </div>

      <div className="news-footer-bar">
        <p>Hover to pause · arrows to browse</p>
        <p>Showing <strong>{items.length}</strong> highlights from the lab</p>
      </div>
    </>
  );
};

export default NewsCarousel;
