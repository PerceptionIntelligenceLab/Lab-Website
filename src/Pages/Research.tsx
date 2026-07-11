import { RESEARCH_PROJECTS, type ResearchProject } from '../data/research';
import { LazyVideo } from '../components/LazyVideo';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import '../Styles/Research.css';

const VideoBox = ({ project }: { project: ResearchProject }) => (
  <div className="rp-video-box">
    <LazyVideo src={project.video} />
    <div className="rp-video-overlay" aria-hidden="true" />
  </div>
);

const TextBox = ({ project }: { project: ResearchProject }) => (
  <div className="rp-text-box">
    <div className="rp-text-inner">
      <h2 className="rp-project-title">{project.title}</h2>
      <div className="rp-underline" aria-hidden="true" />
      <p>{project.desc}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="rp-arrow-link"
        aria-label={`Learn more about ${project.title}`}
      >
        <span className="rp-bouncing-arrow" aria-hidden="true">→</span>
      </a>
    </div>
  </div>
);

const Research = () => {
  useDocumentMeta({
    title: 'Research',
    description: 'Active AI research projects at the Biomedical Perception & Intelligence Lab in medical imaging and diagnostics.',
  });

  return (
    <main id="main" className="research-page">
      <header className="research-page-header">
        <h1>Active Research</h1>
        <p>Cutting-edge AI research in medical imaging and diagnostics</p>
      </header>

      {RESEARCH_PROJECTS.map(project => (
        <section className="rp-split" key={project.title}>
          {project.side === 'left' ? (
            <>
              <VideoBox project={project} />
              <TextBox project={project} />
            </>
          ) : (
            <>
              <TextBox project={project} />
              <VideoBox project={project} />
            </>
          )}
        </section>
      ))}
    </main>
  );
};

export default Research;
