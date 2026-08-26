import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { NewsCarousel } from '../components/NewsCarousel';
import { LANDING_PROJECTS, TEAM_GROUPS } from '../data/landing';
import logo from '../assets/LogoImage.png';
import '../Styles/Home.css';

const Home = () => {
  useDocumentMeta({
    title: 'Biomedical Perception Intelligence Lab | GastroVision & DiseaseVision',
    description:
      'Biomedical Perception Intelligence Lab (USD) — GastroVision challenge, polyp detection benchmarks, DentiMap dental AI and the DiseaseVision framework.',
    absoluteTitle: true,
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
              alt="Biomedical Perception &amp; Intelligence Lab"
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

      <section aria-labelledby="about-lab" className="bg-white px-6 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <p className="home-eyebrow">About the lab</p>
          <h2 id="about-lab" className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            An academic AI research group in biomedical perception
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            The Biomedical Perception Intelligence Lab — known across the research community as the
            Biomedical perception lab, or simply the perception intelligence lab — studies how machines
            perceive, segment and reason about clinical imagery. Our work runs from open dataset curation
            through model architecture design to tools that clinicians can open in a browser.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Research at the Biomedical perception intelligence lab spans multi-class endoscopy datasets,
            polyp detection benchmarks, panoramic dental radiograph diagnostics and deployable clinical
            imaging infrastructure, released openly as GastroVision, DentiMap and the DiseaseVision
            framework. Datasets such as Kvasir-SEG and PolypGen and architectures including ResUNet++,
            DoubleUNet, ColonSegNet and TransNetR are used as benchmarks by medical imaging groups
            worldwide.
          </p>
        </div>
      </section>

      <section aria-labelledby="projects" className="bg-[#fbfdfe] px-6 py-16 md:py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="home-eyebrow">Projects</p>
          <h2 id="projects" className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Datasets, benchmarks and clinical tools
          </h2>
          <ul className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 list-none p-0">
            {LANDING_PROJECTS.map(project => (
              <li key={project.id}>
                <article id={project.id} className="home-card h-full flex flex-col scroll-mt-24">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0aa8b8]">{project.tagline}</p>
                  <h3 className="mt-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">{project.title}</h3>
                  <p className="mt-3 text-[0.97rem] text-gray-600 leading-relaxed flex-1">{project.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2 list-none p-0">
                    {project.chips.map(chip => (
                      <li key={chip} className="home-chip">{chip}</li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0aa8b8] hover:text-[#0ed6e8] transition-colors"
                  >
                    {project.linkLabel}
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-base text-gray-600">
            Browse every model in <Link to="/research" className="home-inline-link">Research</Link>, every release in{' '}
            <Link to="/code" className="home-inline-link">Code</Link>, and every public benchmark in{' '}
            <Link to="/datasets" className="home-inline-link">Datasets</Link>.
          </p>
        </div>
      </section>

      <section aria-labelledby="team" className="bg-white px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="home-eyebrow">Team</p>
          <h2 id="team" className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Faculty, researchers and global collaborators
          </h2>
          <ul className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3 list-none p-0">
            {TEAM_GROUPS.map(group => (
              <li key={group.id} className="home-card">
                <h3 className="text-lg font-bold tracking-tight text-gray-900">{group.heading}</h3>
                <p className="mt-3 text-[0.95rem] text-gray-600 leading-relaxed">{group.blurb}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base text-gray-600">
            Meet everyone on the <Link to="/people" className="home-inline-link">People</Link> page, or see open
            positions on <Link to="/join-us" className="home-inline-link">Join us</Link>.
          </p>
        </div>
      </section>

      <footer id="contact" className="bg-[#0a2540] text-white px-6 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Contact</h2>
            <address className="mt-5 not-italic text-[0.97rem] leading-relaxed text-white/70">
              Biomedical Perception &amp; Intelligence Lab<br />
              Department of Computer Science<br />
              University of South Dakota<br />
              414 E Clark St, Vermillion, SD 57069, USA
            </address>
            <p className="mt-5 text-[0.97rem]">
              <a href="mailto:debesh.jha@usd.edu" className="home-footer-link">debesh.jha@usd.edu</a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0ed6e8]">Elsewhere</h3>
            <ul className="mt-5 space-y-2.5 text-[0.97rem] list-none p-0">
              <li>
                <a href="https://github.com/PerceptionIntelligenceLab" target="_blank" rel="noopener noreferrer" className="home-footer-link">
                  GitHub organization
                </a>
              </li>
              <li>
                <a href="https://github.com/DebeshJha" target="_blank" rel="noopener noreferrer" className="home-footer-link">
                  GitHub · DebeshJha
                </a>
              </li>
              <li>
                <a href="https://perceptionintelligencelab.github.io/DiseaseVision/" target="_blank" rel="noopener noreferrer" className="home-footer-link">
                  DiseaseVision framework
                </a>
              </li>
              <li>
                <a href="https://scholar.google.com/citations?user=mMTyE68AAAAJ" target="_blank" rel="noopener noreferrer" className="home-footer-link">
                  Google Scholar
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 text-sm text-white/50">
          Biomedical Perception &amp; Intelligence Lab · University of South Dakota
        </p>
      </footer>
    </main>
  );
};

export default Home;
