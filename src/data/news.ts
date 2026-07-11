const base = import.meta.env.BASE_URL;
const img = (name: string) => `${base}Debesh/${name}`;

export type NewsCategory =
  | 'Award' | 'Service' | 'Talk' | 'Publication' | 'Research'
  | 'Competition' | 'Conference' | 'Honor' | 'Milestone' | 'Recognition' | 'Event';

export interface NewsItem {
  id: number;
  img: string;
  category: NewsCategory;
  headline: string;
  excerpt: string;
  tags: string[];
  date: string;
  link: string;
}

export const CATEGORY_COLOR: Record<NewsCategory, string> = {
  Award: '#c0392b',
  Service: '#1a7bbf',
  Talk: '#8e44ad',
  Publication: '#16a085',
  Research: '#d35400',
  Competition: '#2980b9',
  Conference: '#27ae60',
  Honor: '#c0392b',
  Milestone: '#f39c12',
  Recognition: '#1a7bbf',
  Event: '#7f8c8d',
};

export const NEWS: NewsItem[] = [
  { id: 1, img: img('guest-associate-editor.png'), category: 'Service', headline: 'Guest Associate Editor — IEEE Transactions on Medical Imaging', excerpt: "Honored to serve as Guest Associate Editor for IEEE TMI (IF: 9.8), one of the world's leading journals in medical imaging and AI, contributing to high-impact research advancing AI-driven healthcare.", tags: ['IEEE', 'Editorial', 'Medical Imaging'], date: '2026', link: 'https://lnkd.in/gyjkDRtj' },
  { id: 2, img: img('ieee-chicago.png'), category: 'Award', headline: 'IEEE Chicago Section Distinguished Junior R&D Award 2024', excerpt: 'Honored to receive the IEEE Chicago Section 2024 Distinguished Junior R&D Award. AI in medical imaging must move beyond benchmarks toward real clinical impact.', tags: ['IEEE', 'Award', 'Research'], date: '2024', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 3, img: img('keynote-talk.png'), category: 'Talk', headline: 'Keynote at LFMBio 2026 / WACV 2026, Tucson AZ', excerpt: 'Delivered a keynote "Designing Clinical Foundation Models: Beyond Scale and Toward Robust Biomedical Intelligence" at the LFMBio 2026 Workshop co-located with WACV 2026.', tags: ['Keynote', 'WACV', 'Foundation Models'], date: '2026', link: 'https://lnkd.in/gAQC4Bit' },
  { id: 4, img: img('sam-to-dino.png'), category: 'Publication', headline: 'From SAM to DINOv2 — WACV 2026 Accepted', excerpt: '"From SAM to DINOv2: Distilling Foundation Models into Lightweight Baselines for Generalized Polyp Segmentation" accepted at IEEE/CVF WACV 2026. Achieves SOTA with ~9× lower compute.', tags: ['WACV 2026', 'Segmentation', 'Foundation Models'], date: '2026', link: 'https://lnkd.in/gAQC4Bit' },
  { id: 5, img: img('giant-vision.png'), category: 'Competition', headline: "Finalist — 2026 Governor's Giant Vision Competition", excerpt: "Our team was named a Finalist at the 2026 Governor's Giant Vision! Competition hosted by the South Dakota Chamber of Commerce & Industry, presenting DentiMap on a prestigious stage.", tags: ['Competition', 'Innovation', 'South Dakota'], date: '2026', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 6, img: img('sdbcc-seminar.png'), category: 'Talk', headline: 'Talk at SDBCC Seminar, USD Sanford School of Medicine', excerpt: '"Seeing What Clinicians Can\'t: Deep Learning for Hidden Patterns in Medical Imaging" — a talk on how modern AI models uncover clinically meaningful signals beyond human-visible patterns.', tags: ['Seminar', 'Medical AI', 'USD'], date: '2025', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 7, img: img('aaai-2026.png'), category: 'Publication', headline: 'Three Papers Accepted at AAAI 2026 Workshop Venues', excerpt: 'Three research papers accepted across AAAI 2026 workshop venues in robust medical image segmentation, representation learning, and clinical AI including Prototype Learning and L2GNet.', tags: ['AAAI 2026', 'Segmentation', 'Research'], date: '2026', link: 'https://lnkd.in/gZFjY9q2' },
  { id: 8, img: img('prs-med.png'), category: 'Research', headline: 'New arXiv: PRS-Med — Position Reasoning Segmentation', excerpt: 'PRS-Med enables position-aware segmentation and natural language interaction in medical imaging. Integrates LLaVA-Med + TinySAM, introduces MMRS dataset, supports 6 imaging modalities.', tags: ['arXiv', 'VLM', 'Segmentation'], date: '2025', link: 'https://lnkd.in/gWNvEHkc' },
  { id: 9, img: img('google-scholar-cite.png'), category: 'Milestone', headline: '10,000 Citations on Google Scholar', excerpt: 'Honored to cross 10,000 citations on Google Scholar. Datasets like Kvasir-SEG and architectures like ResUNet++, DoubleU-Net, ColonSegNet, and TransNetR have become foundational in the field.', tags: ['Citations', 'Impact', 'Google Scholar'], date: '2025', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 10, img: img('stanford-top2.png'), category: 'Recognition', headline: 'Top 2% Scientists Worldwide — Stanford/Elsevier (3rd Consecutive Year)', excerpt: 'Recognized for the third consecutive year (2023, 2024 & 2025) among the Top 2% of scientists worldwide by Stanford University & Elsevier global ranking in AI & Image Processing.', tags: ['Stanford', 'Top 2%', 'Recognition'], date: '2025', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 11, img: img('midl-conference.png'), category: 'Conference', headline: 'MIDL Conference — Deep Learning for Medical Imaging', excerpt: 'The Medical Imaging with Deep Learning (MIDL) Conference showcased breakthroughs in deep learning architectures and tools reshaping diagnostics at the frontier of healthcare AI.', tags: ['MIDL', 'Conference', 'Healthcare AI'], date: '2024', link: 'https://lnkd.in/gwAup_XZ' },
  { id: 12, img: img('explainable-ai.png'), category: 'Talk', headline: 'Invited Talk on Explainable AI in Healthcare — IIT Roorkee & UPES', excerpt: 'Presented "Explainable Transformers and Mamba Models for Medical Image Interpretation" at the Faculty Development Program on Advancing Healthcare with Explainable AI, engaging 41 participants.', tags: ['Explainable AI', 'IIT Roorkee', 'Healthcare'], date: '2025', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 13, img: img('mamba-guided.png'), category: 'Publication', headline: 'Mamba Guided Boundary Prior Matters — MICCAI 2025', excerpt: '"Mamba Guided Boundary Prior Matters: A New Perspective for Generalized Polyp Segmentation" accepted at MICCAI 2025. SAM-MaGuP sets new SOTA in polyp segmentation across five datasets.', tags: ['MICCAI 2025', 'Mamba', 'Segmentation'], date: '2025', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 14, img: img('empowering-smart.png'), category: 'Talk', headline: 'Expert Session — Empowering Smart Healthcare with Deep Learning', excerpt: 'Delivered a 2-hour expert session at FDP organized by EICT Academy, NIT Patna in collaboration with UPES, MAKAUT and supported by MeitY, Govt. of India, engaging ~90 participants.', tags: ['FDP', 'NIT Patna', 'Deep Learning'], date: '2025', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 15, img: img('top-scholar-2024.png'), category: 'Recognition', headline: '2024 Top Scholar by ScholarGPS — Top 0.5% Worldwide', excerpt: 'Named a 2024 Top Scholar by ScholarGPS, ranking in the top 0.5% of scholars worldwide. Ranked #51 in Image Segmentation and #1,201 in Medical Imaging globally.', tags: ['ScholarGPS', 'Top Scholar', 'Ranking'], date: '2024', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 16, img: img('aicte-fdp.png'), category: 'Talk', headline: 'Two Talks at AICTE Faculty Development Program — MNIT Jaipur', excerpt: 'Delivered two talks at the AICTE Faculty Development Program organized by MNIT Jaipur on deep learning for radiology and reducing miss rates in GI endoscopy using data-centric AI.', tags: ['AICTE', 'FDP', 'Radiology'], date: '2025', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 17, img: img('acm-transactions.png'), category: 'Award', headline: 'Best Paper Award — ACM Transactions on Computing for Healthcare', excerpt: 'Honored to receive the Best Paper Award from ACM Transactions on Computing for Healthcare — five years after publication — for work on cross-dataset bias in GI tract abnormality classification.', tags: ['ACM', 'Best Paper', 'Healthcare'], date: '2025', link: 'https://lnkd.in/gmDgTpmm' },
  { id: 18, img: img('stanford-medai-talk.png'), category: 'Talk', headline: 'Invited Talk at Stanford MedAI — From Data to Diagnosis', excerpt: '"From Data to Diagnosis – Advancing Medical Imaging with Curated Datasets and AI Algorithms" — showcasing how curated datasets and open-source models transform radiology and GI endoscopy.', tags: ['Stanford', 'MedAI', 'Invited Talk'], date: '2024', link: 'https://lnkd.in/gaGfQa7E' },
  { id: 19, img: img('ieee-senior-member.png'), category: 'Honor', headline: 'Elevated to IEEE Senior Member', excerpt: "Elevated to the prestigious grade of IEEE Senior Member — a distinction held by only 10% of IEEE's nearly half a million members, recognizing professional excellence and technical achievements.", tags: ['IEEE', 'Senior Member', 'Honor'], date: '2024', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 20, img: img('rd-award.png'), category: 'Award', headline: 'IEEE Chicago Section Distinguished Junior R&D Award', excerpt: 'Received the IEEE Chicago Section Distinguished Junior R&D Award, recognizing outstanding contributions to AI-driven medical imaging and computer vision research.', tags: ['IEEE Chicago', 'Award', 'AI'], date: '2024', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 21, img: img('ieee-tmi-distinguished.png'), category: 'Award', headline: 'IEEE TMI Distinguished Reviewer Silver Level Award 2023–2024', excerpt: 'Honored to receive the IEEE TMI Distinguished Reviewer Silver Level Award for 2023–2024, recognizing dedication and investment of time in providing thoughtful peer review feedback.', tags: ['IEEE TMI', 'Reviewer', 'Award'], date: '2024', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 22, img: img('medico-challenge.png'), category: 'Research', headline: 'Medico 2020 & MedAI 2021 Challenge Paper Published', excerpt: '"Validating Polyp and Instrument Segmentation Methods in Colonoscopy through Medico 2020 and MedAI 2021 Challenges" — Dice improved from 0.8607 to 0.8993 across 34 evaluated methods.', tags: ['Challenge', 'Colonoscopy', 'Benchmarking'], date: '2023', link: 'https://lnkd.in/gbxDJ4Zv' },
  { id: 23, img: img('top-2-scientists.png'), category: 'Recognition', headline: 'Top 2% Scientists — Stanford & Elsevier Global Ranking', excerpt: 'Recognized among the top 2% of scientists worldwide by Stanford University and Elsevier ranking in Artificial Intelligence & Image Processing and Biomedical Engineering.', tags: ['Stanford', 'Elsevier', 'Top 2%'], date: '2023', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 24, img: img('simula-phd.png'), category: 'Milestone', headline: 'PhD Milestone Celebration — Simula Metropolitan', excerpt: 'Celebrating a timeless achievement with a Skultuna medal for PhD from Simula Metropolitan Center for Digital Engineering (SimulaMet). Proof that accomplishments have a timeless glow.', tags: ['PhD', 'SimulaMet', 'Milestone'], date: '2023', link: 'https://www.linkedin.com/in/debeshjha/' },
  { id: 25, img: img('google-ddw.png'), category: 'Event', headline: "Meeting Google's Managing Director of Applied AI at DDW 2023", excerpt: "Had the privilege of meeting Scott Penberthy, Managing Director of Applied Artificial Intelligence at Google, and Dr. Prateek Sharma at DDW 2023, discussing foundational models in medical imaging.", tags: ['Google', 'DDW 2023', 'Collaboration'], date: '2023', link: 'https://www.linkedin.com/in/debeshjha/' },
];
