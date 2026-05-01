import { useState, useMemo } from 'react';
import pvtImg from '../assets/Code/PVT.png';
import mdnetImg from '../assets/Code/MD Net.png';
import transnetImg from '../assets/Code/Transnet.png';
import transrupnetImg from '../assets/Code/TransRupnet.png';
import doubleunetImg from '../assets/Code/DoubleUnet.png';
import resunetcrfImg from '../assets/Code/ResUnet+++CRF.png';
import resunetppImg from '../assets/Code/ResUnet++.png';
import colonsegnetImg from '../assets/Code/Colonsegnet.png';
import nanonetImg from '../assets/Code/NanoNet.png';
import ddanetImg from '../assets/Code/DDANet.png';
import lightlayersImg from '../assets/Code/Light Layers.png';
import pnsnetImg from '../assets/Code/PNSnet.png';
import surgicalImg from '../assets/Code/Realtimesurgical.png';

type Category = 'lightweight' | 'cnn' | 'transformer' | 'ml';

interface Project {
  title: string;
  image: string;
  cat: Category;
  chips: string[];
  desc: string;
  tags: string;
  github: string;
  paper: string;
}

const projects: Project[] = [
  {
    title: 'PVTFormer',
    image: pvtImg,
    cat: 'transformer',
    chips: ['Transformer', 'ISBI 2024', 'CT Liver'],
    desc: 'PVT-based encoder with refined decoding for accurate, robust healthy-liver segmentation. Extensible to other modalities and tasks.',
    tags: 'pvtformer liver ct transformer isbi 2024 healthy segmentation',
    github: 'https://github.com/DebeshJha/PVTFormer',
    paper: 'https://arxiv.org/pdf/2401.09630',
  },
  {
    title: 'MDNet',
    image: mdnetImg,
    cat: 'transformer',
    chips: ['Transformer Encoder', 'Abdominal CT', '2024'],
    desc: 'MiT-B2 encoder with interlinked decoders and mask reuse to refine features, enforce spatial attention, and boost accuracy.',
    tags: 'mdnet abdominal ct organs segmentation mit-b2 multi-decoder 2024',
    github: 'https://github.com/DebeshJha/MDNet',
    paper: 'https://arxiv.org/pdf/2405.06166',
  },
  {
    title: 'TransNetR',
    image: transnetImg,
    cat: 'transformer',
    chips: ['Transformer', 'Polyp', 'MIDL 2023'],
    desc: 'Transformer-based residual network for robust polyp segmentation across in-distribution and out-of-distribution datasets.',
    tags: 'transnetr polyp segmentation transformer residual ood generalization midl 2023',
    github: 'https://github.com/DebeshJha/TransNetR',
    paper: 'https://arxiv.org/pdf/2303.07428',
  },
  {
    title: 'TransRUPNet',
    image: transrupnetImg,
    cat: 'transformer',
    chips: ['Transformer', 'Real-time', 'Polyp'],
    desc: 'Encoder-decoder with residual upsampling blocks, 47.07 FPS and 0.7786 Dice, strong OOD generalization with real-time feedback.',
    tags: 'transrupnet polyp colorectal segmentation real-time transformer residual upsampling 47 fps dice 0.7786',
    github: 'https://github.com/DebeshJha/TransRUPNet',
    paper: 'https://arxiv.org/pdf/2306.02176',
  },
  {
    title: 'DoubleUNet',
    image: doubleunetImg,
    cat: 'cnn',
    chips: ['CNN', 'Two-Stage'],
    desc: 'VGG19-powered U-Net followed by a second U-Net; first mask multiplies input for refined second-stage segmentation.',
    tags: 'doubleunet vgg19 unet cascade masks medical image segmentation',
    github: 'https://github.com/DebeshJha/2020-CBMS-DoubleU-Net',
    paper: 'https://arxiv.org/pdf/2006.04868',
  },
  {
    title: 'ResUNet++',
    image: resunetppImg,
    cat: 'cnn',
    chips: ['CNN', 'Residual'],
    desc: 'Residual U-Net enhanced with squeeze-and-excitation, ASPP, and attention blocks for stronger contextual feature learning.',
    tags: 'resunet++ residual unet squeeze-and-excitation aspp attention medical image segmentation',
    github: 'https://github.com/DebeshJha/ResUNetPlusPlus',
    paper: 'https://arxiv.org/pdf/1911.07067',
  },
  {
    title: 'ResUNet++ + CRF + TTA',
    image: resunetcrfImg,
    cat: 'cnn',
    chips: ['CNN', 'CRF', 'TTA'],
    desc: 'Extends ResUNet++ with conditional random fields and test-time augmentation to further improve polyp segmentation quality.',
    tags: 'resunet++ crf tta colorectal polyp segmentation augmentation',
    github: 'https://github.com/DebeshJha/ResUNetPlusPlus-with-CRF-and-TTA',
    paper: 'https://arxiv.org/pdf/1911.07067',
  },
  {
    title: 'ColonSegNet',
    image: colonsegnetImg,
    cat: 'lightweight',
    chips: ['Lightweight', 'Real-time', 'Polyp'],
    desc: 'Real-time model balancing accuracy and speed on Kvasir-SEG (~180 FPS, Dice ~0.8206), enabling reliable clinical feedback.',
    tags: 'colonsegnet real-time polyp detection segmentation kvasir-seg 180 fps dice 0.8206',
    github: 'https://github.com/DebeshJha/',
    paper: 'https://arxiv.org/pdf/1911.07067',
  },
  {
    title: 'NanoNet',
    image: nanonetImg,
    cat: 'lightweight',
    chips: ['Lightweight', '~36k params', 'Real-time'],
    desc: 'Ultra-compact architecture for real-time segmentation in video capsule endoscopy and colonoscopy with minimal compute.',
    tags: 'nanonet real-time video capsule endoscopy colonoscopy 36000 params lightweight',
    github: 'https://github.com/DebeshJha/',
    paper: 'https://arxiv.org/pdf/2104.11138',
  },
  {
    title: 'DDANet',
    image: ddanetImg,
    cat: 'cnn',
    chips: ['CNN', 'Dual Decoder'],
    desc: 'Dual-decoder attention network trained on Kvasir-SEG, evaluated on unseen data with strong precision and Dice scores.',
    tags: 'ddanet dual decoder attention polyp segmentation kvasir-seg generalization dice 0.7874',
    github: 'https://github.com/DebeshJha/',
    paper: 'https://arxiv.org/pdf/2012.15245',
  },
  {
    title: 'LightLayers',
    image: lightlayersImg,
    cat: 'ml',
    chips: ['Machine Learning', 'Param-Efficient'],
    desc: 'Matrix-factorized dense/conv layers reduce trainable parameters and speed up training while maintaining competitive accuracy.',
    tags: 'lightlayers parameter efficient matrix factorization dense conv layers image classification',
    github: 'https://github.com/DebeshJha/',
    paper: 'https://arxiv.org/pdf/2101.02268',
  },
  {
    title: 'PNS-Net',
    image: pnsnetImg,
    cat: 'transformer',
    chips: ['Transformer', 'Video', 'Real-time'],
    desc: 'Progressively normalized self-attention for video polyp segmentation, ~140 FPS and state-of-the-art VPS performance.',
    tags: 'pns-net video polyp segmentation normalized self-attention transformer real-time 140 fps',
    github: 'https://github.com/DebeshJha/',
    paper: 'https://arxiv.org/pdf/2105.08468',
  },
  {
    title: 'U-Net (ROBUST-MIS)',
    image: surgicalImg,
    cat: 'cnn',
    chips: ['CNN', 'Surgical', 'Real-time'],
    desc: 'Automated surgical instrument segmentation on ROBUST-MIS 2019 with high Dice and real-time throughput.',
    tags: 'unet surgical instrument segmentation robust-mis 2019 dice 0.8739 miou 0.8183',
    github: 'https://github.com/DebeshJha/',
    paper: 'https://arxiv.org/pdf/2107.02319',
  },
];

const FILTERS: { label: string; value: 'all' | Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Lightweight model', value: 'lightweight' },
  { label: 'CNN based', value: 'cnn' },
  { label: 'Transformer based', value: 'transformer' },
  { label: 'Machine Learning based', value: 'ml' },
];

const css = `
  .cp-wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px 56px;
    font-family: Inter, ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica, Arial;
    color: #0b1220;
  }

  .cp-title {
    margin: 0 0 18px;
    font-weight: 800;
    letter-spacing: -.02em;
    font-size: clamp(28px, 4vw, 42px);
    text-align: center;
    color: #0a2540;
  }

  .cp-sub {
    color: #5b6b7a;
    text-align: center;
    max-width: 800px;
    margin: 0 auto 26px;
    font-size: 15px;
  }

  .cp-toolbar {
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    margin: 18px 0 28px;
  }

  .cp-search {
    width: 100%;
    max-width: 820px;
    display: flex;
    align-items: center;
    border: 1px solid #e5eaf1;
    border-radius: 12px;
    padding: 12px 16px;
    background: #fff;
    transition: box-shadow 0.15s;
  }

  .cp-search:focus-within {
    box-shadow: 0 0 0 3px rgba(14,214,232,0.15);
    border-color: #0ed6e8;
  }

  .cp-search-icon {
    color: #5b6b7a;
    margin-right: 10px;
    flex-shrink: 0;
  }

  .cp-search input {
    border: 0;
    outline: 0;
    width: 100%;
    font-size: 15px;
    color: #0b1220;
    background: transparent;
  }

  .cp-search input::placeholder { color: #9aacbb; }

  .cp-filters {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cp-pill {
    background: #f3f6f9;
    color: #0b1220;
    border: 1px solid #e5eaf1;
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.08s;
    user-select: none;
  }

  .cp-pill:hover { background: #e5eaf1; }
  .cp-pill:active { transform: scale(0.97); }
  .cp-pill.active { background: #111827; color: #fff; border-color: #111827; }

  .cp-section-head {
    margin: 36px 0 12px;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: -.01em;
    color: #0a2540;
  }

  .cp-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .cp-card {
    border: 1px solid #e5eaf1;
    border-radius: 16px;
    overflow: hidden;
    background: #fff;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.2s, transform 0.15s;
  }

  .cp-card:hover {
    box-shadow: 0 10px 30px rgba(0,0,0,.06);
    transform: translateY(-2px);
  }

  .cp-thumb {
    width: 100%;
    height: 200px;
    object-fit: contain;
    background: #f8fafc;
    display: block;
    padding: 8px;
  }

  .cp-body {
    padding: 14px 14px 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }

  .cp-card-title {
    font-weight: 800;
    letter-spacing: -.01em;
    font-size: 16px;
    color: #0b1220;
    line-height: 1.25;
    margin: 0;
  }

  .cp-meta {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .cp-chip {
    font-size: 11px;
    background: #f6f7fb;
    border: 1px solid #e5eaf1;
    padding: 4px 8px;
    border-radius: 999px;
    color: #0b1220;
    font-weight: 500;
  }

  .cp-desc {
    color: #5b6b7a;
    font-size: 13px;
    line-height: 1.5;
    margin: 0;
    flex: 1;
  }

  .cp-cta {
    display: flex;
    gap: 10px;
    margin-top: auto;
  }

  .cp-btn {
    flex: 1 1 auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 12px;
    padding: 10px 12px;
    font-weight: 700;
    font-size: 13px;
    text-decoration: none;
    transition: opacity 0.15s, transform 0.1s;
    cursor: pointer;
  }

  .cp-btn:hover { opacity: 0.85; }
  .cp-btn:active { transform: scale(0.97); }

  .cp-btn-primary {
    background: #0b0b0c;
    color: #fff;
    border: 1px solid transparent;
  }

  .cp-btn-ghost {
    background: #fff;
    border: 1px solid #e5eaf1;
    color: #0b1220;
  }

  .cp-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem 0;
    color: #5b6b7a;
    font-size: 15px;
  }

  @media (max-width: 999px) {
    .cp-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 699px) {
    .cp-grid { grid-template-columns: 1fr; }
    .cp-wrap { padding-top: 70px; }
  }
`;

export default function Code() {
  const [activeFilter, setActiveFilter] = useState<'all' | Category>('all');
  const [query, setQuery] = useState('');

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCat = activeFilter === 'all' || p.cat === activeFilter;
      const inSearch = !q || p.tags.includes(q) || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      return inCat && inSearch;
    });
  }, [activeFilter, query]);

  return (
    <div>
      <style>{css}</style>
      <div className="cp-wrap">
        <h2 className="cp-title">Medical AI Models Gallery</h2>
        <p className="cp-sub">
          Browse a curated set of segmentation and vision architectures. Use the filters or search to quickly find what you need.
        </p>

        <div className="cp-toolbar">
          <div className="cp-search">
            <svg className="cp-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, task, paper, year, dataset…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="cp-filters">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                className={`cp-pill${activeFilter === f.value ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <h3 className="cp-section-head">Results</h3>

        <div className="cp-grid">
          {visible.length === 0 ? (
            <div className="cp-empty">No models match your search.</div>
          ) : (
            visible.map((p) => (
              <article className="cp-card" key={p.title}>
                <img className="cp-thumb" src={p.image} alt={p.title} loading="lazy" />
                <div className="cp-body">
                  <h3 className="cp-card-title">{p.title}</h3>
                  <div className="cp-meta">
                    {p.chips.map((c) => (
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
      </div>
    </div>
  );
}
