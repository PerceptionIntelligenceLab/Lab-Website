import liverMRImg from '../assets/Datasets pictures/LiverMR.png';
import panSegImg from '../assets/Datasets pictures/Pensegdata.png';
import periPancImg from '../assets/Datasets pictures/PeriPancreatic.png';
import gastroVisionImg from '../assets/Datasets pictures/GastroVision.png';
import polypGenVideoImg from '../assets/Datasets pictures/polygenvideo.png';
import polypGenStillImg from '../assets/Datasets pictures/ploygenstill.png';
import medvqaImg from '../assets/Datasets pictures/ImageCLEFmed MEDVQA GI 2023.png';
import kvasirSegImg from '../assets/Datasets pictures/Kvasir-SEG.png';
import endocvImg from '../assets/Datasets pictures/EndoCV 2021.png';
import kvasirInstrumentImg from '../assets/Datasets pictures/Kvasir-Instrument.png';
import kvasirSessileImg from '../assets/Datasets pictures/Kvasir-sessile.png';
import endotectImg from '../assets/Datasets pictures/Endotect 2020.png';
import medicoImg from '../assets/Datasets pictures/Medico Automatic Polyp Segmentation.png';
import kvasirCapsuleImg from '../assets/Datasets pictures/Kvasir-Capsule.png';
import kvasirCapsuleSegImg from '../assets/Datasets pictures/KvasirCapsule-SEG.png';
import pmDataImg from '../assets/Datasets pictures/PM data.png';

export interface DatasetLink {
  label: string;
  url: string;
}

export interface Dataset {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  links: DatasetLink[];
}

export const DATASET_CHIPS = ['All', 'MRI', 'CT', 'Endoscopy', 'Capsule', 'Segmentation', 'Detection', 'Classification', 'Video', 'Sports'] as const;

export const DATASETS: Dataset[] = [
  { id: 1, title: 'CirrMRI600+', image: liverMRImg, tags: ['MRI', 'Segmentation', 'Liver'], desc: '628 abdominal MRI volumes (T1W: 310, T2W: 318) with physician masks for liver cirrhosis research; single-center, multivendor, multisequence.', links: [{ label: 'Dataset', url: 'https://osf.io/cuk24/' }] },
  { id: 2, title: 'PanSegData', image: panSegImg, tags: ['MRI', 'CT', 'Segmentation', 'Pancreas'], desc: '767 MRI and 1,350 CT scans for pancreas segmentation. PanSegNet achieved Dice: 88.3% (CT), 85.0% (T1W), 86.3% (T2W); strong volume correlation and agreement.', links: [{ label: 'Dataset', url: 'https://osf.io/kysnj/' }] },
  { id: 3, title: 'Peri-Pancreatic Edema', image: periPancImg, tags: ['CT', 'Classification'], desc: '255 pancreatitis CT scans with edema labels (179 positive, 76 negative) and expert pancreas masks to support robust research.', links: [{ label: 'Dataset', url: 'https://osf.io/cuk24/' }] },
  { id: 4, title: 'GastroVision', image: gastroVisionImg, tags: ['Endoscopy', 'Classification', 'Detection'], desc: '8,000 GI endoscopy images across 27 classes from multiple centers with expert annotations; strong baseline benchmarks.', links: [{ label: 'Dataset', url: 'https://drive.google.com/drive/u/1/folders/1T35gqO7jIKNxC-gVA2YVOMdsL7PSqeAa' }, { label: 'Paper', url: 'https://arxiv.org/pdf/2307.08140.pdf' }] },
  { id: 5, title: 'PolypGen Video Sequences', image: polypGenVideoImg, tags: ['Endoscopy', 'Video', 'Segmentation', 'Detection'], desc: 'Multicenter polyp video dataset for detection and segmentation with 3,762 precise labels validated by senior gastroenterologists.', links: [{ label: 'Dataset', url: 'https://drive.google.com/drive/u/2/folders/16uL9n84SrMt7IiQFzTUQNaJ9TbHJ8DhW' }, { label: 'Paper', url: 'https://www.nature.com/articles/s41597-023-01981-y' }] },
  { id: 6, title: 'PolypGen Still Frames', image: polypGenStillImg, tags: ['Endoscopy', 'Segmentation', 'Detection'], desc: '8,037 frames from six hospitals with positive and negative samples enabling generalizable polyp segmentation and detection.', links: [{ label: 'Dataset', url: 'https://www.synapse.org/Synapse:syn26376615/wiki/613312' }, { label: 'Paper', url: 'https://www.nature.com/articles/s41597-023-01981-y' }] },
  { id: 7, title: 'ImageCLEFmed MEDVQA GI 2023', image: medvqaImg, tags: ['Endoscopy', 'Classification', 'Segmentation'], desc: 'Colonoscopy images with text and segmentation for VQA, VQG, and VLQA tasks to enhance interpretability in diagnostics.', links: [{ label: 'Dataset', url: 'https://drive.google.com/file/d/1jTyLWwcHzbLpWjSNwmgiiavXDjuQe5y7/view' }] },
  { id: 8, title: 'Kvasir-SEG', image: kvasirSegImg, tags: ['Endoscopy', 'Segmentation', 'Detection'], desc: '1,000 polyp images with masks and bounding boxes across varied resolutions to support detection and segmentation research.', links: [{ label: 'Dataset', url: 'https://datasets.simula.no/kvasir-seg/' }, { label: 'Paper', url: 'https://arxiv.org/pdf/1911.07069.pdf' }] },
  { id: 9, title: 'EndoCV 2021', image: endocvImg, tags: ['Endoscopy', 'Segmentation', 'Detection'], desc: 'Five dataset types with diverse splits for rigorous evaluation of detection, segmentation, and localization methods.', links: [{ label: 'Dataset', url: 'https://endocv2021.grand-challenge.org/' }, { label: 'Paper', url: 'https://arxiv.org/pdf/2106.04463.pdf' }] },
  { id: 10, title: 'Kvasir-Instrument', image: kvasirInstrumentImg, tags: ['Endoscopy', 'Segmentation', 'Detection'], desc: '590 endoscopic tool images with ground-truth masks and bounding boxes; foundational for automatic tool segmentation.', links: [{ label: 'Dataset', url: 'https://datasets.simula.no/kvasir-instrument/' }, { label: 'Paper', url: 'https://arxiv.org/pdf/2011.08065.pdf' }] },
  { id: 11, title: 'Kvasir-sessile', image: kvasirSessileImg, tags: ['Endoscopy', 'Segmentation', 'Detection'], desc: 'Focus on sessile polyps to support robust detection and segmentation in challenging colorectal scenarios.', links: [{ label: 'Dataset', url: 'https://endocv2021.grand-challenge.org/' }, { label: 'Paper', url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9314114' }] },
  { id: 12, title: 'Endotect 2020', image: endotectImg, tags: ['Endoscopy', 'Classification', 'Segmentation', 'Detection'], desc: 'Comprehensive challenge dataset across centers with detection boxes, pixel masks, and negatives for broad benchmarking.', links: [{ label: 'Dataset', url: 'http://home.simula.no/~paalh/publications/files/icpr2020-endotect.pdf' }, { label: 'Paper', url: 'http://home.simula.no/~paalh/publications/files/icpr2020-endotect.pdf' }] },
  { id: 13, title: 'Medico Automatic Polyp Segmentation', image: medicoImg, tags: ['Endoscopy', 'Segmentation', 'Detection'], desc: 'Public benchmark with 1,000 segmented images emphasizing robustness, speed, and generalization for clinical impact.', links: [{ label: 'Dataset', url: 'https://www.kaggle.com/datasets/debeshjha1/medico-automatic-polyp-segmentation-challenge' }, { label: 'Paper', url: 'https://arxiv.org/pdf/2012.15244' }] },
  { id: 14, title: 'Kvasir-Capsule', image: kvasirCapsuleImg, tags: ['Capsule', 'Classification', 'Video'], desc: 'Large-scale capsule endoscopy dataset with millions of frames and 14 anomaly classes to advance AI diagnostics.', links: [{ label: 'Dataset', url: 'https://osf.io/dv2ag/' }, { label: 'Paper', url: 'https://www.nature.com/articles/s41597-021-00920-z' }] },
  { id: 15, title: 'KvasirCapsule-SEG', image: kvasirCapsuleSegImg, tags: ['Capsule', 'Segmentation'], desc: 'Segmentation dataset supporting lightweight real-time models such as NanoNet for capsule and colonoscopy workflows.', links: [{ label: 'Dataset', url: 'https://datasets.simula.no/kvasir-capsule-seg/' }] },
  { id: 16, title: 'PMData', image: pmDataImg, tags: ['Sports'], desc: 'Lifelog and sports-activity data from 16 participants over five months for everyday health analysis and sports prediction.', links: [{ label: 'Dataset', url: 'https://dl.acm.org/doi/pdf/10.1145/3339825.3394926' }, { label: 'Paper', url: 'https://dl.acm.org/doi/abs/10.1145/3339825.3394926' }] },
];
