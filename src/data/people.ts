import debeshImg from '../assets/DebeshJha.png';
import harshithImg from '../assets/Harshith.png';
import saiImg from '../assets/Sai.png';
import dipikaImg from '../assets/Dipika.jpeg';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  portfolioLink: string;
  objectPosition?: string;
}

export const CURRENT_RESEARCHERS: TeamMember[] = [
  {
    name: 'Dr. Debesh Jha',
    role: 'Principal Investigator · Assistant Professor (TT), USD',
    image: debeshImg,
    portfolioLink: 'https://debeshjha.com/',
    description:
      'AI Scientist and Assistant Professor (Tenure Track) at the University of South Dakota, leading the Biomedical Perception & Intelligence Lab. Former Senior Research Associate at Northwestern Medicine. Stanford Top 2% Scientist and IEEE Senior Member.',
  },
  {
    name: 'Harshith Reddy Nalla',
    role: 'Undergraduate Research Assistant · AI Research, USD',
    image: harshithImg,
    portfolioLink: 'https://harshithreddy01.github.io/My-Web/',
    description:
      'Computer Science undergraduate at USD, contributing to AI and deep learning research under Dr. Debesh Jha.',
  },
  {
    name: 'Dipika Ranabhat',
    role: 'Graduate Student · Graduate Researcher in AI, USD',
    image: dipikaImg,
    portfolioLink: 'https://ranabhatdipika.com.np/',
    description:
      'Graduate student at USD conducting research in artificial intelligence under Dr. Debesh Jha at the Biomedical Perception & Intelligence Lab.',
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
