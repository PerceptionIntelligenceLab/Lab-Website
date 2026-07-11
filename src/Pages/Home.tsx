import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { NewsCarousel } from '../components/NewsCarousel';
import logo from '../assets/LogoImage.png';
import '../Styles/Home.css';

const Home = () => {
  useDocumentMeta({
    title: 'Home',
    description: 'Biomedical Perception & Intelligence Lab — AI research in medical imaging led by Dr. Debesh Jha at the University of South Dakota.',
  });

  return (
    <main id="main">
      <section className="min-h-screen flex items-center justify-center px-6 py-20 md:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-16">
          <div className="w-full max-w-4xl text-center md:text-left order-2 md:order-1">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-medium">Welcome to</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.15] pb-2 hero-gradient-text -mt-1">
              <span className="block">Biomedical Perception</span>
              <span className="block">&amp; Intelligence Lab</span>
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              The Biomedical Perception &amp; Intelligence Lab was founded by Dr. Debesh Jha, located at the Department of Computer Science,{' '}
              <span className="text-red-600">University of South Dakota</span>, Vermillion, South Dakota, USA.
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
              alt="Biomedical Perception & Intelligence Lab"
              width={800}
              height={800}
              className="w-[75vw] max-w-xs sm:max-w-sm md:w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain md:scale-110 md:origin-center"
            />
          </div>
        </div>
      </section>

      <section id="discover" className="bg-white pb-10 scroll-mt-4">
        <NewsCarousel />
      </section>
    </main>
  );
};

export default Home;
