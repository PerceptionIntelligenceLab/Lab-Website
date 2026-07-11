import pvtImg from '../assets/Code/PVT.png';
import mdnetImg from '../assets/Code/MD Net.png';
import transnetImg from '../assets/Code/Transnet.png';
import transrupnetImg from '../assets/Code/TransRupnet.png';
import doubleunetImg from '../assets/Code/DoubleUnet.png';
import resunetcrfImg from '../assets/Code/ResUnet+++CRF.png';
import resunetppImg from '../assets/Code/ResUnet++.png';
import colonsegnetImg from '../assets/Code/Colonsegnet.png';
import nanonetImg from '../assets/Code/NanoNet.png';
import ddanetImg from '../assets/Code/DDANet.png';
import lightlayersImg from '../assets/Code/Light Layers.png';
import pnsnetImg from '../assets/Code/PNSnet.png';
import surgicalImg from '../assets/Code/Realtimesurgical.png';

export type CodeCategory = 'lightweight' | 'cnn' | 'transformer' | 'ml';

export interface CodeProject {
  title: string;
  image: string;
  cat: CodeCategory;
  chips: string[];
  desc: string;
  tags: string;
  github: string;
  paper: string;
}

export const CODE_FILTERS: ReadonlyArray<{ label: string; value: 'all' | CodeCategory }> = [
  { label: 'All', value: 'all' },
  { label: 'Lightweight model', value: 'lightweight' },
  { label: 'CNN based', value: 'cnn' },
  { label: 'Transformer based', value: 'transformer' },
  { label: 'Machine Learning based', value: 'ml' },
];

export const CODE_PROJECTS: CodeProject[] = [
  { title: 'PVTFormer', image: pvtImg, cat: 'transformer', chips: ['Transformer', 'ISBI 2024', 'CT Liver'], desc: 'PVT-based encoder with refined decoding for accurate, robust healthy-liver segmentation. Extensible to other modalities and tasks.', tags: 'pvtformer liver ct transformer isbi 2024 healthy segmentation', github: 'https://github.com/DebeshJha/PVTFormer', paper: 'https://arxiv.org/pdf/2401.09630' },
  { title: 'MDNet', image: mdnetImg, cat: 'transformer', chips: ['Transformer Encoder', 'Abdominal CT', '2024'], desc: 'MiT-B2 encoder with interlinked decoders and mask reuse to refine features, enforce spatial attention, and boost accuracy.', tags: 'mdnet abdominal ct organs segmentation mit-b2 multi-decoder 2024', github: 'https://github.com/DebeshJha/MDNet', paper: 'https://arxiv.org/pdf/2405.06166' },
  { title: 'TransNetR', image: transnetImg, cat: 'transformer', chips: ['Transformer', 'Polyp', 'MIDL 2023'], desc: 'Transformer-based residual network for robust polyp segmentation across in-distribution and out-of-distribution datasets.', tags: 'transnetr polyp segmentation transformer residual ood generalization midl 2023', github: 'https://github.com/DebeshJha/TransNetR', paper: 'https://arxiv.org/pdf/2303.07428' },
  { title: 'TransRUPNet', image: transrupnetImg, cat: 'transformer', chips: ['Transformer', 'Real-time', 'Polyp'], desc: 'Encoder-decoder with residual upsampling blocks, 47.07 FPS and 0.7786 Dice, strong OOD generalization with real-time feedback.', tags: 'transrupnet polyp colorectal segmentation real-time transformer residual upsampling 47 fps dice 0.7786', github: 'https://github.com/DebeshJha/TransRUPNet', paper: 'https://arxiv.org/pdf/2306.02176' },
  { title: 'DoubleUNet', image: doubleunetImg, cat: 'cnn', chips: ['CNN', 'Two-Stage'], desc: 'VGG19-powered U-Net followed by a second U-Net; first mask multiplies input for refined second-stage segmentation.', tags: 'doubleunet vgg19 unet cascade masks medical image segmentation', github: 'https://github.com/DebeshJha/2020-CBMS-DoubleU-Net', paper: 'https://arxiv.org/pdf/2006.04868' },
  { title: 'ResUNet++', image: resunetppImg, cat: 'cnn', chips: ['CNN', 'Residual'], desc: 'Residual U-Net enhanced with squeeze-and-excitation, ASPP, and attention blocks for stronger contextual feature learning.', tags: 'resunet++ residual unet squeeze-and-excitation aspp attention medical image segmentation', github: 'https://github.com/DebeshJha/ResUNetPlusPlus', paper: 'https://arxiv.org/pdf/1911.07067' },
  { title: 'ResUNet++ + CRF + TTA', image: resunetcrfImg, cat: 'cnn', chips: ['CNN', 'CRF', 'TTA'], desc: 'Extends ResUNet++ with conditional random fields and test-time augmentation to further improve polyp segmentation quality.', tags: 'resunet++ crf tta colorectal polyp segmentation augmentation', github: 'https://github.com/DebeshJha/ResUNetPlusPlus-with-CRF-and-TTA', paper: 'https://arxiv.org/pdf/1911.07067' },
  { title: 'ColonSegNet', image: colonsegnetImg, cat: 'lightweight', chips: ['Lightweight', 'Real-time', 'Polyp'], desc: 'Real-time model balancing accuracy and speed on Kvasir-SEG (~180 FPS, Dice ~0.8206), enabling reliable clinical feedback.', tags: 'colonsegnet real-time polyp detection segmentation kvasir-seg 180 fps dice 0.8206', github: 'https://github.com/DebeshJha/', paper: 'https://arxiv.org/pdf/1911.07067' },
  { title: 'NanoNet', image: nanonetImg, cat: 'lightweight', chips: ['Lightweight', '~36k params', 'Real-time'], desc: 'Ultra-compact architecture for real-time segmentation in video capsule endoscopy and colonoscopy with minimal compute.', tags: 'nanonet real-time video capsule endoscopy colonoscopy 36000 params lightweight', github: 'https://github.com/DebeshJha/', paper: 'https://arxiv.org/pdf/2104.11138' },
  { title: 'DDANet', image: ddanetImg, cat: 'cnn', chips: ['CNN', 'Dual Decoder'], desc: 'Dual-decoder attention network trained on Kvasir-SEG, evaluated on unseen data with strong precision and Dice scores.', tags: 'ddanet dual decoder attention polyp segmentation kvasir-seg generalization dice 0.7874', github: 'https://github.com/DebeshJha/', paper: 'https://arxiv.org/pdf/2012.15245' },
  { title: 'LightLayers', image: lightlayersImg, cat: 'ml', chips: ['Machine Learning', 'Param-Efficient'], desc: 'Matrix-factorized dense/conv layers reduce trainable parameters and speed up training while maintaining competitive accuracy.', tags: 'lightlayers parameter efficient matrix factorization dense conv layers image classification', github: 'https://github.com/DebeshJha/', paper: 'https://arxiv.org/pdf/2101.02268' },
  { title: 'PNS-Net', image: pnsnetImg, cat: 'transformer', chips: ['Transformer', 'Video', 'Real-time'], desc: 'Progressively normalized self-attention for video polyp segmentation, ~140 FPS and state-of-the-art VPS performance.', tags: 'pns-net video polyp segmentation normalized self-attention transformer real-time 140 fps', github: 'https://github.com/DebeshJha/', paper: 'https://arxiv.org/pdf/2105.08468' },
  { title: 'U-Net (ROBUST-MIS)', image: surgicalImg, cat: 'cnn', chips: ['CNN', 'Surgical', 'Real-time'], desc: 'Automated surgical instrument segmentation on ROBUST-MIS 2019 with high Dice and real-time throughput.', tags: 'unet surgical instrument segmentation robust-mis 2019 dice 0.8739 miou 0.8183', github: 'https://github.com/DebeshJha/', paper: 'https://arxiv.org/pdf/2107.02319' },
];
