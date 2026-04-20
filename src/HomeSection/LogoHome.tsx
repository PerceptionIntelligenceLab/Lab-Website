import React, { useState, useRef } from 'react';

import '../Styles/Home.css';
import logo from '../assets/LogoImage.png';

const base = import.meta.env.BASE_URL;
const img = (name: string) => `${base}Debesh/${name}`;

const newsCards = [
  { id: 1, img: img("guest-associate-editor.png"), category: "Service", headline: "Guest Associate Editor — IEEE Transactions on Medical Imaging", excerpt: "Honored to serve as Guest Associate Editor for IEEE TMI (IF: 9.8), one of the world's leading journals in medical imaging and AI, contributing to high-impact research advancing AI-driven healthcare.", tags: ["IEEE", "Editorial", "Medical Imaging"], date: "2026", link: "https://lnkd.in/gyjkDRtj" },
  { id: 2, img: img("ieee-chicago.png"), category: "Award", headline: "IEEE Chicago Section Distinguished Junior R&D Award 2024", excerpt: "Honored to receive the IEEE Chicago Section 2024 Distinguished Junior R&D Award. AI in medical imaging must move beyond benchmarks toward real clinical impact.", tags: ["IEEE", "Award", "Research"], date: "2024", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 3, img: img("keynote-talk.png"), category: "Talk", headline: "Keynote at LFMBio 2026 / WACV 2026, Tucson AZ", excerpt: "Delivered a keynote \"Designing Clinical Foundation Models: Beyond Scale and Toward Robust Biomedical Intelligence\" at the LFMBio 2026 Workshop co-located with WACV 2026.", tags: ["Keynote", "WACV", "Foundation Models"], date: "2026", link: "https://lnkd.in/gAQC4Bit" },
  { id: 4, img: img("sam-to-dino.png"), category: "Publication", headline: "From SAM to DINOv2 — WACV 2026 Accepted", excerpt: "\"From SAM to DINOv2: Distilling Foundation Models into Lightweight Baselines for Generalized Polyp Segmentation\" accepted at IEEE/CVF WACV 2026. Achieves SOTA with ~9× lower compute.", tags: ["WACV 2026", "Segmentation", "Foundation Models"], date: "2026", link: "https://lnkd.in/gAQC4Bit" },
  { id: 5, img: img("giant-vision.png"), category: "Competition", headline: "Finalist — 2026 Governor's Giant Vision Competition", excerpt: "Our team was named a Finalist at the 2026 Governor's Giant Vision! Competition hosted by the South Dakota Chamber of Commerce & Industry, presenting DentiMap on a prestigious stage.", tags: ["Competition", "Innovation", "South Dakota"], date: "2026", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 6, img: img("sdbcc-seminar.png"), category: "Talk", headline: "Talk at SDBCC Seminar, USD Sanford School of Medicine", excerpt: "\"Seeing What Clinicians Can't: Deep Learning for Hidden Patterns in Medical Imaging\" — a talk on how modern AI models uncover clinically meaningful signals beyond human-visible patterns.", tags: ["Seminar", "Medical AI", "USD"], date: "2025", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 7, img: img("aaai-2026.png"), category: "Publication", headline: "Three Papers Accepted at AAAI 2026 Workshop Venues", excerpt: "Three research papers accepted across AAAI 2026 workshop venues in robust medical image segmentation, representation learning, and clinical AI including Prototype Learning and L2GNet.", tags: ["AAAI 2026", "Segmentation", "Research"], date: "2026", link: "https://lnkd.in/gZFjY9q2" },
  { id: 8, img: img("prs-med.png"), category: "Research", headline: "New arXiv: PRS-Med — Position Reasoning Segmentation", excerpt: "PRS-Med enables position-aware segmentation and natural language interaction in medical imaging. Integrates LLaVA-Med + TinySAM, introduces MMRS dataset, supports 6 imaging modalities.", tags: ["arXiv", "VLM", "Segmentation"], date: "2025", link: "https://lnkd.in/gWNvEHkc" },
  { id: 9, img: img("google-scholar-cite.png"), category: "Milestone", headline: "10,000 Citations on Google Scholar", excerpt: "Honored to cross 10,000 citations on Google Scholar. Datasets like Kvasir-SEG and architectures like ResUNet++, DoubleU-Net, ColonSegNet, and TransNetR have become foundational in the field.", tags: ["Citations", "Impact", "Google Scholar"], date: "2025", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 10, img: img("stanford-top2.png"), category: "Recognition", headline: "Top 2% Scientists Worldwide — Stanford/Elsevier (3rd Consecutive Year)", excerpt: "Recognized for the third consecutive year (2023, 2024 & 2025) among the Top 2% of scientists worldwide by Stanford University & Elsevier global ranking in AI & Image Processing.", tags: ["Stanford", "Top 2%", "Recognition"], date: "2025", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 11, img: img("midl-conference.png"), category: "Conference", headline: "MIDL Conference — Deep Learning for Medical Imaging", excerpt: "The Medical Imaging with Deep Learning (MIDL) Conference showcased breakthroughs in deep learning architectures and tools reshaping diagnostics at the frontier of healthcare AI.", tags: ["MIDL", "Conference", "Healthcare AI"], date: "2024", link: "https://lnkd.in/gwAup_XZ" },
  { id: 12, img: img("explainable-ai.png"), category: "Talk", headline: "Invited Talk on Explainable AI in Healthcare — IIT Roorkee & UPES", excerpt: "Presented \"Explainable Transformers and Mamba Models for Medical Image Interpretation\" at the Faculty Development Program on Advancing Healthcare with Explainable AI, engaging 41 participants.", tags: ["Explainable AI", "IIT Roorkee", "Healthcare"], date: "2025", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 13, img: img("mamba-guided.png"), category: "Publication", headline: "Mamba Guided Boundary Prior Matters — MICCAI 2025", excerpt: "\"Mamba Guided Boundary Prior Matters: A New Perspective for Generalized Polyp Segmentation\" accepted at MICCAI 2025. SAM-MaGuP sets new SOTA in polyp segmentation across five datasets.", tags: ["MICCAI 2025", "Mamba", "Segmentation"], date: "2025", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 14, img: img("empowering-smart.png"), category: "Talk", headline: "Expert Session — Empowering Smart Healthcare with Deep Learning", excerpt: "Delivered a 2-hour expert session at FDP organized by EICT Academy, NIT Patna in collaboration with UPES, MAKAUT and supported by MeitY, Govt. of India, engaging ~90 participants.", tags: ["FDP", "NIT Patna", "Deep Learning"], date: "2025", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 15, img: img("top-scholar-2024.png"), category: "Recognition", headline: "2024 Top Scholar by ScholarGPS — Top 0.5% Worldwide", excerpt: "Named a 2024 Top Scholar by ScholarGPS, ranking in the top 0.5% of scholars worldwide. Ranked #51 in Image Segmentation and #1,201 in Medical Imaging globally.", tags: ["ScholarGPS", "Top Scholar", "Ranking"], date: "2024", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 16, img: img("aicte-fdp.png"), category: "Talk", headline: "Two Talks at AICTE Faculty Development Program — MNIT Jaipur", excerpt: "Delivered two talks at the AICTE Faculty Development Program organized by MNIT Jaipur on deep learning for radiology and reducing miss rates in GI endoscopy using data-centric AI.", tags: ["AICTE", "FDP", "Radiology"], date: "2025", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 17, img: img("acm-transactions.png"), category: "Award", headline: "Best Paper Award — ACM Transactions on Computing for Healthcare", excerpt: "Honored to receive the Best Paper Award from ACM Transactions on Computing for Healthcare — five years after publication — for work on cross-dataset bias in GI tract abnormality classification.", tags: ["ACM", "Best Paper", "Healthcare"], date: "2025", link: "https://lnkd.in/gmDgTpmm" },
  { id: 18, img: img("stanford-medai-talk.png"), category: "Talk", headline: "Invited Talk at Stanford MedAI — From Data to Diagnosis", excerpt: "\"From Data to Diagnosis – Advancing Medical Imaging with Curated Datasets and AI Algorithms\" — showcasing how curated datasets and open-source models transform radiology and GI endoscopy.", tags: ["Stanford", "MedAI", "Invited Talk"], date: "2024", link: "https://lnkd.in/gaGfQa7E" },
  { id: 19, img: img("ieee-senior-member.png"), category: "Honor", headline: "Elevated to IEEE Senior Member", excerpt: "Elevated to the prestigious grade of IEEE Senior Member — a distinction held by only 10% of IEEE's nearly half a million members, recognizing professional excellence and technical achievements.", tags: ["IEEE", "Senior Member", "Honor"], date: "2024", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 20, img: img("rd-award.png"), category: "Award", headline: "IEEE Chicago Section Distinguished Junior R&D Award", excerpt: "Received the IEEE Chicago Section Distinguished Junior R&D Award, recognizing outstanding contributions to AI-driven medical imaging and computer vision research.", tags: ["IEEE Chicago", "Award", "AI"], date: "2024", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 21, img: img("ieee-tmi-distinguished.png"), category: "Award", headline: "IEEE TMI Distinguished Reviewer Silver Level Award 2023–2024", excerpt: "Honored to receive the IEEE TMI Distinguished Reviewer Silver Level Award for 2023–2024, recognizing dedication and investment of time in providing thoughtful peer review feedback.", tags: ["IEEE TMI", "Reviewer", "Award"], date: "2024", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 22, img: img("medico-challenge.png"), category: "Research", headline: "Medico 2020 & MedAI 2021 Challenge Paper Published", excerpt: "\"Validating Polyp and Instrument Segmentation Methods in Colonoscopy through Medico 2020 and MedAI 2021 Challenges\" — Dice improved from 0.8607 to 0.8993 across 34 evaluated methods.", tags: ["Challenge", "Colonoscopy", "Benchmarking"], date: "2023", link: "https://lnkd.in/gbxDJ4Zv" },
  { id: 23, img: img("top-2-scientists.png"), category: "Recognition", headline: "Top 2% Scientists — Stanford & Elsevier Global Ranking", excerpt: "Recognized among the top 2% of scientists worldwide by Stanford University and Elsevier ranking in Artificial Intelligence & Image Processing and Biomedical Engineering.", tags: ["Stanford", "Elsevier", "Top 2%"], date: "2023", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 24, img: img("simula-phd.png"), category: "Milestone", headline: "PhD Milestone Celebration — Simula Metropolitan", excerpt: "Celebrating a timeless achievement with a Skultuna medal for PhD from Simula Metropolitan Center for Digital Engineering (SimulaMet). Proof that accomplishments have a timeless glow.", tags: ["PhD", "SimulaMet", "Milestone"], date: "2023", link: "https://www.linkedin.com/in/debeshjha/" },
  { id: 25, img: img("google-ddw.png"), category: "Event", headline: "Meeting Google's Managing Director of Applied AI at DDW 2023", excerpt: "Had the privilege of meeting Scott Penberthy, Managing Director of Applied Artificial Intelligence at Google, and Dr. Prateek Sharma at DDW 2023, discussing foundational models in medical imaging.", tags: ["Google", "DDW 2023", "Collaboration"], date: "2023", link: "https://www.linkedin.com/in/debeshjha/" },
];

const categoryColor: Record<string, string> = {
  Award: "#c0392b", Service: "#1a7bbf", Talk: "#8e44ad", Publication: "#16a085",
  Research: "#d35400", Competition: "#2980b9", Conference: "#27ae60", Honor: "#c0392b",
  Milestone: "#f39c12", Recognition: "#1a7bbf", Event: "#7f8c8d",
};

const newsStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Lora:ital,wght@0,400;0,500;1,400&family=IBM+Plex+Mono:wght@300;400&family=Playfair+Display:wght@700;900&display=swap');

  .news-track-outer {
    padding: 2.5rem 3rem;
    overflow: hidden;
    position: relative;
  }

  .news-track-outer::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    background: linear-gradient(to left, #f0f7fb, transparent);
    pointer-events: none;
    z-index: 5;
  }

  .news-track { overflow: hidden; }

  .news-track-inner {
    display: flex;
    gap: 1.8rem;
    width: max-content;
    align-items: stretch;
    padding-bottom: 1.5rem;
    animation: newsScroll 140s linear infinite;
    will-change: transform;
  }

  .news-track-inner.is-paused { animation-play-state: paused; }

  @keyframes newsScroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .news-card {
    flex-shrink: 0;
    width: 340px;
    background: #fff;
    border: 1.5px solid #d1e8f2;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
    border-radius: 2px;
  }

  .news-card:hover {
    transform: translateY(-10px);
    box-shadow: 6px 14px 0px #1a7bbf44;
    border-color: #1a7bbf;
  }

  .news-card-img {
    height: 200px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    background: #e8f4fb;
  }

  .news-card-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
    transition: transform 0.6s ease;
    padding: 4px;
  }

  .news-card:hover .news-card-img img { transform: scale(1.08); }

  .news-card-cat {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.56rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 5px 12px;
  }

  .news-card-num {
    position: absolute;
    bottom: 10px;
    right: 12px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.58rem;
    color: rgba(255,255,255,0.75);
    letter-spacing: 0.1em;
  }

  .news-card-body {
    padding: 1.3rem 1.4rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.7rem;
  }

  .news-card-meta { display: flex; align-items: center; gap: 0.6rem; }

  .news-card-source {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.58rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1a7bbf;
    font-weight: 400;
  }

  .news-card-dot { width: 3px; height: 3px; border-radius: 50%; background: #a0c4d8; }

  .news-card-time {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.58rem;
    color: #7faec4;
  }

  .news-card-headline {
    font-family: 'Lora', serif;
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.45;
    color: #1a3a50;
    letter-spacing: -0.01em;
  }

  .news-card-excerpt {
    font-family: 'Lora', serif;
    font-size: 0.8rem;
    line-height: 1.75;
    color: #4a7a94;
    flex: 1;
  }

  .news-card-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

  .news-tag {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.54rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 3px 8px;
    border: 1px solid #c0dcea;
    color: #1a7bbf;
    background: #f0f7fb;
    border-radius: 1px;
  }

  .news-card-footer {
    border-top: 1px solid #daeef8;
    padding: 0.85rem 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
  }

  .news-read-link {
    font-family: 'Playfair Display', serif;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #1a7bbf;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.45rem;
    transition: gap 0.2s;
    padding: 0;
  }

  .news-read-link:hover { gap: 0.85rem; }

  .news-read-arrow { font-size: 0.88rem; transition: transform 0.2s; }
  .news-read-link:hover .news-read-arrow { transform: translateX(4px); }

  .news-card-heart {
    font-size: 0.78rem;
    color: #a0c4d8;
    cursor: pointer;
    background: none;
    border: none;
    transition: color 0.2s;
  }

  .news-card-heart:hover { color: #c0392b; }

  .news-subheader {
    border-bottom: 2px solid #1a7bbf33;
    padding: 1.5rem 3rem 1.2rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .news-subheader-left h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 900;
    color: #1a3a50;
    line-height: 1;
    letter-spacing: -0.01em;
  }

  .news-subheader-left h2 span { color: #1a7bbf; }

  .news-subheader-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    color: #7faec4;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .news-nav-btn {
    width: 38px;
    height: 38px;
    background: none;
    border: 2px solid #1a7bbf;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, color 0.2s;
    color: #1a7bbf;
    border-radius: 2px;
    flex-shrink: 0;
  }

  .news-nav-btn:hover { background: #1a7bbf; color: #fff; }

  .news-footer-bar {
    border-top: 1.5px solid #1a7bbf22;
    padding: 0.9rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .news-footer-bar p {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.58rem;
    color: #7faec4;
    letter-spacing: 0.14em;
  }

  .news-footer-bar strong { color: #1a7bbf; }

  @media (max-width: 640px) {
    .news-track-outer { padding: 1.5rem 1rem; }
    .news-subheader { padding: 1.2rem 1rem 1rem; flex-direction: column; gap: 1rem; align-items: flex-start; }
    .news-footer-bar { padding: 0.8rem 1rem; }
    .news-card { width: 290px; }
  }
`;

const LogoHome: React.FC = () => {

  const innerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, tx: 0 });

  const DURATION = 140;

  const getTranslateX = () => {
    if (!innerRef.current) return 0;
    return new DOMMatrix(getComputedStyle(innerRef.current).transform).m41;
  };

  const getTotalHalfWidth = () => {
    if (!innerRef.current) return 1;
    return innerRef.current.scrollWidth / 2;
  };

  const freezeAt = (tx: number) => {
    const el = innerRef.current;
    if (!el) return;
    el.style.animationPlayState = "paused";
    el.style.transform = `translateX(${tx}px)`;
  };

  const resumeFrom = (tx: number) => {
    const el = innerRef.current;
    if (!el) return;
    const half = getTotalHalfWidth();
    const clamped = Math.min(0, Math.max(-half, tx));
    const progress = -clamped / half;
    el.style.transform = "";
    el.style.animationDelay = `${-(progress * DURATION)}s`;
    el.style.animationPlayState = "";
  };

  const nudge = (dir: "left" | "right") => {
    const el = innerRef.current;
    if (!el) return;
    const cardStep = DURATION / (newsCards.length * 2);
    const current = parseFloat(el.style.animationDelay || "0");
    const next = dir === "right" ? current - cardStep : current + cardStep;
    el.style.animationDelay = `${Math.min(0, Math.max(-DURATION, next))}s`;
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX, tx: getTranslateX() };
    freezeAt(dragStart.current.tx);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !innerRef.current) return;
    const delta = e.clientX - dragStart.current.x;
    innerRef.current.style.transform = `translateX(${dragStart.current.tx + delta}px)`;
  };

  const onMouseUp = () => {
    if (!isDragging.current || !innerRef.current) return;
    isDragging.current = false;
    const tx = new DOMMatrix(innerRef.current.style.transform).m41;
    resumeFrom(tx);
  };

  return (
    <>
      <style>{newsStyles}</style>

      {/* Hero section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 md:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-16">
          <div className="w-full max-w-4xl text-center md:text-left order-2 md:order-1 md:pt-0">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-medium mb-0">
              Welcome to
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.15] pb-2 hero-gradient-text -mt-1">
              <span className="block">Perception</span>
              <span className="block mt-0 whitespace-nowrap">Intelligence Lab</span>
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Perception Intelligence Lab was founded by Dr. Debesh Jha, located at the Department of Computer Science, <span className="text-red-600">University of South Dakota</span>, Vermillion, South Dakota, USA.
            </p>
            <a
              href="#discover"
              className="inline-block mt-6 md:mt-8 px-8 py-3.5 text-base font-semibold text-white rounded-lg bg-[#0ed6e8] hover:opacity-90 transition-opacity duration-200 shadow-md hover:shadow-lg"
            >
              Discover more
            </a>
          </div>
          <div className="flex-1 flex justify-center md:justify-start order-1 md:order-2 w-full md:w-auto md:mt-10 md:-ml-8">
            <img
              src={logo}
              alt="Perception Intelligence Lab"
              className="w-[75vw] max-w-xs sm:max-w-sm md:w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain md:scale-110 md:origin-center"
            />
          </div>
        </div>
      </section>

      {/* News / Highlights section */}
      <section id="discover" className="bg-white pb-10 scroll-mt-4">

        <div className="news-subheader">
          <div className="news-subheader-left">
            <div className="news-subheader-label">Perception Intelligence Lab · Dr. Debesh Jha</div>
            <h2>Recent <span>Highlights</span></h2>
          </div>
          <div style={{ display: "flex", gap: "0.7rem" }}>
            <button className="news-nav-btn" onClick={() => nudge("left")}>←</button>
            <button className="news-nav-btn" onClick={() => nudge("right")}>→</button>
          </div>
        </div>

        <div className="news-track-outer">
          <div className="news-track">
            <div
              ref={innerRef}
              className={`news-track-inner${hovered ? " is-paused" : ""}`}
              style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => { setHovered(false); onMouseUp(); }}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
            >
              {[...newsCards, ...newsCards].map((item, idx) => (
                <article className="news-card" key={`${item.id}-${idx}`}>
                  <div className="news-card-img">
                    <img src={item.img} alt={item.headline} draggable={false} loading="lazy" decoding="async" />
                    <span
                      className="news-card-cat"
                      style={{ background: categoryColor[item.category] ?? "#1a7bbf" }}
                    >
                      {item.category}
                    </span>
                    <span className="news-card-num">
                      {String((idx % newsCards.length) + 1).padStart(2, "0")} / {newsCards.length}
                    </span>
                  </div>

                  <div className="news-card-body">
                    <div className="news-card-meta">
                      <span className="news-card-source">PI Lab</span>
                      <span className="news-card-dot" />
                      <span className="news-card-time">{item.date}</span>
                    </div>
                    <h2 className="news-card-headline">{item.headline}</h2>
                    <p className="news-card-excerpt">{item.excerpt}</p>
                    <div className="news-card-tags">
                      {item.tags.map((t) => (
                        <span className="news-tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="news-card-footer">
                    <button className="news-read-link" onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}>
                      Read More <span className="news-read-arrow">→</span>
                    </button>
                    <button className="news-card-heart">♡</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="news-footer-bar">
          <p>Hover to pause · arrows to browse</p>
          <p>Showing <strong>{newsCards.length}</strong> highlights from the lab</p>
        </div>
      </section>
    </>
  );
};

export default LogoHome;
