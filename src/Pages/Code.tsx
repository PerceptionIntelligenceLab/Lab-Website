import { useMemo, useState } from 'react';
import { CODE_FILTERS, CODE_PROJECTS, type CodeCategory } from '../data/code';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import '../Styles/Code.css';

type FilterValue = 'all' | CodeCategory;

const Code = () => {
  useDocumentMeta({
    title: 'Code',
    description: 'Open-source medical AI models and segmentation architectures from the Biomedical Perception & Intelligence Lab.',
  });

  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const [query, setQuery] = useState('');

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CODE_PROJECTS.filter(p => {
      const inCategory = activeFilter === 'all' || p.cat === activeFilter;
      const inSearch = !q || p.tags.includes(q) || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      return inCategory && inSearch;
    });
  }, [activeFilter, query]);

  return (
    <main id="main" className="cp-wrap">
      <h1 className="cp-title">Medical AI Models Gallery</h1>
      <p className="cp-sub">
        Browse a curated set of segmentation and vision architectures. Use the filters or search to quickly find what you need.
      </p>

      <div className="cp-toolbar">
        <div className="cp-search">
          <svg className="cp-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            placeholder="Search by name, task, paper, year, dataset…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search models"
          />
        </div>
        <div className="cp-filters" role="group" aria-label="Filter by architecture">
          {CODE_FILTERS.map(f => (
            <button
              key={f.value}
              className={`cp-pill${activeFilter === f.value ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
              aria-pressed={activeFilter === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <h2 className="cp-section-head">Results</h2>

      <div className="cp-grid">
        {visible.length === 0 ? (
          <div className="cp-empty">No models match your search.</div>
        ) : (
          visible.map(p => (
            <article className="cp-card" key={p.title}>
              <img className="cp-thumb" src={p.image} alt={p.title} loading="lazy" decoding="async" width={360} height={200} />
              <div className="cp-body">
                <h3 className="cp-card-title">{p.title}</h3>
                <div className="cp-meta">
                  {p.chips.map(c => (
                    <span className="cp-chip" key={c}>{c}</span>
                  ))}
                </div>
                <p className="cp-desc">{p.desc}</p>
                <div className="cp-cta">
                  <a className="cp-btn cp-btn-primary" href={p.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a className="cp-btn cp-btn-ghost" href={p.paper} target="_blank" rel="noopener noreferrer">
                    Publication
                  </a>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </main>
  );
};

export default Code;
