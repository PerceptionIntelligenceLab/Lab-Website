import { useEffect, useMemo, useRef, useState } from 'react';
import { DATASETS, DATASET_CHIPS, type Dataset } from '../data/datasets';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import '../Styles/Datasets.css';

type Lightbox = { src: string; alt: string } | null;

const Datasets = () => {
  useDocumentMeta({
    title: 'Datasets',
    description: 'Curated medical imaging datasets from the Biomedical Perception & Intelligence Lab for AI research.',
  });

  const [activeChip, setActiveChip] = useState<string>('All');
  const [query, setQuery] = useState('');
  const [lightbox, setLightbox] = useState<Lightbox>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DATASETS.filter(d => {
      const matchChip = activeChip === 'All' || d.tags.includes(activeChip);
      const matchQuery =
        !q ||
        d.title.toLowerCase().includes(q) ||
        d.desc.toLowerCase().includes(q) ||
        d.tags.some(t => t.toLowerCase().includes(q));
      return matchChip && matchQuery;
    });
  }, [activeChip, query]);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('dsx-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cardRefs.current.forEach(el => { if (el) io.observe(el); });
    return () => io.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  return (
    <main id="main" className="dsx-wrapper">
      <div className="dsx-inner">
        <div className="dsx-head">
          <div className="dsx-controls">
            <input
              className="dsx-search-box"
              type="search"
              placeholder="Search by name, modality, task, or keyword…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search datasets"
            />
            <div className="dsx-chips" role="group" aria-label="Filter datasets">
              {DATASET_CHIPS.map(chip => (
                <button
                  key={chip}
                  className={`dsx-chip${activeChip === chip ? ' active' : ''}`}
                  onClick={() => setActiveChip(chip)}
                  aria-pressed={activeChip === chip}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="dsx-grid">
          {visible.length === 0 ? (
            <div className="dsx-empty">No datasets match your search.</div>
          ) : (
            visible.map((d, i) => <DatasetCard key={d.id} dataset={d} index={i} onOpen={setLightbox} refFn={el => { cardRefs.current[i] = el; }} />)
          )}
        </div>
      </div>

      {lightbox && (
        <div
          className="dsx-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={e => { if (e.target === e.currentTarget) setLightbox(null); }}
        >
          <button className="dsx-lb-close" onClick={() => setLightbox(null)} aria-label="Close preview">×</button>
          <img src={lightbox.src} alt={lightbox.alt} />
        </div>
      )}
    </main>
  );
};

interface DatasetCardProps {
  dataset: Dataset;
  index: number;
  onOpen: (lb: Lightbox) => void;
  refFn: (el: HTMLElement | null) => void;
}

const DatasetCard = ({ dataset, onOpen, refFn }: DatasetCardProps) => (
  <article className="dsx-card" ref={refFn}>
    <button
      type="button"
      className="dsx-media"
      onClick={() => onOpen({ src: dataset.image, alt: dataset.title })}
      aria-label={`Preview ${dataset.title}`}
      style={{ border: 0, padding: 0, width: '100%' }}
    >
      <img src={dataset.image} alt={dataset.title} loading="lazy" decoding="async" width={360} height={220} />
    </button>
    <div className="dsx-body">
      <h3>{dataset.title}</h3>
      <p>{dataset.desc}</p>
      <div className="dsx-tags">
        {dataset.tags.map(t => (
          <span key={t} className="dsx-tag">{t}</span>
        ))}
      </div>
      <div className="dsx-actions">
        {dataset.links.map(link => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="dsx-action-btn">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </article>
);

export default Datasets;
