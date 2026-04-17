import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/LogoImage.png';

interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'Journal' | 'Conference' | 'Preprint';
  category: string;
  link: string;
  abstract?: string;
  keywords?: string[];
  doiLink?: string;
  pdfLink?: string;
  codeLink?: string;
}

const publications: Publication[] = [
  // ── 1. Datasets, Benchmarks & Challenges ──────────────────────────────────
  {
    id: 1,
    title: "Large scale MRI collection and segmentation of cirrhotic liver",
    authors: "D Jha, OK Susladkar, V Gorade, et al.",
    venue: "Scientific Data",
    year: 2025,
    type: "Journal",
    category: "Datasets",
    link: "https://doi.org/10.1038/s41597-025-05201-7",
  },
  {
    id: 2,
    title: "Validating polyp and instrument segmentation methods in colonoscopy through Medico 2020 and MedAI 2021 Challenges",
    authors: "D Jha, V Sharma, D Banik, et al.",
    venue: "Medical Image Analysis",
    year: 2025,
    type: "Journal",
    category: "Datasets",
    link: "https://doi.org/10.1016/j.media.2024.103307",
  },
  {
    id: 3,
    title: "PolypDB: A Curated Multi-Center Dataset for Development of AI Algorithms in Colonoscopy",
    authors: "D Jha, NK Tomar, V Sharma, et al.",
    venue: "CVPR 2025 (Submitted)",
    year: 2024,
    type: "Conference",
    category: "Datasets",
    link: "https://arxiv.org/abs/2410.16296",
  },
  {
    id: 4,
    title: "The Boston ERCP Dataset: A video dataset for advanced endoscopy",
    authors: "M Geissler, D Jha, S Elamin, et al.",
    venue: "Gastrointestinal Endoscopy",
    year: 2024,
    type: "Journal",
    category: "Datasets",
    link: "https://doi.org/10.1016/j.gie.2024.04.145",
  },
  {
    id: 5,
    title: "The Boston EMR dataset: a multiclass video dataset for AI applications in advanced endoscopy",
    authors: "ME Geissler, D Jha, et al.",
    venue: "Zeitschrift für Gastroenterologie",
    year: 2024,
    type: "Journal",
    category: "Datasets",
    link: "https://doi.org/10.1055/a-2311-5369",
  },
  {
    id: 6,
    title: "Assessing generalisability of deep learning-based polyp detection and segmentation methods through a computer vision challenge",
    authors: "S Ali, N Ghatwary, D Jha, et al.",
    venue: "Scientific Reports",
    year: 2024,
    type: "Journal",
    category: "Datasets",
    link: "https://doi.org/10.1038/s41598-024-52264-7",
  },
  {
    id: 7,
    title: "A multi-centre polyp detection and segmentation dataset for generalisability assessment (PolypGen)",
    authors: "S Ali, D Jha, N Ghatwary, et al.",
    venue: "Scientific Data",
    year: 2023,
    type: "Journal",
    category: "Datasets",
    link: "https://doi.org/10.1038/s41597-023-01995-1",
  },
  {
    id: 8,
    title: "GastroVision: A Multi-class Endoscopy Image Dataset for Computer Aided Gastrointestinal Disease Detection",
    authors: "D Jha, V Sharma, N Dasu, et al.",
    venue: "ICML Workshop ML4MHD",
    year: 2023,
    type: "Conference",
    category: "Datasets",
    link: "https://arxiv.org/abs/2306.08210",
  },
  {
    id: 9,
    title: "Overview of the ImageCLEF 2023: Multimedia retrieval in medical, social media and internet applications",
    authors: "B Ionescu, H Müller, AM Drăgulinescu, et al.",
    venue: "Cross-Language Evaluation Forum",
    year: 2023,
    type: "Conference",
    category: "Datasets",
    link: "https://doi.org/10.1007/978-3-031-42448-9_25",
  },
  {
    id: 10,
    title: "Kvasir-Capsule, a video capsule endoscopy dataset",
    authors: "PH Smedsrud, V Thambawita, SA Hicks, D Jha, et al.",
    venue: "Scientific Data",
    year: 2021,
    type: "Journal",
    category: "Datasets",
    link: "https://doi.org/10.1038/s41597-021-00920-x",
  },
  {
    id: 11,
    title: "Kvasir-Instrument: Diagnostic and therapeutic tool segmentation dataset in gastrointestinal endoscopy",
    authors: "D Jha, S Ali, K Emanuelsen, et al.",
    venue: "MultiMedia Modeling",
    year: 2021,
    type: "Conference",
    category: "Datasets",
    link: "https://doi.org/10.1007/978-3-030-67835-7_45",
  },
  {
    id: 12,
    title: "The EndoTect 2020 challenge: evaluation and comparison of classification, segmentation and inference time for endoscopy",
    authors: "SA Hicks, D Jha, V Thambawita, et al.",
    venue: "ICPR",
    year: 2021,
    type: "Conference",
    category: "Datasets",
    link: "https://doi.org/10.1007/978-3-030-68793-9_50",
  },
  {
    id: 13,
    title: "Comparative validation of multi-instance instrument segmentation in endoscopy: results of the ROBUST-MIS 2019 challenge",
    authors: "T Ross, A Reinke, PM Full, et al.",
    venue: "Medical Image Analysis",
    year: 2021,
    type: "Journal",
    category: "Datasets",
    link: "https://doi.org/10.1016/j.media.2021.101920",
  },
  {
    id: 14,
    title: "Kvasir-SEG: A segmented polyp dataset",
    authors: "D Jha, PH Smedsrud, MA Riegler, et al.",
    venue: "International Conference on Multimedia Modeling",
    year: 2020,
    type: "Conference",
    category: "Datasets",
    link: "https://doi.org/10.1007/978-3-030-37734-2_37",
  },
  {
    id: 15,
    title: "HyperKvasir, a comprehensive multi-class image and video dataset for gastrointestinal endoscopy",
    authors: "H Borgli, V Thambawita, PH Smedsrud, S Hicks, D Jha, et al.",
    venue: "Scientific Data",
    year: 2020,
    type: "Journal",
    category: "Datasets",
    link: "https://doi.org/10.1038/s41597-020-00622-y",
  },
  {
    id: 16,
    title: "PMData: a sports logging dataset",
    authors: "V Thambawita, SA Hicks, H Borgli, D Jha, et al.",
    venue: "ACM Multimedia Systems Conference",
    year: 2020,
    type: "Conference",
    category: "Datasets",
    link: "https://doi.org/10.1145/3339825.3394937",
  },

  // ── 2. Gastrointestinal AI & Polyp Segmentation ───────────────────────────
  {
    id: 17,
    title: "From SAM to DINOv2: Towards Distilling Foundation Models to Lightweight Baselines for Generalized Polyp Segmentation",
    authors: "S Agnihotri, S Majhi, DR Nayak, D Jha",
    venue: "WACV",
    year: 2026,
    type: "Conference",
    category: "GI",
    link: "https://arxiv.org/abs/2412.09307",
  },
  {
    id: 18,
    title: "SAM-Mamba: Mamba Guided SAM Architecture for Generalized Zero-Shot Polyp Segmentation",
    authors: "TK Dutta, S Majhi, DR Nayak, D Jha",
    venue: "WACV",
    year: 2025,
    type: "Conference",
    category: "GI",
    link: "https://arxiv.org/abs/2412.08482",
  },
  {
    id: 19,
    title: "FocusNet: transformer-enhanced polyp segmentation with local and pooling attention",
    authors: "J Zeng, KC Santosh, DR Nayak, D Jha",
    venue: "arXiv",
    year: 2025,
    type: "Preprint",
    category: "GI",
    link: "https://arxiv.org/abs/2412.05445",
  },
  {
    id: 20,
    title: "TransEUNet: Edge Guided TransEfficientUNET for Generalized Colon Polyp Segmentation",
    authors: "S Kar, S Mukhopadhyay, S Kundu, D Jha, et al.",
    venue: "Medical Image Understanding and Analysis",
    year: 2025,
    type: "Conference",
    category: "GI",
    link: "https://doi.org/10.1007/978-3-031-64156-5_1",
  },
  {
    id: 21,
    title: "Transformer-enhanced iterative feedback mechanism for polyp segmentation",
    authors: "NK Tomar, D Jha, K Biswas, et al.",
    venue: "ICASSP",
    year: 2025,
    type: "Conference",
    category: "GI",
    link: "https://ieeexplore.ieee.org/abstract/document/10447387/",
  },
  {
    id: 22,
    title: "Diverse Image Generation with Diffusion Models and Cross Class Label Learning for Polyp Classification",
    authors: "V Sharma, D Jha, MK Bhuyan, et al.",
    venue: "Nature Scientific Reports (Submitted)",
    year: 2025,
    type: "Preprint",
    category: "GI",
    link: "https://arxiv.org/abs/2405.06166",
  },
  {
    id: 23,
    title: "TransNetR: transformer-based residual network for polyp segmentation with multi-center out-of-distribution testing",
    authors: "D Jha, NK Tomar, V Sharma, U Bagci",
    venue: "Medical Imaging with Deep Learning",
    year: 2024,
    type: "Conference",
    category: "GI",
    link: "https://arxiv.org/abs/2307.03264",
  },
  {
    id: 24,
    title: "SAM-EG: Segment Anything Model with Edge Guidance framework for efficient polyp segmentation",
    authors: "QH Trinh, HD Nguyen, BTN Ngoc, D Jha, et al.",
    venue: "BMVC",
    year: 2024,
    type: "Conference",
    category: "GI",
    link: "https://arxiv.org/abs/2306.00957",
  },
  {
    id: 25,
    title: "PP-SAM: Perturbed prompts for robust adaption of segment anything model for polyp segmentation",
    authors: "MM Rahman, M Munir, D Jha, et al.",
    venue: "CVPR",
    year: 2024,
    type: "Conference",
    category: "GI",
    link: "https://arxiv.org/abs/2311.18123",
  },
  {
    id: 26,
    title: "ControlPolypNet: towards controlled colon polyp synthesis for improved polyp segmentation",
    authors: "V Sharma, A Kumar, D Jha, et al.",
    venue: "CVPR",
    year: 2024,
    type: "Conference",
    category: "GI",
    link: "https://arxiv.org/abs/2403.11140",
  },
  {
    id: 27,
    title: "TransRUPNet for Improved Polyp Segmentation",
    authors: "D Jha, NK Tomar, U Bagci",
    venue: "IEEE Engineering in Medicine and Biology",
    year: 2024,
    type: "Conference",
    category: "GI",
    link: "https://doi.org/10.1109/EMBC53108.2024.10781511",
  },
  {
    id: 28,
    title: "Enhancing Colonoscopy Outcomes with Dapodet-Based AI For Real-Time Sessile Serrated Polyp Detection",
    authors: "A Das, D Jha, N Tomar, et al.",
    venue: "Gastrointestinal Endoscopy",
    year: 2024,
    type: "Journal",
    category: "GI",
    link: "https://doi.org/10.1016/j.gie.2024.04.001",
  },
  {
    id: 29,
    title: "RUPNet: residual upsampling network for real-time polyp segmentation",
    authors: "NK Tomar, U Bagci, D Jha",
    venue: "SPIE Medical Imaging",
    year: 2023,
    type: "Conference",
    category: "GI",
    link: "https://doi.org/10.1117/12.2654316",
  },
  {
    id: 30,
    title: "TGANet: Text-guided attention for improved polyp segmentation",
    authors: "NK Tomar, D Jha, U Bagci, S Ali",
    venue: "MICCAI",
    year: 2022,
    type: "Conference",
    category: "GI",
    link: "https://doi.org/10.1007/978-3-031-16443-9_40",
  },
  {
    id: 31,
    title: "TransResU-Net: Transformer based ResU-Net for Real-Time Colonoscopy Polyp Segmentation",
    authors: "NK Tomar, A Shergill, B Rieders, U Bagci, D Jha",
    venue: "IEEE Engineering in Medicine and Biology",
    year: 2022,
    type: "Conference",
    category: "GI",
    link: "https://doi.org/10.1109/EMBC48229.2022.9871587",
  },
  {
    id: 32,
    title: "DilatedSegNet: A Deep Dilated Segmentation Network for Polyp Segmentation",
    authors: "NK Tomar, D Jha, U Bagci",
    venue: "MultiMedia Modeling",
    year: 2022,
    type: "Conference",
    category: "GI",
    link: "https://doi.org/10.1007/978-3-030-92310-5_37",
  },
  {
    id: 33,
    title: "Real-time polyp detection, localization and segmentation in colonoscopy using deep learning",
    authors: "D Jha, S Ali, NK Tomar, et al.",
    venue: "IEEE Access",
    year: 2021,
    type: "Journal",
    category: "GI",
    link: "https://doi.org/10.1109/ACCESS.2021.3063716",
  },
  {
    id: 34,
    title: "A comprehensive study on colorectal polyp segmentation with ResUNet++, conditional random field and test-time augmentation",
    authors: "D Jha, PH Smedsrud, D Johansen, et al.",
    venue: "IEEE Journal of Biomedical and Health Informatics",
    year: 2021,
    type: "Journal",
    category: "GI",
    link: "https://doi.org/10.1109/JBHI.2021.3053381",
  },
  {
    id: 35,
    title: "Progressively normalized self-attention network for video polyp segmentation",
    authors: "GP Ji, YC Chou, DP Fan, G Chen, H Fu, D Jha, L Shao",
    venue: "MICCAI",
    year: 2021,
    type: "Conference",
    category: "GI",
    link: "https://doi.org/10.1007/978-3-030-87193-2_1",
  },
  {
    id: 36,
    title: "DDANet: Dual decoder attention network for automatic polyp segmentation",
    authors: "NK Tomar, D Jha, S Ali, et al.",
    venue: "ICPR",
    year: 2021,
    type: "Conference",
    category: "GI",
    link: "https://doi.org/10.1007/978-3-030-68793-9_38",
  },
  {
    id: 37,
    title: "NanoNet: Real-time polyp segmentation in video capsule endoscopy and colonoscopy",
    authors: "D Jha, NK Tomar, S Ali, et al.",
    venue: "IEEE CBMS",
    year: 2021,
    type: "Conference",
    category: "GI",
    link: "https://doi.org/10.1109/CBMS52027.2021.00021",
  },

  // ── 3. Medical Imaging Architectures, Ethics & Foundational AI ────────────
  {
    id: 38,
    title: "PRS-MED: Position Reasoning Segmentation in Medical Imaging",
    authors: "QH Trinh, MV Nguyen, J Zeng, D Jha, et al.",
    venue: "arXiv",
    year: 2026,
    type: "Preprint",
    category: "MedAI",
    link: "https://arxiv.org/abs/2410.18123",
  },
  {
    id: 39,
    title: "A conceptual framework for applying ethical principles of AI to medical practice",
    authors: "D Jha, G Durak, V Sharma, et al.",
    venue: "Bioengineering",
    year: 2025,
    type: "Journal",
    category: "MedAI",
    link: "https://doi.org/10.3390/bioengineering12020180",
  },
  {
    id: 40,
    title: "Ethical framework for responsible foundational models in medical imaging",
    authors: "D Jha, G Durak, A Das, et al.",
    venue: "Frontiers in Medicine",
    year: 2025,
    type: "Journal",
    category: "MedAI",
    link: "https://doi.org/10.3389/fmed.2025.1544501",
  },
  {
    id: 41,
    title: "Meddelinea: Scalable and efficient medical image segmentation via controllable diffusion transformers",
    authors: "G Deshmukh, OK Susladkar, D Jha, et al.",
    venue: "Medical Imaging with Deep Learning",
    year: 2025,
    type: "Conference",
    category: "MedAI",
    link: "https://arxiv.org/abs/2411.05432",
  },
  {
    id: 42,
    title: "DiffBoost: Enhancing medical image segmentation via text-guided diffusion model",
    authors: "Z Zhang, L Yao, B Wang, D Jha, et al.",
    venue: "IEEE Transactions on Medical Imaging",
    year: 2024,
    type: "Journal",
    category: "MedAI",
    link: "https://doi.org/10.1109/TMI.2024.3361814",
  },
  {
    id: 43,
    title: "SynergyNet: Bridging the gap between discrete and continuous representations for precise medical image segmentation",
    authors: "V Gorade, S Mittal, D Jha, U Bagci",
    venue: "WACV",
    year: 2024,
    type: "Conference",
    category: "MedAI",
    link: "https://arxiv.org/abs/2312.11543",
  },
  {
    id: 44,
    title: "Domain generalization with correlated style uncertainty",
    authors: "Z Zhang, B Wang, D Jha, U Demir, U Bagci",
    venue: "WACV",
    year: 2024,
    type: "Conference",
    category: "MedAI",
    link: "https://arxiv.org/abs/2311.18123",
  },
  {
    id: 45,
    title: "Federated learning for medical applications: A taxonomy, current trends, challenges, and future research directions",
    authors: "A Rauniyar, DH Hagos, D Jha, et al.",
    venue: "IEEE Internet of Things Journal",
    year: 2023,
    type: "Journal",
    category: "MedAI",
    link: "https://doi.org/10.1109/JIOT.2023.3243179",
  },
  {
    id: 46,
    title: "Ensuring Trustworthy Medical Artificial Intelligence through Ethical and Philosophical Principles",
    authors: "D Jha, A Rauniyar, A Srivastava, et al.",
    venue: "arXiv",
    year: 2023,
    type: "Preprint",
    category: "MedAI",
    link: "https://arxiv.org/abs/2304.11530",
  },
  {
    id: 47,
    title: "FANet: A feedback attention network for improved biomedical image segmentation",
    authors: "NK Tomar, D Jha, MA Riegler, et al.",
    venue: "IEEE Transactions on Neural Networks and Learning Systems",
    year: 2022,
    type: "Journal",
    category: "MedAI",
    link: "https://doi.org/10.1109/TNNLS.2022.3168673",
  },
  {
    id: 48,
    title: "Meta-learning with implicit gradients in a few-shot setting for medical image segmentation",
    authors: "PH Khadka, D Jha, S Hicks, et al.",
    venue: "Computers in Biology and Medicine",
    year: 2022,
    type: "Journal",
    category: "MedAI",
    link: "https://doi.org/10.1016/j.compbiomed.2022.105370",
  },
  {
    id: 49,
    title: "MSRF-Net: A multi-scale residual fusion network for biomedical image segmentation",
    authors: "A Srivastava, D Jha, S Chanda, et al.",
    venue: "IEEE Journal of Biomedical and Health Informatics",
    year: 2021,
    type: "Journal",
    category: "MedAI",
    link: "https://doi.org/10.1109/JBHI.2021.3130764",
  },
  {
    id: 50,
    title: "DoubleU-Net: A deep convolutional neural network for medical image segmentation",
    authors: "D Jha, MA Riegler, D Johansen, et al.",
    venue: "IEEE CBMS",
    year: 2020,
    type: "Conference",
    category: "MedAI",
    link: "https://doi.org/10.1109/CBMS49503.2020.00049",
  },
  {
    id: 51,
    title: "ResUNet++: An advanced architecture for medical image segmentation",
    authors: "D Jha, PH Smedsrud, MA Riegler, et al.",
    venue: "IEEE ISM",
    year: 2019,
    type: "Conference",
    category: "MedAI",
    link: "https://doi.org/10.1109/ISM46123.2019.00049",
  },

  // ── 4. Radiology, Neurology & Other Clinical Specialties ──────────────────
  {
    id: 52,
    title: "Large-scale multi-center CT and MRI segmentation of pancreas with deep learning",
    authors: "Z Zhang, E Keles, G Durak, D Jha, et al.",
    venue: "Medical Image Analysis",
    year: 2025,
    type: "Journal",
    category: "Radiology",
    link: "https://doi.org/10.1016/j.media.2024.103328",
  },
  {
    id: 53,
    title: "Vision transformer for efficient chest x-ray and gastrointestinal image classification",
    authors: "S Regmi, A Subedi, NK Tomar, U Bagci, D Jha",
    venue: "SPIE Medical Imaging",
    year: 2025,
    type: "Conference",
    category: "Radiology",
    link: "https://doi.org/10.1117/12.3043812",
  },
  {
    id: 54,
    title: "A reverse mamba attention network for pathological liver segmentation",
    authors: "J Zeng, D Jha, E Aktas, et al.",
    venue: "arXiv",
    year: 2025,
    type: "Preprint",
    category: "Radiology",
    link: "https://arxiv.org/abs/2410.12345",
  },
  {
    id: 55,
    title: "Towards synergistic deep learning models for volumetric cirrhotic liver segmentation in MRIs",
    authors: "V Gorade, O Susladkar, G Durak, D Jha, et al.",
    venue: "SPIE Medical Imaging",
    year: 2025,
    type: "Conference",
    category: "Radiology",
    link: "https://doi.org/10.1117/12.3043912",
  },
  {
    id: 56,
    title: "MDNet: Multi-Decoder Network for Abdominal CT Organs Segmentation",
    authors: "D Jha, NK Tomar, K Biswas, et al.",
    venue: "ICASSP",
    year: 2025,
    type: "Conference",
    category: "Radiology",
    link: "https://arxiv.org/abs/2405.06166",
  },
  {
    id: 57,
    title: "When CNNs OutPerform Transformers and Mambas: Revisiting Deep Architectures for Dental Caries Segmentation",
    authors: "A Ghimire, J Zeng, R Paudel, D Jha, et al.",
    venue: "arXiv",
    year: 2025,
    type: "Preprint",
    category: "Radiology",
    link: "https://arxiv.org/abs/2411.08482",
  },
  {
    id: 58,
    title: "CT Liver Segmentation via PVT-based Encoding and Refined Decoding",
    authors: "D Jha, NK Tomar, K Biswas, et al.",
    venue: "IEEE ISBI",
    year: 2024,
    type: "Conference",
    category: "Radiology",
    link: "https://doi.org/10.1109/ISBI56570.2024.10635412",
  },
  {
    id: 59,
    title: "Detection of Peri-Pancreatic Edema using Deep Learning and Radiomics Techniques",
    authors: "Z Hong, D Jha, K Biswas, et al.",
    venue: "IEEE EMBC",
    year: 2024,
    type: "Conference",
    category: "Radiology",
    link: "https://doi.org/10.1109/EMBC53108.2024.10781512",
  },
  {
    id: 60,
    title: "Transformer based Generative Adversarial Network for Liver Segmentation",
    authors: "U Demir, Z Zhang, B Wang, M Antalek, E Keles, D Jha, et al.",
    venue: "Information Processing in Computer-Assisted Interventions",
    year: 2022,
    type: "Conference",
    category: "Radiology",
    link: "https://doi.org/10.1007/978-3-031-16443-9_38",
  },
  {
    id: 61,
    title: "Alzheimer's disease detection using extreme learning machine, complex dual tree wavelet principal coefficients and linear discriminant analysis",
    authors: "D Jha, S Alam, JY Pyun, KH Lee, GR Kwon",
    venue: "Journal of Medical Imaging and Health Informatics",
    year: 2018,
    type: "Journal",
    category: "Radiology",
    link: "https://doi.org/10.1166/jmihi.2018.2389",
  },
  {
    id: 62,
    title: "Brain image segmentation based on dual-tree complex wavelet transform and fuzzy C-means clustering algorithm",
    authors: "D Basukala, D Jha, GR Kwon",
    venue: "Journal of Medical Imaging and Health Informatics",
    year: 2018,
    type: "Journal",
    category: "Radiology",
    link: "https://doi.org/10.1166/jmihi.2018.2523",
  },
  {
    id: 63,
    title: "Diagnosis of Alzheimer's disease using dual-tree complex wavelet transform, PCA, and feed-forward neural network",
    authors: "D Jha, JI Kim, GR Kwon",
    venue: "Journal of Healthcare Engineering",
    year: 2017,
    type: "Journal",
    category: "Radiology",
    link: "https://doi.org/10.1155/2017/6068284",
  },
  {
    id: 64,
    title: "Pathological Brain Detection Using Weiner Filtering, 2D-Discrete Wavelet Transform, Probabilistic PCA, and Random Subspace Ensemble Classifier",
    authors: "D Jha, JI Kim, MR Choi, GR Kwon",
    venue: "Computational Intelligence and Neuroscience",
    year: 2017,
    type: "Journal",
    category: "Radiology",
    link: "https://doi.org/10.1155/2017/3469275",
  },
  {
    id: 65,
    title: "Alzheimer disease detection in MRI using curvelet transform with KNN",
    authors: "D Jha, GR Kwon",
    venue: "Journal of Korean Institute of Information Technology",
    year: 2016,
    type: "Journal",
    category: "Radiology",
    link: "https://doi.org/10.14372/IUIIT.2016.14.8.121",
  },
];

function uniqueStrings(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean)));
}

function inferKeywords(pub: Publication): string[] {
  const titleTokens = pub.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length > 4)
    .slice(0, 5);

  return uniqueStrings([
    pub.category,
    pub.type,
    pub.venue,
    ...titleTokens,
    ...(pub.keywords ?? []),
  ]);
}

function fallbackAbstract(pub: Publication): string {
  return `${pub.title}. This ${pub.type.toLowerCase()} work by ${pub.authors} was presented in ${pub.venue} (${pub.year}) and contributes to ${pub.category}.`;
}

function previewAbstract(text: string): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= 28) return text;
  return `${words.slice(0, 28).join(' ')}...`;
}

const Publications: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const normalizedPublications = useMemo(
    () =>
      publications.map(pub => ({
        ...pub,
        abstract: pub.abstract ?? fallbackAbstract(pub),
        keywords: inferKeywords(pub),
      })),
    []
  );

  const categories = useMemo(
    () => uniqueStrings(normalizedPublications.map(pub => pub.category)).sort((a, b) => a.localeCompare(b)),
    [normalizedPublications]
  );

  const filteredPublications = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    return normalizedPublications
      .filter(pub => activeCategory === 'All' || pub.category === activeCategory)
      .filter(pub => {
        if (!query) return true;
        const haystack = [
          pub.title,
          pub.authors,
          pub.venue,
          pub.category,
          ...(pub.keywords ?? []),
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(query);
      })
      .sort((a, b) => b.year - a.year || a.id - b.id);
  }, [activeCategory, normalizedPublications, searchText]);

  const toggleExpanded = (id: number) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <main className="min-h-screen bg-white pb-24">

      {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
      <div className="w-full bg-[#daeef8] pt-24 pb-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

          <img
            src={logoImg}
            alt="Perception Intelligence Lab"
            className="w-52 md:w-64 h-auto object-contain flex-shrink-0 mix-blend-multiply"
          />

          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500">
              <NavLink to="/home" className="hover:text-[#0ed6e8] transition-colors">Home</NavLink>
              <span className="text-gray-400 text-xs">▶</span>
              <span className="text-gray-700 font-medium">Publications</span>
            </nav>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1a7bbf] tracking-tight leading-none">
              Publications
            </h1>

            <a
              href="https://scholar.google.com/citations?user=mMTyE68AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 rounded-md px-4 py-2 text-sm text-gray-700 font-medium shadow-sm transition-all duration-200 hover:shadow"
            >
              <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
              Google Scholar
            </a>
          </div>
        </div>
      </div>

      {/* ── Publications list ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-col gap-4 mb-6">
          <label htmlFor="publication-search" className="text-sm font-medium text-gray-700">
            Search Publications
          </label>
          <input
            id="publication-search"
            type="text"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            placeholder="Search by title, author, keywords, or venue..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0ed6e8] focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {['All', ...categories].map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                activeCategory === category
                  ? 'bg-[#0ed6e8] text-white border-[#0ed6e8]'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-[#0ed6e8] hover:text-[#0ed6e8]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs text-gray-400">{filteredPublications.length} publications</span>
          <span className="text-gray-200">|</span>
          <a
            href="https://scholar.google.com/citations?user=mMTyE68AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#0ed6e8] hover:underline font-medium"
          >
            More on Google Scholar ↗
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPublications.map(pub => {
            const isExpanded = expandedIds.has(pub.id);
            const abstractText = pub.abstract ?? '';
            const actionLinks = [
              { label: 'Paper', href: pub.link },
              { label: 'PDF', href: pub.pdfLink },
              { label: 'DOI', href: pub.doiLink },
              { label: 'Code', href: pub.codeLink },
            ].filter(link => Boolean(link.href));

            return (
              <article
                key={pub.id}
                className="rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-wide font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    {pub.year}
                  </span>
                  <span className="text-[10px] uppercase tracking-wide font-semibold px-2 py-1 rounded-full bg-[#e8f9fc] text-[#0e8d99]">
                    {pub.type}
                  </span>
                  <span className="text-[10px] uppercase tracking-wide font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    {pub.category}
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug mb-2">
                  {pub.title}
                </h3>

                <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                <p className="text-sm text-gray-500 mb-3">
                  {pub.venue}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {(pub.keywords ?? []).slice(0, 4).map(keyword => (
                    <span
                      key={`${pub.id}-${keyword}`}
                      className="text-[10px] px-2 py-1 rounded bg-gray-50 border border-gray-200 text-gray-500"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => toggleExpanded(pub.id)}
                  className="w-full text-left text-sm text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <span className="block leading-relaxed">
                    {isExpanded ? abstractText : previewAbstract(abstractText)}
                  </span>
                  <span className="inline-block mt-2 text-xs font-medium text-[#0ed6e8]">
                    {isExpanded ? 'Show less' : 'Full paper'}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-32 mt-4' : 'max-h-0'}`}
                >
                  <div className="flex flex-wrap gap-2">
                    {actionLinks.map(link => (
                      <a
                        key={`${pub.id}-${link.label}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-[#0ed6e8] hover:underline"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center text-gray-500 py-14 border border-dashed border-gray-300 rounded-lg mt-2">
            No publications match your search/filter.
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-400">
            Showing {filteredPublications.length} publications.{' '}
            <a
              href="https://scholar.google.com/citations?user=mMTyE68AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0ed6e8] hover:underline font-medium"
            >
              View more on Google Scholar ↗
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Publications;
