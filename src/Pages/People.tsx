import { useState, useEffect, useRef } from 'react';
import debeshImg from '../assets/DebeshJha.png';
import harshithImg from '../assets/Harshith.png';
import saiImg from '../assets/Sai.png';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  portfolioLink: string;
  objectPosition?: string;
  photoScale?: number;
}

const currentResearchers: TeamMember[] = [
  {
    name: 'Dr. Debesh Jha',
    role: 'Principal Investigator · Assistant Professor (TT), USD',
    image: debeshImg,
    portfolioLink: 'https://debeshjha.com/',
    description:
      'AI Scientist and Assistant Professor (Tenure Track) at the University of South Dakota, leading the Perception Intelligence Lab. Former Senior Research Associate at Northwestern Medicine. Stanford Top 2% Scientist and IEEE Senior Member.',
  },
  {
    name: 'Harshith Reddy Nalla',
    role: 'Undergraduate Research Assistant · AI Research, USD',
    image: harshithImg,
    portfolioLink: 'https://harshithreddy01.github.io/My-Web/',
    photoScale: 0.8,
    description:
      'Computer Science undergraduate at USD, contributing to AI and deep learning research under Dr. Debesh Jha.',
  },
  {
    name: 'Swarna Sai Sankar',
    role: 'Graduate Research Assistant · Full Stack Engineer, USD',
    image: saiImg,
    portfolioLink: 'https://swarna7414.github.io/SwarnaSaiSankar/',
    description:
      'Currently a Graduate Research Assistant at USD, crafting React-based interfaces for AI and ML models. Pursuing an MS in Computer Science at USD.',
  },
];

function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [ref, isVisible] = useInView(0.15);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.2}s`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1 1 280px',
        maxWidth: '340px',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 270,
          height: 270,
          borderRadius: 24,
          overflow: 'hidden',
          marginBottom: 32,
          boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: member.objectPosition ?? 'center top',
            filter: 'grayscale(15%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.08) 100%)',
          }}
        />
      </div>

      <h3
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 26,
          fontWeight: 700,
          color: '#1a1a1a',
          margin: '0 0 6px 0',
          letterSpacing: '-0.02em',
          textAlign: 'center',
        }}
      >
        {member.name}
      </h3>

      <span
        style={{
          fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
          fontSize: 12,
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: '#999',
          marginBottom: 20,
          textAlign: 'center',
          lineHeight: 1.5,
          maxWidth: 280,
        }}
      >
        {member.role}
      </span>

      <div
        style={{
          width: 30,
          height: 2,
          background: '#1a1a1a',
          marginBottom: 20,
          borderRadius: 1,
        }}
      />

      <p
        style={{
          fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
          fontSize: 15,
          lineHeight: 1.75,
          color: '#666',
          textAlign: 'center',
          margin: 0,
          maxWidth: 300,
        }}
      >
        {member.description}
      </p>

      <a
        href={member.portfolioLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: 20,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 13,
          fontWeight: 500,
          color: '#2563eb',
          textDecoration: 'none',
          opacity: 0.85,
        }}
      >
        View Portfolio →
      </a>
    </div>
  );
}

export default function People() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '100px 24px 80px',
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@400;500&display=swap');`}</style>

      {/* Current Researchers */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: 64,
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(-30px)',
          transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1)',
          width: '100%',
          maxWidth: 1200,
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '0 0 20px 0',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          Current Researchers
        </h1>

        <p
          style={{
            fontSize: 17,
            color: '#999',
            maxWidth: 480,
            lineHeight: 1.7,
            margin: '0 auto',
          }}
        >
          The researchers and engineers behind the AI models at the Perception Intelligence Lab.
        </p>

        <div
          style={{
            width: 1,
            height: 24,
            background: 'linear-gradient(to bottom, #ddd, transparent)',
            margin: '16px auto 0',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 56,
          maxWidth: 1200,
          width: '100%',
          marginBottom: 100,
        }}
      >
        {currentResearchers.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>

      {/* Alumni */}
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          borderTop: '1px solid #e2e8f0',
          paddingTop: 64,
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '0 0 16px 0',
            letterSpacing: '-0.02em',
          }}
        >
          Alumni
        </h2>

        <p style={{ fontSize: 16, color: '#999', margin: '0 0 48px 0' }}>
          Former members who have contributed to the lab.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 120,
            color: '#cbd5e1',
            fontSize: 15,
            fontStyle: 'italic',
          }}
        >
          Alumni will be listed here soon.
        </div>
      </div>
    </div>
  );
}
