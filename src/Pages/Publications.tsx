import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/LogoImage.png';

interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'Journal' | 'Conference';
  link?: string;
}

const publications: Publication[] = [
  // ── Journals ──────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Validating polyp and instrument segmentation methods in colonoscopy through Medico 2020 and MedAI 2021 Challenges",
    authors: "D. Jha et al.",
    venue: "Medical Image Analysis",
    year: 2024,
    type: "Journal",
    link: "https://arxiv.org/pdf/2307.16262",
  },
  {
    id: 2,
    title: "PolypGen: A multi-center polyp detection and segmentation dataset for generalisability assessment",
    authors: "D. Jha et al.",
    venue: "Nature Scientific Data",
    year: 2023,
    type: "Journal",
    link: "https://arxiv.org/pdf/2106.04463",
  },
  {
    id: 3,
    title: "Machine Learning-based Classification, Detection, and Segmentation of Medical Images",
    authors: "D. Jha",
    venue: "PhD Thesis",
    year: 2022,
    type: "Journal",
    link: "https://munin.uit.no/handle/10037/23693",
  },
  {
    id: 4,
    title: "FANet: A Feedback Attention Network for Improved Biomedical Image Segmentation",
    authors: "N. Tomar, D. Jha et al.",
    venue: "IEEE Transactions on Neural Networks and Learning Systems",
    year: 2022,
    type: "Journal",
    link: "https://arxiv.org/pdf/2103.17235",
  },
  {
    id: 5,
    title: "MSRF-Net: A Multi-Scale Residual Fusion Network for Biomedical Image Segmentation",
    authors: "A. Srivastava, D. Jha et al.",
    venue: "IEEE Journal of Biomedical and Health Informatics",
    year: 2022,
    type: "Journal",
    link: "https://arxiv.org/pdf/2105.07451",
  },
  {
    id: 6,
    title: "Meta-learning with implicit gradients in a few-shot setting for medical image segmentation",
    authors: "R. Khadka, D. Jha et al.",
    venue: "Computers in Biology and Medicine",
    year: 2022,
    type: "Journal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=mMTyE68AAAAJ&citation_for_view=mMTyE68AAAAJ:WA5NYHcadZ8C",
  },
  {
    id: 7,
    title: "A Comprehensive analysis of classification methods in gastrointestinal endoscopy imaging",
    authors: "D. Jha et al.",
    venue: "Medical Image Analysis",
    year: 2021,
    type: "Journal",
    link: "https://www.sciencedirect.com/science/article/pii/S1361841521000530",
  },
  {
    id: 8,
    title: "A Comprehensive Study on Colorectal Polyp Segmentation with ResUNet++, CRF and TTA",
    authors: "D. Jha et al.",
    venue: "IEEE Journal of Biomedical and Health Informatics",
    year: 2021,
    type: "Journal",
    link: "https://pubmed.ncbi.nlm.nih.gov/33400658/",
  },
  {
    id: 9,
    title: "Real-Time Polyp Detection, Localization and Segmentation in Colonoscopy Using Deep Learning",
    authors: "D. Jha et al.",
    venue: "IEEE Journal of Biomedical and Health Informatics",
    year: 2021,
    type: "Journal",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7968127/",
  },
  {
    id: 10,
    title: "Comparative validation of multi-instance instrument segmentation in endoscopy: ROBUST-MIS 2019 Challenge",
    authors: "T. Ross, A. Reinke, D. Jha et al.",
    venue: "Medical Image Analysis",
    year: 2021,
    type: "Journal",
    link: "https://www.sciencedirect.com/science/article/pii/S136184152030284X",
  },
  {
    id: 11,
    title: "An Extensive Study on Cross-Dataset Bias and Evaluation Metrics for GI Tract Abnormality Classification",
    authors: "V. Thambawita, D. Jha et al.",
    venue: "ACM Transactions on Computing for Healthcare",
    year: 2021,
    type: "Journal",
    link: "https://dl.acm.org/doi/10.1145/3386295",
  },
  {
    id: 12,
    title: "Kvasir-Capsule, a video capsule endoscopy dataset",
    authors: "P. Smedsrud*, H. Gjestang*, D. Jha* et al.",
    venue: "Nature Scientific Data",
    year: 2021,
    type: "Journal",
    link: "https://www.nature.com/articles/s41597-021-00920-z",
  },
  {
    id: 13,
    title: "Hyper-Kvasir: A Comprehensive Multi-Class Image and Video Dataset for Gastrointestinal Endoscopy",
    authors: "H. Borgli*, V. Thambawita*, D. Jha* et al.",
    venue: "Nature Scientific Data",
    year: 2020,
    type: "Journal",
    link: "https://www.nature.com/articles/s41597-020-00622-y",
  },
  {
    id: 14,
    title: "Diagnosis of Alzheimer's Disease Using Dual-Tree Complex Wavelet Transform, PCA, and Feed-Forward Neural Network",
    authors: "D. Jha et al.",
    venue: "Journal of Healthcare Engineering",
    year: 2017,
    type: "Journal",
    link: "https://onlinelibrary.wiley.com/doi/10.1155/2017/9060124",
  },
  // ── Conferences ───────────────────────────────────────────────────────────
  {
    id: 15,
    title: "CT Liver Segmentation via PVT-based Encoding and Refined Decoding",
    authors: "D. Jha et al.",
    venue: "ISBI",
    year: 2024,
    type: "Conference",
    link: "https://arxiv.org/pdf/2401.09630",
  },
  {
    id: 16,
    title: "GastroVision: A Multi-class Endoscopy Image Dataset for Computer-Aided GI Disease Detection",
    authors: "D. Jha et al.",
    venue: "ICML ML4MHD Workshop",
    year: 2023,
    type: "Conference",
    link: "https://arxiv.org/pdf/2307.08140",
  },
  {
    id: 17,
    title: "TransNetR: Transformer-based Residual Network for Polyp Segmentation with Multi-Center Out-of-Distribution Testing",
    authors: "D. Jha et al.",
    venue: "MIDL",
    year: 2023,
    type: "Conference",
    link: "https://arxiv.org/pdf/2303.07428",
  },
  {
    id: 18,
    title: "TransResU-Net: Transformer-based ResU-Net for Real-Time Colonoscopy Polyp Segmentation",
    authors: "N. K. Tomar, A. Shergill, B. Rieders, U. Bagci & D. Jha",
    venue: "IEEE BHI",
    year: 2022,
    type: "Conference",
    link: "https://arxiv.org/pdf/2206.08985",
  },
  {
    id: 19,
    title: "Text-guided attention for improved polyp segmentation",
    authors: "N. K. Tomar, D. Jha, U. Bagci, Sharib Ali",
    venue: "MICCAI",
    year: 2022,
    type: "Conference",
    link: "https://arxiv.org/pdf/2205.04280",
  },
  {
    id: 20,
    title: "Progressively Normalized Self-Attention Network for Video Polyp Segmentation",
    authors: "G.-P. Ji, Y.-C. Chou, D.-P. Fan, G. Chen, H. Fu, D. Jha, L. Shao",
    venue: "MICCAI",
    year: 2021,
    type: "Conference",
    link: "https://arxiv.org/pdf/2105.08468",
  },
  {
    id: 21,
    title: "Exploring Deep Learning Methods for Real-Time Surgical Instrument Segmentation in Laparoscopy",
    authors: "D. Jha et al.",
    venue: "IEEE BHI",
    year: 2021,
    type: "Conference",
    link: "https://ieeexplore.ieee.org/document/9508610",
  },
  {
    id: 22,
    title: "NanoNet: Real-Time Polyp Segmentation in Video Capsule Endoscopy and Colonoscopy",
    authors: "D. Jha et al.",
    venue: "IEEE CBMS",
    year: 2021,
    type: "Conference",
    link: "https://arxiv.org/pdf/2104.11138",
  },
  {
    id: 23,
    title: "The EndoTect 2020 Challenge: Evaluation and Comparison of Classification, Segmentation and Inference Time for Endoscopy",
    authors: "S. A. Hicks, D. Jha, V. Thambawita, P. Halvorsen, M. Riegler",
    venue: "ICPR Workshop",
    year: 2020,
    type: "Conference",
    link: "https://home.simula.no/~paalh/publications/files/icpr2020-endotect.pdf",
  },
  {
    id: 24,
    title: "LightLayers: Parameter-Efficient Dense and Convolutional Layers for Image Classification",
    authors: "D. Jha et al.",
    venue: "PDCAT-PAAP",
    year: 2020,
    type: "Conference",
    link: "https://arxiv.org/pdf/2101.02268",
  },
  {
    id: 25,
    title: "DoubleU-Net: A Deep Convolutional Neural Network for Medical Image Segmentation",
    authors: "D. Jha et al.",
    venue: "CBMS",
    year: 2020,
    type: "Conference",
    link: "https://arxiv.org/pdf/2006.04868",
  },
  {
    id: 26,
    title: "Kvasir-SEG: A segmented polyp dataset",
    authors: "D. Jha et al.",
    venue: "IEEE ISM",
    year: 2019,
    type: "Conference",
    link: "https://arxiv.org/pdf/1911.07069",
  },
  {
    id: 27,
    title: "ResUNet++: An advanced architecture for medical image segmentation",
    authors: "D. Jha et al.",
    venue: "IEEE ISM",
    year: 2019,
    type: "Conference",
    link: "https://arxiv.org/pdf/1911.07067",
  },
];

const filters = ['All', 'Journal', 'Conference'] as const;
type FilterType = typeof filters[number];

const Publications: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('All');

  const filtered = filter === 'All'
    ? publications
    : publications.filter(p => p.type === filter);

  // Group by year descending
  const byYear: Record<number, Publication[]> = {};
  for (const pub of filtered) {
    if (!byYear[pub.year]) byYear[pub.year] = [];
    byYear[pub.year].push(pub);
  }
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  // Running counter across years
  let counter = 0;

  return (
    <main className="min-h-screen bg-white pb-24">

      {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
      <div className="w-full bg-[#daeef8] pt-24 pb-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

          {/* Logo */}
          <img
            src={logoImg}
            alt="Perception Intelligence Lab"
            className="w-52 md:w-64 h-auto object-contain flex-shrink-0 mix-blend-multiply"
          />

          {/* Right: breadcrumb + title + scholar */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500">
              <NavLink to="/home" className="hover:text-[#0ed6e8] transition-colors">Home</NavLink>
              <span className="text-gray-400 text-xs">▶</span>
              <span className="text-gray-700 font-medium">Publications</span>
            </nav>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1a7bbf] tracking-tight leading-none">
              Publications
            </h1>

            <a
              href="https://scholar.google.com/citations?user=mMTyE68AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 rounded-md px-4 py-2 text-sm text-gray-700 font-medium shadow-sm transition-all duration-200 hover:shadow"
            >
              <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
              Google Scholar
            </a>
          </div>
        </div>
      </div>

      {/* ── Publications list ────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 pt-12">

        {/* Filter tabs */}
        <div className="flex gap-1 mb-12 bg-gray-100 p-1 rounded-lg w-fit">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Publications grouped by year */}
        <div className="space-y-14">
          {years.map(year => {
            const pubs = byYear[year];
            return (
              <section key={year}>
                {/* Year header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-gray-900 tabular-nums">{year}</span>
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400 font-medium">
                    {pubs.length} {pubs.length === 1 ? 'paper' : 'papers'}
                  </span>
                </div>

                {/* Entries */}
                <ol className="space-y-7">
                  {pubs.map(pub => {
                    counter += 1;
                    const num = counter;
                    return (
                      <li key={pub.id} className="flex gap-5 group">
                        {/* Number */}
                        <span className="text-gray-300 font-mono text-sm pt-0.5 min-w-[1.75rem] text-right select-none">
                          {num}.
                        </span>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start gap-2 mb-1">
                            {/* Type badge */}
                            <span className={`inline-block mt-0.5 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm shrink-0 ${
                              pub.type === 'Journal'
                                ? 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                                : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                            }`}>
                              {pub.type === 'Journal' ? 'Journal' : 'Conf.'}
                            </span>

                            {/* Title */}
                            {pub.link ? (
                              <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 font-semibold leading-snug hover:text-[#0ed6e8] transition-colors duration-200 group-hover:underline underline-offset-2 decoration-gray-300"
                              >
                                {pub.title}
                              </a>
                            ) : (
                              <span className="text-gray-900 font-semibold leading-snug">
                                {pub.title}
                              </span>
                            )}
                          </div>

                          {/* Authors */}
                          <p className="text-sm text-gray-500 italic mb-0.5">{pub.authors}</p>

                          {/* Venue + link */}
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-sm text-gray-400">{pub.venue}</span>
                            {pub.link && (
                              <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#0ed6e8] hover:underline font-medium"
                              >
                                PDF ↗
                              </a>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-400 text-center mt-20">No publications found.</p>
        )}
      </div>  {/* end publications list */}
    </main>
  );
};

export default Publications;
