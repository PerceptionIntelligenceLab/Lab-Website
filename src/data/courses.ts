import DataMining from '../assets/Courses/Datamining.png';
import Computers from '../assets/Courses/Computers.png';
import Seminar from '../assets/Courses/Seminar.png';
import MachineLearning from '../assets/Courses/MachineLearning.png';

export type CourseLevel = 'Graduate' | 'Undergraduate';

export interface Course {
  id: number;
  title: string;
  description: string;
  level: CourseLevel;
  university: string;
  image: string;
}

export const COURSE_LEVELS = ['All', 'Graduate', 'Undergraduate'] as const;

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Data Mining',
    level: 'Graduate',
    university: 'University of South Dakota',
    image: DataMining,
    description:
      'In this graduate course at University of South Dakota, students gain the ability to transform raw datasets into meaningful insights. The course emphasizes feature engineering, clustering, classification, and association rule learning, while also covering evaluation and reproducibility. Learners work with diverse datasets, practice model validation, and explore practical applications in science, business, and healthcare. By the end, they can design robust pipelines, detect patterns responsibly, and communicate findings effectively to both technical and non-technical audiences. The course blends technical depth with a strong focus on clarity, ethics, and hands-on experimentation.',
  },
  {
    id: 2,
    title: 'Introduction to Computers',
    level: 'Undergraduate',
    university: 'University of South Dakota',
    image: Computers,
    description:
      'This course at University of South Dakota offers a clear introduction to the world of computing, covering hardware, operating systems, software, and networks. Through interactive examples, learners build confidence in navigating digital systems and solving everyday computing problems. We highlight essential concepts like file organization, safe browsing, backups, and productivity tools, all taught with practical demonstrations. Students also practice communication of technical issues, making them better prepared for teamwork in advanced studies. By the end, learners understand not just how computers work, but how to use them responsibly and efficiently in research, professional, and personal contexts.',
  },
  {
    id: 3,
    title: 'Seminar',
    level: 'Graduate',
    university: 'University of South Dakota',
    image: Seminar,
    description:
      'The graduate seminar at University of South Dakota is designed to strengthen analytical thinking, presentation skills, and collaborative learning. Students engage with current research, prepare short talks, and participate in thoughtful discussions on emerging topics in computing and data science. The environment emphasizes inclusivity, critical questioning, and respectful dialogue. Participants learn how to critique ideas constructively, synthesize multiple viewpoints, and translate theory into practice. This course helps students build confidence as academic contributors, refine their communication style, and cultivate habits of lifelong learning, preparing them to thrive in both academic and professional environments.',
  },
  {
    id: 4,
    title: 'Introduction to Machine Learning',
    level: 'Graduate',
    university: 'University of South Dakota',
    image: MachineLearning,
    description:
      'At University of South Dakota, this graduate-level machine learning course provides a strong foundation in both supervised and unsupervised methods. Students explore regression, classification, clustering, ensemble methods, and neural networks, with a focus on when and why models work. Hands-on labs encourage coding, experimentation, and reproducibility, while lectures emphasize ethics, fairness, and explainability in AI systems. By the end of the course, students can confidently design, train, and evaluate models on real datasets, balancing accuracy with transparency.',
  },
];
