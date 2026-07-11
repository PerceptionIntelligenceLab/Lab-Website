import React, { useCallback, useMemo, useState } from 'react';
import { PUBLICATIONS, PUBLICATION_FILTERS, TYPE_FILTERS, type Publication } from '../data/publications';
import { generateBibtex } from '../lib/bibtex';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import '../Styles/Publications.css';

const PI_REGEX = /\b(?:D\.?\s*Jha|Debesh\s+Jha)\b/i;

const renderAuthors = (authors: string): React.ReactNode =>
  authors.split(',').map((part, i) => {
    const trimmed = part.trim();
    const isPI = PI_REGEX.test(trimmed);
    return (
      <React.Fragment key={i}>
        {i > 0 && ', '}
        {isPI ? <strong className="pub-pi-name">{trimmed}</strong> : trimmed}
      </React.Fragment>
    );
  });

const buildActionLinks = (pub: Publication) => [
  { label: 'Paper', href: pub.link },
  ...(pub.pdfLink ? [{ label: 'PDF', href: pub.pdfLink }] : []),
  ...(pub.doiLink ? [{ label: 'DOI', href: pub.doiLink }] : []),
  ...(pub.codeLink ? [{ label: 'Code', href: pub.codeLink }] : []),
];

const Publications = () => {
  useDocumentMeta({
    title: 'Publications',
    description: 'Peer-reviewed publications, conference papers, and preprints from the Biomedical Perception & Intelligence Lab.',
  });

  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [openBibtex, setOpenBibtex] = useState<number | null>(null);
  const [copied, setCopied] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return PUBLICATIONS
      .filter(pub => {
        if (activeFilter === 'All') return true;
        if (TYPE_FILTERS.has(activeFilter)) return pub.type === activeFilter;
        return pub.category === activeFilter;
      })
      .sort((a, b) => b.year - a.year || a.id - b.id);
  }, [activeFilter]);

  const grouped = useMemo(() => {
    const map = new Map<number, Publication[]>();
    for (const pub of filtered) {
      const bucket = map.get(pub.year) ?? [];
      bucket.push(pub);
      map.set(pub.year, bucket);
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  const handleCopy = useCallback(async (pub: Publication) => {
    try {
      await navigator.clipboard.writeText(generateBibtex(pub));
      setCopied(pub.id);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  }, []);

  return (
    <div className="pub-root" id="main">
      <main className="pub-main">
        <header className="pub-header">
          <h1 className="pub-name">Debesh Jha</h1>
          <p className="pub-affiliation">
            University of South Dakota &middot; Biomedical Perception & Intelligence Lab
          </p>
          <div className="pub-research-tags">
            {['Deep Learning', 'Biomedical Informatics', 'Medical Imaging', 'Computer Vision'].map((tag, i) => (
              <React.Fragment key={tag}>
                {i > 0 && <span className="pub-tag-pipe">|</span>}
                <span className="pub-tag">{tag}</span>
              </React.Fragment>
            ))}
          </div>
          <div className="pub-header-meta">
            <a
              href="https://scholar.google.com/citations?user=mMTyE68AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="pub-scholar-btn"
            >
              <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              <span>Google Scholar</span>
            </a>
          </div>
        </header>

        <hr className="pub-hr" />

        <nav className="pub-filters" aria-label="Filter publications">
          {PUBLICATION_FILTERS.map((opt, i) => (
            <React.Fragment key={opt}>
              {i > 0 && <span className="pub-pipe" aria-hidden="true">|</span>}
              <button
                className={`pub-filter-btn${activeFilter === opt ? ' pub-filter-active' : ''}`}
                onClick={() => setActiveFilter(opt)}
                aria-pressed={activeFilter === opt}
              >
                {opt}
              </button>
            </React.Fragment>
          ))}
        </nav>

        <p className="pub-meta-count">
          {filtered.length} record{filtered.length !== 1 ? 's' : ''} &mdash; complete list on{' '}
          <a
            href="https://scholar.google.com/citations?user=mMTyE68AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="pub-inline-link"
          >
            Google Scholar ↗
          </a>
        </p>

        {filtered.length === 0 && (
          <p className="pub-empty">No publications match the selected filter.</p>
        )}

        {grouped.map(([year, pubs]) => (
          <section key={year} className="pub-year-section">
            <h2 className="pub-year-heading">{year}</h2>
            <hr className="pub-year-rule" />
            <ol className="pub-list">
              {pubs.map(pub => {
                const bibtexOpen = openBibtex === pub.id;
                const actionLinks = buildActionLinks(pub);
                return (
                  <li key={pub.id} className="pub-entry">
                    <div className="pub-body">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pub-title"
                      >
                        {pub.title}
                      </a>
                      <p className="pub-byline">
                        {renderAuthors(pub.authors)}{'. '}
                        <span className="pub-venue-span">{pub.venue}</span>{' '}
                        <span className="pub-year-span">({pub.year})</span>
                        <span className="pub-type-badge">{pub.type}</span>
                      </p>
                      <div className="pub-action-links">
                        {actionLinks.map((lk, i) => (
                          <React.Fragment key={lk.label}>
                            {i > 0 && <span className="pub-action-sep">&middot;</span>}
                            <a href={lk.href} target="_blank" rel="noopener noreferrer" className="pub-action">
                              {lk.label}
                            </a>
                          </React.Fragment>
                        ))}
                        <span className="pub-action-sep">&middot;</span>
                        <button
                          className="pub-action-btn"
                          onClick={() => setOpenBibtex(bibtexOpen ? null : pub.id)}
                          aria-expanded={bibtexOpen}
                        >
                          BibTeX
                        </button>
                      </div>
                      {bibtexOpen && (
                        <div className="pub-bibtex">
                          <pre className="pub-bibtex-text">{generateBibtex(pub)}</pre>
                          <button className="pub-copy-btn" onClick={() => handleCopy(pub)}>
                            {copied === pub.id ? 'Copied!' : 'Copy to clipboard'}
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}

        <footer className="pub-footer">
          <hr className="pub-hr" />
          <p>
            &copy; {new Date().getFullYear()} Biomedical Perception & Intelligence Lab &middot; University of South Dakota &middot;{' '}
            <a
              href="https://scholar.google.com/citations?user=mMTyE68AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="pub-inline-link"
            >
              Google Scholar ↗
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Publications;
