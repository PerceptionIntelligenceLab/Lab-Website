export interface LandingProject {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  chips: string[];
  link: string;
  linkLabel: string;
}

export interface TeamGroup {
  id: string;
  heading: string;
  blurb: string;
}

export const LANDING_PROJECTS: LandingProject[] = [
  {
    id: 'gastrovision',
    title: 'GastroVision Challenge & Website',
    tagline: 'Multi-class endoscopy datasets',
    desc: 'GastroVision is a multi-class gastrointestinal endoscopy image dataset of roughly 8,000 expert-annotated images across 27 classes collected from multiple centres. The GastroVision challenge and GastroVision website publish open baselines for computer aided gastrointestinal disease detection.',
    chips: ['Endoscopy', '27 classes', 'ICML ML4MHD'],
    link: 'https://arxiv.org/abs/2306.08210',
    linkLabel: 'Read the GastroVision paper',
  },
  {
    id: 'polyp-detection',
    title: 'Polyp Detection & Segmentation',
    tagline: 'Transformer-based medical analysis',
    desc: 'Our polyp detection benchmark evaluates advanced transformer-based medical analysis models such as TransNetR and TransRUPNet across Kvasir-SEG and PolypGen, measuring real-time colonoscopy accuracy alongside out-of-distribution generalization.',
    chips: ['TransNetR', 'Kvasir-SEG', 'Real-time'],
    link: 'https://perceptionintelligencelab.github.io/DiseaseVision/models/polyp',
    linkLabel: 'Try the polyp detection benchmark',
  },
  {
    id: 'dentimap',
    title: 'DentiMap Portal',
    tagline: 'Panoramic dental radiograph diagnostics',
    desc: 'DentiMap dental AI brings deep learning to panoramic dental radiograph diagnostics. It reads X-ray scans, highlights cavities, infections and other findings, and supports faster, more precise decisions at the chairside.',
    chips: ['Dental AI', 'Radiographs', 'Deep learning'],
    link: 'https://perceptionintelligencelab.github.io/DiseaseVision/models/dentimap',
    linkLabel: 'Open the DentiMap portal',
  },
  {
    id: 'diseasevision',
    title: 'DiseaseVision',
    tagline: 'Clinical imaging infrastructure & benchmarking',
    desc: 'The DiseaseVision framework is our computerized clinical imaging infrastructure and benchmarking platform. It serves live medical AI models for polyp segmentation, capsule endoscopy classification and dental radiograph analysis from a single interface.',
    chips: ['Framework', 'Benchmarking', 'Live models'],
    link: 'https://perceptionintelligencelab.github.io/DiseaseVision/',
    linkLabel: 'Explore the DiseaseVision framework',
  },
];

export const TEAM_GROUPS: TeamGroup[] = [
  {
    id: 'faculty',
    heading: 'Faculty',
    blurb: 'Principal Investigator Dr. Debesh Jha, Assistant Professor (Tenure Track) in the Department of Computer Science at the University of South Dakota, founder of the Biomedical perception intelligence lab.',
  },
  {
    id: 'researchers',
    heading: 'Researchers',
    blurb: 'Graduate researchers, graduate research assistants and undergraduate research assistants working on medical image segmentation, endoscopy benchmarking and clinical deployment.',
  },
  {
    id: 'collaborators',
    heading: 'Global collaborators',
    blurb: 'Clinical and academic research lab collaborators across gastroenterology, radiology and computer vision who co-author datasets, challenges and benchmark studies with the lab.',
  },
];
