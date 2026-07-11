import { useEffect, useState } from 'react';
import { CURRENT_RESEARCHERS, type TeamMember } from '../data/people';
import { useInView } from '../hooks/useInView';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import '../Styles/People.css';

interface TeamCardProps {
  member: TeamMember;
  delayMs: number;
}

const TeamCard = ({ member, delayMs }: TeamCardProps) => {
  const [ref, visible] = useInView<HTMLDivElement>(0.15);

  return (
    <article
      ref={ref}
      className={`people-card${visible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="people-photo">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          width={270}
          height={270}
          style={{ objectPosition: member.objectPosition ?? 'center top' }}
        />
      </div>
      <h3 className="people-name">{member.name}</h3>
      <p className="people-role">{member.role}</p>
      <span className="people-divider" aria-hidden="true" />
      <p className="people-desc">{member.description}</p>
      <a href={member.portfolioLink} target="_blank" rel="noopener noreferrer" className="people-link">
        View Portfolio →
      </a>
    </article>
  );
};

const People = () => {
  useDocumentMeta({
    title: 'People',
    description: 'Researchers and engineers behind the AI models at the Biomedical Perception & Intelligence Lab.',
  });

  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setHeaderVisible(true), 100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <main id="main" className="people-page">
      <header className={`people-header${headerVisible ? ' is-visible' : ''}`}>
        <h1 className="people-title">Current Researchers</h1>
        <p className="people-subtitle">
          The researchers and engineers behind the AI models at the Biomedical Perception & Intelligence Lab.
        </p>
      </header>

      <div className="people-grid">
        {CURRENT_RESEARCHERS.map((member, i) => (
          <TeamCard key={member.name} member={member} delayMs={i * 200} />
        ))}
      </div>

      <section className="alumni-section">
        <h2 className="alumni-title">Alumni</h2>
        <p style={{ fontSize: 16, color: '#999', margin: '0 0 48px' }}>
          Former members who have contributed to the lab.
        </p>
        <div className="alumni-empty">Alumni will be listed here soon.</div>
      </section>
    </main>
  );
};

export default People;
