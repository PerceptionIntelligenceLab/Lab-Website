import React, { useMemo, useState, useCallback } from 'react';
import '../Styles/Publications.css';

interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'Journal' | 'Conference' | 'Preprint';
  category: string;
  link: string;
  doiLink?: string;
  pdfLink?: string;
  codeLink?: string;
}

const publications: Publication[] = [
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

const FILTER_OPTIONS = ['All', 'Journal', 'Conference', 'Preprint', 'Datasets', 'GI', 'MedAI', 'Radiology'];
const TYPE_FILTERS = new Set(['Journal', 'Conference', 'Preprint']);

function renderAuthors(authors: string): React.ReactNode {
  return authors.split(',').map((part, i) => {
    const trimmed = part.trim();
    const isPI = /\bD\.?\s*Jha\b/i.test(trimmed) || /\bDebesh\s+Jha\b/i.test(trimmed);
    return (
      <React.Fragment key={i}>
        {i > 0 && ', '}
        {isPI ? <strong className="pub-pi-name">{trimmed}</strong> : trimmed}
      </React.Fragment>
    );
  });
}

function generateBibtex(pub: Publication): string {
  const firstAuthor = pub.authors.split(',')[0].trim().replace(/[^a-zA-Z]/g, '');
  const firstWord = pub.title.split(/\s+/).find(w => w.length > 3)?.toLowerCase().replace(/[^a-z]/g, '') ?? 'paper';
  const key = `${firstAuthor}${pub.year}${firstWord}`;
  const entryType = pub.type === 'Journal' ? 'article' : pub.type === 'Conference' ? 'inproceedings' : 'misc';
  const venueField = pub.type === 'Journal' ? 'journal   ' : 'booktitle ';
  return `@${entryType}{${key},\n  author    = {${pub.authors}},\n  title     = {{${pub.title}}},\n  ${venueField}= {${pub.venue}},\n  year      = {${pub.year}},\n  url       = {${pub.link}}\n}`;
}

const Publications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [openBibtex, setOpenBibtex] = useState<number | null>(null);
  const [copied, setCopied] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      publications
        .filter(pub => {
          if (activeFilter === 'All') return true;
          if (TYPE_FILTERS.has(activeFilter)) return pub.type === activeFilter;
          return pub.category === activeFilter;
        })
        .sort((a, b) => b.year - a.year || a.id - b.id),
    [activeFilter]
  );

  const grouped = useMemo(() => {
    const map = new Map<number, Publication[]>();
    for (const pub of filtered) {
      if (!map.has(pub.year)) map.set(pub.year, []);
      map.get(pub.year)!.push(pub);
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  const handleCopy = useCallback((pub: Publication) => {
    navigator.clipboard.writeText(generateBibtex(pub)).then(() => {
      setCopied(pub.id);
      setTimeout(() => setCopied(null), 2000);
    });
  }, []);

  return (
    <div className="pub-root">
      <main className="pub-main">
        <header className="pub-header">
          <h1 className="pub-name">Debesh Jha</h1>
          <p className="pub-affiliation">
            University of South Dakota &middot; Perception Intelligence Lab
          </p>
          <div className="pub-research-tags">
            {['Deep Learning', 'Biomedical Informatics', 'Medical Imaging', 'Computer Vision'].map((tag, i) => (
              <React.Fragment key={tag}>
                {i > 0 && <span className="pub-tag-pipe">|</span>}
                <span className="pub-tag">{tag}</span>
              </React.Fragment>
            ))}
          </div>
          <div className="pub-header-meta">
            <a
              href="https://scholar.google.com/citations?user=mMTyE68AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="pub-scholar-btn"
            >
              <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span>Google Scholar</span>
            </a>
          </div>
        </header>

        <hr className="pub-hr" />

        <nav className="pub-filters" aria-label="Filter publications">
          {FILTER_OPTIONS.map((opt, i) => (
            <React.Fragment key={opt}>
              {i > 0 && <span className="pub-pipe" aria-hidden="true">|</span>}
              <button
                className={`pub-filter-btn${activeFilter === opt ? ' pub-filter-active' : ''}`}
                onClick={() => setActiveFilter(opt)}
              >
                {opt}
              </button>
            </React.Fragment>
          ))}
        </nav>

        <p className="pub-meta-count">
          {filtered.length} record{filtered.length !== 1 ? 's' : ''} &mdash; complete list on{' '}
          <a
            href="https://scholar.google.com/citations?user=mMTyE68AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="pub-inline-link"
          >
            Google Scholar ↗
          </a>
        </p>

        {filtered.length === 0 && (
          <p className="pub-empty">No publications match the selected filter.</p>
        )}

        {grouped.map(([year, pubs]) => (
          <section key={year} className="pub-year-section">
            <h2 className="pub-year-heading">{year}</h2>
            <hr className="pub-year-rule" />
            <ol className="pub-list">
              {pubs.map(pub => {
                const bibtexOpen = openBibtex === pub.id;
                const actionLinks: { label: string; href: string }[] = [
                  { label: 'Paper', href: pub.link },
                  ...(pub.pdfLink ? [{ label: 'PDF', href: pub.pdfLink }] : []),
                  ...(pub.doiLink ? [{ label: 'DOI', href: pub.doiLink }] : []),
                  ...(pub.codeLink ? [{ label: 'Code', href: pub.codeLink }] : []),
                ];
                return (
                  <li key={pub.id} className="pub-entry">
                    <div className="pub-body">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pub-title"
                      >
                        {pub.title}
                      </a>
                      <p className="pub-byline">
                        {renderAuthors(pub.authors)}
                        {'. '}
                        <span className="pub-venue-span">{pub.venue}</span>
                        {' '}
                        <span className="pub-year-span">({pub.year})</span>
                        <span className="pub-type-badge">{pub.type}</span>
                      </p>
                      <div className="pub-action-links">
                        {actionLinks.map((lk, i) => (
                          <React.Fragment key={lk.label}>
                            {i > 0 && <span className="pub-action-sep">&middot;</span>}
                            <a href={lk.href} target="_blank" rel="noopener noreferrer" className="pub-action">
                              {lk.label}
                            </a>
                          </React.Fragment>
                        ))}
                        <span className="pub-action-sep">&middot;</span>
                        <button
                          className="pub-action-btn"
                          onClick={() => setOpenBibtex(bibtexOpen ? null : pub.id)}
                        >
                          BibTeX
                        </button>
                      </div>
                      {bibtexOpen && (
                        <div className="pub-bibtex">
                          <pre className="pub-bibtex-text">{generateBibtex(pub)}</pre>
                          <button className="pub-copy-btn" onClick={() => handleCopy(pub)}>
                            {copied === pub.id ? 'Copied!' : 'Copy to clipboard'}
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}

        <footer className="pub-footer">
          <hr className="pub-hr" />
          <p>
            &copy; {new Date().getFullYear()} Perception Intelligence Lab &middot; University of South Dakota &middot;{' '}
            <a
              href="https://scholar.google.com/citations?user=mMTyE68AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="pub-inline-link"
            >
              Google Scholar ↗
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Publications;
