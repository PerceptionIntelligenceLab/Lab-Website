
const base = import.meta.env.BASE_URL;
const vid = (name: string) => `${base}${name}`;

const projects = [
  {
    title: 'PanInsight',
    video: vid('paninsight ai.mp4'),
    link: 'https://debeshjha.github.io/PanInsight/',
    desc: 'PanInsight is an AI project that helps doctors detect pancreatic cancer earlier and with greater accuracy. It analyzes scans, highlights problem areas, and supports faster, more precise diagnoses, bringing technology and care together for better patient outcomes.',
    side: 'left',
  },
  {
    title: 'DentiMap',
    video: vid('dentimap.mp4'),
    link: 'https://debeshjha.github.io/DentiMap/',
    desc: 'DentiMap is an AI project that helps dentists detect cavities, infections, and other dental issues with greater accuracy. It analyzes X-ray scans, highlights problem areas, and supports faster, more precise diagnoses, bringing technology and care together for better oral health.',
    side: 'right',
  },
  {
    title: 'MDNet',
    video: vid('MD.mp4'),
    link: 'https://arxiv.org/pdf/2405.06166',
    desc: 'MDNet is an AI project that helps doctors detect and diagnose various medical conditions with greater accuracy. It analyzes medical images, highlights problem areas, and supports faster, more precise diagnoses, bringing technology and care together for better patient outcomes.',
    side: 'left',
  },
  {
    title: 'PVTFormer',
    video: vid('pvtformer.mp4'),
    link: 'https://arxiv.org/pdf/2401.09630',
    desc: 'PVTFormer is an AI project that helps doctors segment healthy liver tissue with greater accuracy and consistency. It analyzes CT scans using a PVT-based encoder and refined decoding, delivering precise outlines that support reliable diagnoses and treatment planning.',
    side: 'right',
  },
  {
    title: 'TransNetR',
    video: vid('Transnetr.mp4'),
    link: 'https://arxiv.org/pdf/2303.07428',
    desc: 'TransNetR is an AI project that helps doctors detect and segment polyps in colonoscopy scans with greater accuracy. It uses a transformer-based residual network to adapt across different datasets, ensuring consistent performance even in challenging cases.',
    side: 'left',
  },
  {
    title: 'TransRUPNet',
    video: vid('tra.mp4'),
    link: 'https://github.com/DebeshJha/TransRUPNet',
    desc: 'TransRUPNet is an AI model for real-time polyp segmentation. Using a transformer encoder and residual upsampling blocks, it detects and highlights polyps with high accuracy and speed. Running at 47.07 FPS with a Dice score of 0.7786, it delivers strong generalization and instant feedback during diagnosis.',
    side: 'right',
  },
  {
    title: 'DoubleUNet',
    video: vid('dob.mp4'),
    link: 'https://arxiv.org/pdf/2006.04868',
    desc: 'DoubleUNet is a two-stage deep learning model for medical image segmentation. It first uses a VGG19-based U-Net to generate an initial mask, which is then refined by a second U-Net for more accurate results. This layered design improves boundary precision and segmentation quality.',
    side: 'left',
  },
  {
    title: 'ResUNet++',
    video: vid('Res.mp4'),
    link: 'https://arxiv.org/pdf/1911.07067',
    desc: 'ResUNet++ is an AI model designed to analyze and segment medical images with precision. By combining residual learning, attention mechanisms, and advanced feature extraction, it highlights important regions with clarity and accuracy, helping doctors detect and study medical conditions more effectively.',
    side: 'right',
  },
  {
    title: 'ColonSegNet',
    video: vid('colon.mp4'),
    link: 'https://arxiv.org/pdf/1911.07067',
    desc: 'ColonSegNet is an AI model built to help doctors detect colon polyps in real time. It processes medical videos at high speed and accuracy, instantly highlighting polyps during procedures. With its lightweight and efficient design, it supports faster, more confident clinical decisions.',
    side: 'left',
  },
  {
    title: 'NanoNet',
    video: vid('nano.mp4'),
    link: 'https://arxiv.org/pdf/2104.11138',
    desc: 'NanoNet is an ultra-lightweight AI model designed for real-time medical image segmentation. With just ~36k parameters, it efficiently analyzes video capsule endoscopy and colonoscopy footage, providing fast and accurate detection using minimal computational power.',
    side: 'right',
  },
  {
    title: 'DDANet',
    video: vid('DDA.mp4'),
    link: 'https://arxiv.org/pdf/2012.15245',
    desc: 'DDANet is an AI model that uses a dual-decoder attention mechanism to detect and segment colon polyps with precision. Trained on real medical data, it adapts well to unseen cases, ensuring consistent accuracy across different patients.',
    side: 'left',
  },
  {
    title: 'LightLayers',
    video: vid('light.mp4'),
    link: 'https://arxiv.org/pdf/2101.02268',
    desc: 'LightLayers is an AI framework designed to make deep learning faster and lighter. By rethinking how neural layers are built, it cuts down the number of trainable parameters without losing accuracy, enabling efficient, high-performance model training.',
    side: 'right',
  },
  {
    title: 'PNS-Net',
    video: vid('PNS.mp4'),
    link: 'https://arxiv.org/pdf/2105.08468',
    desc: 'PNS-Net is an AI model built to detect colon polyps in live video with remarkable accuracy and speed. It uses a novel self-attention mechanism to understand both space and time in colonoscopy footage, highlighting polyps instantly as the video plays.',
    side: 'left',
  },
  {
    title: 'U-Net (ROBUST-MIS)',
    video: vid('Unet.mp4'),
    link: 'https://arxiv.org/pdf/2107.02319',
    desc: 'U-Net (ROBUST-MIS) is a real-time deep learning model that segments surgical instruments in laparoscopic videos. Using a CNN-based U-Net architecture, it delivers high Dice accuracy and fast performance, enabling reliable, real-time tracking of surgical tools to support robotic surgeries.',
    side: 'right',
  },
];

const css = `
  .research-page {
    background: #ffffff;
    color: #1e293b;
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    padding-bottom: 4rem;
  }

  .research-page-header {
    padding: 7rem 2rem 2rem;
    text-align: center;
  }

  .research-page-header h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.6rem;
  }

  .research-page-header p {
    font-size: 1rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
  }

  .rp-split {
    display: flex;
    padding: 1rem 2rem;
    gap: 2rem;
    align-items: center;
    margin-bottom: 2rem;
    justify-content: center;
  }

  .rp-video-box {
    width: 518px;
    height: 292px;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    flex-shrink: 0;
    animation: rp-slide-left 1.2s cubic-bezier(0.4,0,0.2,1);
  }

  .rp-video-box video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.8) contrast(1.1) saturate(1.1);
  }

  .rp-video-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg,rgba(0,0,0,.2) 0%,rgba(0,191,255,.05) 50%,rgba(0,0,0,.4) 100%);
    z-index: 2;
  }

  .rp-text-box {
    width: 518px;
    height: 292px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    padding: 2rem;
    border-radius: 12px;
    flex-shrink: 0;
    animation: rp-slide-right 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s both;
  }

  .rp-text-inner {
    max-width: 500px;
    width: 100%;
    position: relative;
  }

  @keyframes rp-slide-left {
    from { transform: translateX(-100%); opacity: 0; }
    to   { transform: translateX(0);     opacity: 1; }
  }

  @keyframes rp-slide-right {
    from { transform: translateX(100%); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }

  .rp-project-title {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .rp-underline {
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #00bfff, #3b82f6);
    border-radius: 2px;
    margin-bottom: 1.2rem;
  }

  .rp-text-inner p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #475569;
    margin-bottom: 1.5rem;
  }

  .rp-arrow-link {
    position: absolute;
    bottom: -1.5rem;
    right: -1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #3b82f6;
    text-decoration: none;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .rp-arrow-link:hover { transform: scale(1.1); color: #1d4ed8; }

  .rp-bouncing-arrow {
    font-size: 1.2rem;
    font-weight: bold;
    display: inline-block;
    animation: rp-bounce 2s infinite;
  }

  @keyframes rp-bounce {
    0%,20%,50%,80%,100% { transform: translateX(0); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(3px); }
  }

  @media (max-width: 1100px) {
    .rp-split { flex-direction: column !important; padding: 1rem; gap: 1rem; }
    .rp-video-box, .rp-text-box { width: 100%; max-width: 518px; height: 292px; }
  }

  @media (max-width: 600px) {
    .rp-video-box, .rp-text-box { height: 220px; }
    .rp-text-box { padding: 1.2rem; }
    .rp-project-title { font-size: 1.6rem; }
  }
`;

export default function Research() {
  return (
    <div className="research-page">
      <style>{css}</style>

      <div className="research-page-header">
        <h1>Active Research</h1>
        <p>Cutting-edge AI research in medical imaging and diagnostics</p>
      </div>

      {projects.map((p) => {
        const videoEl = (
          <div className="rp-video-box">
            <video autoPlay muted loop playsInline>
              <source src={p.video} type="video/mp4" />
            </video>
            <div className="rp-video-overlay" />
          </div>
        );

        const textEl = (
          <div className="rp-text-box">
            <div className="rp-text-inner">
              <h2 className="rp-project-title">{p.title}</h2>
              <div className="rp-underline" />
              <p>{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rp-arrow-link"
              >
                <span className="rp-bouncing-arrow">→</span>
              </a>
            </div>
          </div>
        );

        return (
          <div className="rp-split" key={p.title}>
            {p.side === 'left' ? <>{videoEl}{textEl}</> : <>{textEl}{videoEl}</>}
          </div>
        );
      })}
    </div>
  );
}
