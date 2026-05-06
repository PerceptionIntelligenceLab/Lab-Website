import { useState, useMemo, useEffect, useRef } from 'react';

import liverMRImg from '../assets/Datasets pictures/LiverMR.png';
import panSegImg from '../assets/Datasets pictures/Pensegdata.png';
import periPancImg from '../assets/Datasets pictures/PeriPancreatic.png';
import gastroVisionImg from '../assets/Datasets pictures/GastroVision.png';
import polypGenVideoImg from '../assets/Datasets pictures/polygenvideo.png';
import polypGenStillImg from '../assets/Datasets pictures/ploygenstill.png';
import medvqaImg from '../assets/Datasets pictures/ImageCLEFmed MEDVQA GI 2023.png';
import kvasirSegImg from '../assets/Datasets pictures/Kvasir-SEG.png';
import endocvImg from '../assets/Datasets pictures/EndoCV 2021.png';
import kvasirInstrumentImg from '../assets/Datasets pictures/Kvasir-Instrument.png';
import kvasirSessileImg from '../assets/Datasets pictures/Kvasir-sessile.png';
import endotectImg from '../assets/Datasets pictures/Endotect 2020.png';
import medicoImg from '../assets/Datasets pictures/Medico Automatic Polyp Segmentation.png';
import kvasirCapsuleImg from '../assets/Datasets pictures/Kvasir-Capsule.png';
import kvasirCapsuleSegImg from '../assets/Datasets pictures/KvasirCapsule-SEG.png';
import pmDataImg from '../assets/Datasets pictures/PM data.png';

interface Dataset {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  links: { label: string; url: string }[];
}

const datasets: Dataset[] = [
  {
    id: 1,
    title: 'CirrMRI600+',
    image: liverMRImg,
    tags: ['MRI', 'Segmentation', 'Liver'],
    desc: '628 abdominal MRI volumes (T1W: 310, T2W: 318) with physician masks for liver cirrhosis research; single-center, multivendor, multisequence.',
    links: [{ label: 'Dataset', url: 'https://osf.io/cuk24/' }],
  },
  {
    id: 2,
    title: 'PanSegData',
    image: panSegImg,
    tags: ['MRI', 'CT', 'Segmentation', 'Pancreas'],
    desc: '767 MRI and 1,350 CT scans for pancreas segmentation. PanSegNet achieved Dice: 88.3% (CT), 85.0% (T1W), 86.3% (T2W); strong volume correlation and agreement.',
    links: [{ label: 'Dataset', url: 'https://osf.io/kysnj/' }],
  },
  {
    id: 3,
    title: 'Peri-Pancreatic Edema',
    image: periPancImg,
    tags: ['CT', 'Classification'],
    desc: '255 pancreatitis CT scans with edema labels (179 positive, 76 negative) and expert pancreas masks to support robust research.',
    links: [{ label: 'Dataset', url: 'https://osf.io/cuk24/' }],
  },
  {
    id: 4,
    title: 'GastroVision',
    image: gastroVisionImg,
    tags: ['Endoscopy', 'Classification', 'Detection'],
    desc: '8,000 GI endoscopy images across 27 classes from multiple centers with expert annotations; strong baseline benchmarks.',
    links: [
      { label: 'Dataset', url: 'https://drive.google.com/drive/u/1/folders/1T35gqO7jIKNxC-gVA2YVOMdsL7PSqeAa' },
      { label: 'Paper', url: 'https://arxiv.org/pdf/2307.08140.pdf' },
    ],
  },
  {
    id: 5,
    title: 'PolypGen Video Sequences',
    image: polypGenVideoImg,
    tags: ['Endoscopy', 'Video', 'Segmentation', 'Detection'],
    desc: 'Multicenter polyp video dataset for detection and segmentation with 3,762 precise labels validated by senior gastroenterologists.',
    links: [
      { label: 'Dataset', url: 'https://drive.google.com/drive/u/2/folders/16uL9n84SrMt7IiQFzTUQNaJ9TbHJ8DhW' },
      { label: 'Paper', url: 'https://www.nature.com/articles/s41597-023-01981-y' },
    ],
  },
  {
    id: 6,
    title: 'PolypGen Still Frames',
    image: polypGenStillImg,
    tags: ['Endoscopy', 'Segmentation', 'Detection'],
    desc: '8,037 frames from six hospitals with positive and negative samples enabling generalizable polyp segmentation and detection.',
    links: [
      { label: 'Dataset', url: 'https://www.synapse.org/Synapse:syn26376615/wiki/613312' },
      { label: 'Paper', url: 'https://www.nature.com/articles/s41597-023-01981-y' },
    ],
  },
  {
    id: 7,
    title: 'ImageCLEFmed MEDVQA GI 2023',
    image: medvqaImg,
    tags: ['Endoscopy', 'Classification', 'Segmentation'],
    desc: 'Colonoscopy images with text and segmentation for VQA, VQG, and VLQA tasks to enhance interpretability in diagnostics.',
    links: [{ label: 'Dataset', url: 'https://drive.google.com/file/d/1jTyLWwcHzbLpWjSNwmgiiavXDjuQe5y7/view' }],
  },
  {
    id: 8,
    title: 'Kvasir-SEG',
    image: kvasirSegImg,
    tags: ['Endoscopy', 'Segmentation', 'Detection'],
    desc: '1,000 polyp images with masks and bounding boxes across varied resolutions to support detection and segmentation research.',
    links: [
      { label: 'Dataset', url: 'https://datasets.simula.no/kvasir-seg/' },
      { label: 'Paper', url: 'https://arxiv.org/pdf/1911.07069.pdf' },
    ],
  },
  {
    id: 9,
    title: 'EndoCV 2021',
    image: endocvImg,
    tags: ['Endoscopy', 'Segmentation', 'Detection'],
    desc: 'Five dataset types with diverse splits for rigorous evaluation of detection, segmentation, and localization methods.',
    links: [
      { label: 'Dataset', url: 'https://endocv2021.grand-challenge.org/' },
      { label: 'Paper', url: 'https://arxiv.org/pdf/2106.04463.pdf' },
    ],
  },
  {
    id: 10,
    title: 'Kvasir-Instrument',
    image: kvasirInstrumentImg,
    tags: ['Endoscopy', 'Segmentation', 'Detection'],
    desc: '590 endoscopic tool images with ground-truth masks and bounding boxes; foundational for automatic tool segmentation.',
    links: [
      { label: 'Dataset', url: 'https://datasets.simula.no/kvasir-instrument/' },
      { label: 'Paper', url: 'https://arxiv.org/pdf/2011.08065.pdf' },
    ],
  },
  {
    id: 11,
    title: 'Kvasir-sessile',
    image: kvasirSessileImg,
    tags: ['Endoscopy', 'Segmentation', 'Detection'],
    desc: 'Focus on sessile polyps to support robust detection and segmentation in challenging colorectal scenarios.',
    links: [
      { label: 'Dataset', url: 'https://endocv2021.grand-challenge.org/' },
      { label: 'Paper', url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9314114' },
    ],
  },
  {
    id: 12,
    title: 'Endotect 2020',
    image: endotectImg,
    tags: ['Endoscopy', 'Classification', 'Segmentation', 'Detection'],
    desc: 'Comprehensive challenge dataset across centers with detection boxes, pixel masks, and negatives for broad benchmarking.',
    links: [
      { label: 'Dataset', url: 'http://home.simula.no/~paalh/publications/files/icpr2020-endotect.pdf' },
      { label: 'Paper', url: 'http://home.simula.no/~paalh/publications/files/icpr2020-endotect.pdf' },
    ],
  },
  {
    id: 13,
    title: 'Medico Automatic Polyp Segmentation',
    image: medicoImg,
    tags: ['Endoscopy', 'Segmentation', 'Detection'],
    desc: 'Public benchmark with 1,000 segmented images emphasizing robustness, speed, and generalization for clinical impact.',
    links: [
      { label: 'Dataset', url: 'https://www.kaggle.com/datasets/debeshjha1/medico-automatic-polyp-segmentation-challenge' },
      { label: 'Paper', url: 'https://arxiv.org/pdf/2012.15244' },
    ],
  },
  {
    id: 14,
    title: 'Kvasir-Capsule',
    image: kvasirCapsuleImg,
    tags: ['Capsule', 'Classification', 'Video'],
    desc: 'Large-scale capsule endoscopy dataset with millions of frames and 14 anomaly classes to advance AI diagnostics.',
    links: [
      { label: 'Dataset', url: 'https://osf.io/dv2ag/' },
      { label: 'Paper', url: 'https://www.nature.com/articles/s41597-021-00920-z' },
    ],
  },
  {
    id: 15,
    title: 'KvasirCapsule-SEG',
    image: kvasirCapsuleSegImg,
    tags: ['Capsule', 'Segmentation'],
    desc: 'Segmentation dataset supporting lightweight real-time models such as NanoNet for capsule and colonoscopy workflows.',
    links: [{ label: 'Dataset', url: 'https://datasets.simula.no/kvasir-capsule-seg/' }],
  },
  {
    id: 16,
    title: 'PMData',
    image: pmDataImg,
    tags: ['Sports'],
    desc: 'Lifelog and sports-activity data from 16 participants over five months for everyday health analysis and sports prediction.',
    links: [
      { label: 'Dataset', url: 'https://dl.acm.org/doi/pdf/10.1145/3339825.3394926' },
      { label: 'Paper', url: 'https://dl.acm.org/doi/abs/10.1145/3339825.3394926' },
    ],
  },
];

const CHIPS = ['All', 'MRI', 'CT', 'Endoscopy', 'Capsule', 'Segmentation', 'Detection', 'Classification', 'Video', 'Sports'];

const css = `
  .dsx-wrapper {
    color: #0b1220;
    background: #ffffff;
    padding: clamp(16px, 2.8vw, 40px);
    padding-top: 80px;
    min-height: 100vh;
  }

  .dsx-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .dsx-head {
    display: grid;
    gap: 18px;
    margin-bottom: 14px;
  }

  .dsx-controls {
    display: grid;
    gap: 12px;
  }

  .dsx-search-box {
    width: 100%;
    padding: 14px 16px;
    border-radius: 12px;
    background: #f7f9fb;
    border: 1px solid #e6eaf0;
    outline: none;
    color: #0b1220;
    font-size: 15px;
    transition: border .2s, box-shadow .2s;
    font-family: inherit;
  }

  .dsx-search-box::placeholder { color: #98a2b3; }

  .dsx-search-box:focus {
    border-color: #2b6cff;
    box-shadow: 0 0 0 4px rgba(43,108,255,.12);
  }

  .dsx-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .dsx-chip {
    background: #f4f5f7;
    border: 1px solid #dfe3e8;
    color: #0b1220;
    padding: 8px 12px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: border .2s;
    font-family: inherit;
  }

  .dsx-chip.active {
    border-color: #0b1220;
    color: #0b1220;
    background: #f4f5f7;
    font-weight: 600;
  }

  .dsx-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin-top: 10px;
  }

  @media (max-width: 1000px) { .dsx-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px)  { .dsx-grid { grid-template-columns: 1fr; } }

  .dsx-card {
    background: #ffffff;
    border: 1px solid #eaeef3;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 24px rgba(16,24,40,.08);
    display: flex;
    flex-direction: column;
    transform: translateY(10px);
    opacity: 0;
    transition: transform .45s cubic-bezier(.2,.8,.2,1), opacity .45s;
  }

  .dsx-card.dsx-in {
    opacity: 1;
    transform: translateY(0);
  }

  .dsx-media {
    position: relative;
    background: #f2f4f7;
    overflow: hidden;
    cursor: zoom-in;
  }

  .dsx-media img {
    width: 100%;
    height: 220px;
    object-fit: contain;
    display: block;
    padding: 8px;
  }

  .dsx-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: linear-gradient(135deg, #2563eb, #22c55e);
    color: #ffffff;
    padding: 6px 10px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 12px;
    box-shadow: 0 6px 18px rgba(16,24,40,.18);
    pointer-events: none;
  }

  .dsx-body {
    padding: 14px 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }

  .dsx-body h3 {
    margin: 0;
    font-size: clamp(15px, 1.5vw, 18px);
    line-height: 1.25;
    color: #0b1220;
    font-weight: 700;
  }

  .dsx-body p {
    margin: 0;
    color: #475569;
    font-size: 14px;
    line-height: 1.5;
    flex: 1;
  }

  .dsx-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 2px;
  }

  .dsx-tag {
    font-size: 12px;
    color: #0b1220;
    background: #f4f5f7;
    border: 1px solid #dfe3e8;
    padding: 4px 10px;
    border-radius: 999px;
    font-weight: 500;
  }

  .dsx-actions {
    display: flex;
    gap: 10px;
    margin-top: 6px;
  }

  .dsx-action-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 12px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    color: #0b1220;
    background: #f4f5f7;
    border: 1px solid #dfe3e8;
    font-family: inherit;
  }

  .dsx-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem 0;
    color: #5b6472;
    font-size: 15px;
  }

  .dsx-lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.85);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity .2s;
    z-index: 9999;
    padding: 20px;
  }

  .dsx-lightbox.show {
    opacity: 1;
    visibility: visible;
  }

  .dsx-lightbox img {
    max-width: 95vw;
    max-height: 85vh;
    border-radius: 14px;
    box-shadow: 0 20px 60px rgba(0,0,0,.6);
    background: #fff;
    object-fit: contain;
  }

  .dsx-lb-close {
    position: absolute;
    top: 18px;
    right: 18px;
    font-size: 34px;
    line-height: 1;
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
  }
`;

export default function Datasets() {
  const [activeChip, setActiveChip] = useState('All');
  const [query, setQuery] = useState('');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return datasets.filter((d) => {
      const matchChip = activeChip === 'All' || d.tags.includes(activeChip);
      const matchQuery = !q || d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q) || d.tags.some(t => t.toLowerCase().includes(q));
      return matchChip && matchQuery;
    });
  }, [activeChip, query]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('dsx-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((el) => { if (el) io.observe(el); });
    return () => io.disconnect();
  }, [visible]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="dsx-wrapper">
      <style>{css}</style>
      <div className="dsx-inner">
        <div className="dsx-head">
          <div className="dsx-controls">
            <input
              className="dsx-search-box"
              type="search"
              placeholder="Search by name, modality, task, or keyword…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="dsx-chips">
              {CHIPS.map((chip) => (
                <button
                  key={chip}
                  className={`dsx-chip${activeChip === chip ? ' active' : ''}`}
                  onClick={() => setActiveChip(chip)}
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
            visible.map((d, i) => (
              <article
                key={d.id}
                className="dsx-card"
                ref={(el) => { cardRefs.current[i] = el; }}
              >
                <div
                  className="dsx-media"
                  onClick={() => setLightbox({ src: d.image, alt: d.title })}
                >
                  <img src={d.image} alt={d.title} loading="lazy" />
                </div>
                <div className="dsx-body">
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                  <div className="dsx-tags">
                    {d.tags.map((t) => (
                      <span key={t} className="dsx-tag">{t}</span>
                    ))}
                  </div>
                  <div className="dsx-actions">
                    {d.links.map((l) => (
                      <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="dsx-action-btn">
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>

      {lightbox && (
        <div
          className="dsx-lightbox show"
          onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
        >
          <button className="dsx-lb-close" onClick={() => setLightbox(null)}>×</button>
          <img src={lightbox.src} alt={lightbox.alt} />
        </div>
      )}
    </div>
  );
}
