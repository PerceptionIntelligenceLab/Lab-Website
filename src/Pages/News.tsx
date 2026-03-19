import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/picture.jpeg';

interface NewsItem {
  id: number;
  text: string;
  tag?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    text: "Recognized among the world's top 2% scientists by the Stanford University and Elsevier ranking for contributions to AI in biomedical engineering.",
    tag: "Award",
  },
  {
    id: 2,
    text: "Received A and S Professional Development Grant Program from the University of South Dakota for Spring 2025.",
    tag: "Grant",
  },
  {
    id: 3,
    text: "Elevated to IEEE Senior Member.",
    tag: "Honor",
  },
  {
    id: 4,
    text: "Three papers accepted at ICASSP 2025.",
    tag: "Publication",
  },
  {
    id: 5,
    text: "Three papers accepted at IEEE CVF WACV 2025.",
    tag: "Publication",
  },
  {
    id: 6,
    text: "DiffBoost accepted at IEEE TMI.",
    tag: "Publication",
  },
  {
    id: 7,
    text: "Poster of Distinction during Digestive Disease Week 2024.",
    tag: "Award",
  },
  {
    id: 8,
    text: "Best Industry-Related Paper Award at ICPR 2024 for work on harmonized spatial and spectral learning for robust and generalized medical image segmentation.",
    tag: "Award",
  },
  {
    id: 9,
    text: "Junior Distinguished Research and Development Award 2024 by the IEEE Chicago Section Award committee.",
    tag: "Award",
  },
  {
    id: 10,
    text: "Five papers presented at MICCAI 2024.",
    tag: "Publication",
  },
  {
    id: 11,
    text: "Two papers accepted at the 2024 CVPR Workshop.",
    tag: "Publication",
  },
  {
    id: 12,
    text: "IEEE TMI Distinguished Reviewer Silver Level Award for 2023–2024.",
    tag: "Award",
  },
  {
    id: 13,
    text: "Associate Editor for Frontiers in Radiation Oncology.",
    tag: "Service",
  },
  {
    id: 14,
    text: "Associate Editor for Medical Physics Journal.",
    tag: "Service",
  },
  {
    id: 15,
    text: "Kvasir-SEG dataset mentioned in the Artificial Intelligence Index Report 2022 from Stanford University.",
    tag: "Recognition",
  },
  {
    id: 16,
    text: "Guest Editor for Applications of Artificial Intelligence for the Diagnosis of Gastrointestinal Diseases.",
    tag: "Service",
  },
  {
    id: 17,
    text: "Guest Editor for Machine-Learning-Based Process and Analysis of Medical Images.",
    tag: "Service",
  },
  {
    id: 18,
    text: "One paper accepted at MICCAI 2022.",
    tag: "Publication",
  },
  // ── Achievements & Recognition ────────────────────────────────────────────
  {
    id: 19,
    text: "Recognized by Stanford among the world's top 2% scientists in AI for biomedical engineering.",
    tag: "Award",
  },
  {
    id: 20,
    text: "Poster of Distinction during Digestive Disease Week 2024.",
    tag: "Award",
  },
  {
    id: 21,
    text: "NSF I-Corps Award 2025.",
    tag: "Grant",
  },
  {
    id: 22,
    text: "Best Industry-Related Paper Award at ICPR 2024.",
    tag: "Award",
  },
  {
    id: 23,
    text: "A and S Professional Development Grant Program, Spring 2025.",
    tag: "Grant",
  },
  {
    id: 24,
    text: "IEEE Senior Member elevation.",
    tag: "Honor",
  },
  {
    id: 25,
    text: "Junior Distinguished R&D Award, IEEE Chicago Section 2024.",
    tag: "Award",
  },
  {
    id: 26,
    text: "Junior Distinguished R&D Award, IEEE Chicago Section 2022.",
    tag: "Award",
  },
  {
    id: 27,
    text: "Papers with Code first-ever Contributor Award.",
    tag: "Award",
  },
  {
    id: 28,
    text: "MICCAI 2022 Student Travel Award co-author.",
    tag: "Award",
  },
  {
    id: 29,
    text: "Best student paper award finalist — CBMS 2020, Mayo Clinic, Rochester, USA.",
    tag: "Award",
  },
  {
    id: 30,
    text: "Best paper award — ICEIC 2018, Hawaii, USA.",
    tag: "Award",
  },
  {
    id: 31,
    text: "Best Poster Presentation Award — ICEIC 2018, Hawaii, USA.",
    tag: "Award",
  },
];

const tagColors: Record<string, string> = {
  Award:       "bg-gray-100 text-black border border-gray-300",
  Grant:       "bg-gray-100 text-black border border-gray-300",
  Honor:       "bg-gray-100 text-black border border-gray-300",
  Publication: "bg-gray-100 text-black border border-gray-300",
  Service:     "bg-gray-100 text-black border border-gray-300",
  Recognition: "bg-gray-100 text-black border border-gray-300",
};

const News: React.FC = () => {
  return (
    <main className="min-h-screen bg-white pb-24">

      <div className="w-full bg-[#daeef8] pt-24 pb-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

          <div className="relative flex-shrink-0">
            <div className="w-80 md:w-110 h-75 md:h-80 bg-[#daeef8] rounded-[40%_60%_60%_40%/_50%_50%_60%_40%] flex items-center justify-center overflow-hidden">
              <img
                src={logoImg}
                alt="Perception Intelligence Lab"
                className="w-[95%] h-[95%] object-contain mix-blend-multiply"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500">
              <NavLink to="/home" className="hover:text-[#0ed6e8] transition-colors">Home</NavLink>
              <span className="text-gray-400 text-xs">▶</span>
              <span className="text-gray-700 font-medium">News</span>
            </nav>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1a7bbf] tracking-tight leading-none">
              News
            </h1>

            <p className="text-gray-500 text-sm md:text-base max-w-sm">
              Latest highlights, awards, and announcements from the lab.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-12">
        <ol className="space-y-5">
          {newsItems.map((item, idx) => (
            <li
              key={item.id}
              className="flex gap-5 pb-5 border-b border-gray-100 last:border-0 group"
            >
      
              <span className="text-gray-500 font-mono text-sm pt-0.5 min-w-[1.75rem] text-right select-none">
                {idx + 1}.
              </span>

              <div className="flex-1 flex flex-col gap-1.5">
                {item.tag && (
                  <span className={`self-start text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm ${tagColors[item.tag] ?? ''}`}>
                    {item.tag}
                  </span>
                )}
                <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

    </main>
  );
};

export default News;
