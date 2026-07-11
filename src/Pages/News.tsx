import { NavLink } from 'react-router-dom';
import { NewsCarousel } from '../components/NewsCarousel';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import heroImg from '../assets/picture.jpeg';

const News = () => {
  useDocumentMeta({
    title: 'News',
    description: 'Latest highlights, awards, and announcements from the Biomedical Perception & Intelligence Lab.',
  });

  return (
    <main id="main" className="min-h-screen bg-white pb-10">
      <div className="w-full bg-[#daeef8] pt-24 pb-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <div className="relative flex-shrink-0">
            <div className="w-80 md:w-110 h-75 md:h-80 bg-[#daeef8] rounded-[40%_60%_60%_40%/_50%_50%_60%_40%] flex items-center justify-center overflow-hidden">
              <img
                src={heroImg}
                alt="Biomedical Perception & Intelligence Lab"
                width={400}
                height={320}
                className="w-[95%] h-[95%] object-contain mix-blend-multiply"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500" aria-label="Breadcrumb">
              <NavLink to="/home" className="hover:text-[#0ed6e8] transition-colors">Home</NavLink>
              <span className="text-gray-400 text-xs" aria-hidden="true">▶</span>
              <span className="text-gray-700 font-medium" aria-current="page">News</span>
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

      <NewsCarousel />
    </main>
  );
};

export default News;
