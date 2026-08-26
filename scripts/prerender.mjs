import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = resolve(ROOT, 'dist');
const ORIGIN = 'https://perceptionintelligencelab.github.io';
const BASE = '/Lab-Website';
const SUFFIX = 'Biomedical Perception Intelligence Lab';

const ROUTES = [
  {
    path: 'research',
    title: `Research Projects | ${SUFFIX}`,
    description:
      'Polyp detection benchmarks, TransNetR, PVTFormer, DentiMap and MDNet — medical imaging research from the perception intelligence lab.',
    h1: 'Research at the Biomedical Perception Intelligence Lab',
    body: 'Our research spans polyp detection and segmentation, capsule endoscopy classification, panoramic dental radiograph diagnostics, liver and pancreatic tumour analysis, and lightweight real-time architectures. Models include TransNetR, TransRUPNet, PVTFormer, MDNet, ResUNet++, DoubleUNet, ColonSegNet, NanoNet, DDANet and PNS-Net, alongside the DentiMap dental AI portal and the DiseaseVision framework.',
  },
  {
    path: 'datasets',
    title: `Medical Imaging Datasets | ${SUFFIX}`,
    description:
      'Open datasets from the Biomedical perception lab — GastroVision, Kvasir-SEG, PolypGen and polyp detection benchmark collections.',
    h1: 'Open medical imaging datasets',
    body: 'The Biomedical perception intelligence lab curates and releases open benchmarks for gastrointestinal imaging, including GastroVision, a multi-class endoscopy dataset of roughly 8,000 expert-annotated images across 27 classes, plus Kvasir-SEG, Kvasir-Instrument, Kvasir-sessile, the PolypGen still-frame and video sequence collections, and the Medico automatic polyp segmentation benchmark.',
  },
  {
    path: 'code',
    title: `Open Source Code | ${SUFFIX}`,
    description:
      'Reference implementations for TransNetR, TransRUPNet, ResUNet++, ColonSegNet and other polyp detection benchmark models.',
    h1: 'Open source code and reference implementations',
    body: 'Every architecture published by the perception intelligence lab ships with a public reference implementation, covering transformer-based medical analysis models such as TransNetR and TransRUPNet, convolutional models including ResUNet++, DoubleUNet and DDANet, and lightweight real-time networks such as ColonSegNet and NanoNet.',
  },
  {
    path: 'publications',
    title: `Publications | ${SUFFIX}`,
    description:
      'Peer-reviewed papers from the Biomedical perception intelligence lab across MICCAI, WACV, MIDL, Nature Scientific Data and IEEE venues.',
    h1: 'Publications',
    body: 'Peer-reviewed journal articles, conference papers and dataset descriptors from the Biomedical Perception Intelligence Lab, published across MICCAI, IEEE/CVF WACV, MIDL, ICML workshops, Nature Scientific Data and IEEE journals, spanning medical image segmentation, endoscopy benchmarking and computer aided diagnosis.',
  },
  {
    path: 'people',
    title: `People | ${SUFFIX}`,
    description:
      'Faculty, graduate researchers and collaborators of the perception intelligence lab, led by Dr. Debesh Jha at the University of South Dakota.',
    h1: 'People',
    body: 'The Biomedical perception lab is led by Principal Investigator Dr. Debesh Jha, Assistant Professor (Tenure Track) in the Department of Computer Science at the University of South Dakota, working with graduate researchers, graduate research assistants, undergraduate research assistants and global research lab collaborators.',
  },
  {
    path: 'news',
    title: `News | ${SUFFIX}`,
    description:
      'Latest publications, awards, challenges and milestones from the Biomedical Perception Intelligence Lab.',
    h1: 'News and announcements',
    body: 'Paper acceptances, challenge results, competition finalist placements, dataset releases and research milestones from the Biomedical Perception & Intelligence Lab at the University of South Dakota.',
  },
  {
    path: 'courses',
    title: `Courses | ${SUFFIX}`,
    description:
      'Courses taught by Dr. Debesh Jha at the University of South Dakota in AI, deep learning and medical image analysis.',
    h1: 'Courses',
    body: 'Coursework taught by faculty of the Biomedical Perception Intelligence Lab in the Department of Computer Science at the University of South Dakota, covering artificial intelligence, deep learning and medical image analysis.',
  },
  {
    path: 'join-us',
    title: `Join Us | ${SUFFIX}`,
    description:
      'Open PhD, graduate and undergraduate research positions at the Biomedical Perception Intelligence Lab, University of South Dakota.',
    h1: 'Join the lab',
    body: 'The Biomedical perception intelligence lab welcomes prospective PhD students, graduate researchers, undergraduate research assistants and visiting collaborators interested in medical imaging, deep learning and clinical AI deployment at the University of South Dakota.',
  },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const replaceAttr = (html, matcher, value) => {
  const re = new RegExp(`(${matcher}\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`prerender: no match for ${matcher}`);
  return html.replace(re, `$1${esc(value)}$2`);
};

const buildShell = (route) => `<main id="main" class="seo-shell">
        <header>
          <p class="seo-eyebrow"><a href="${BASE}/">Biomedical Perception &amp; Intelligence Lab</a></p>
          <h1>${esc(route.h1)}</h1>
          <p>${esc(route.body)}</p>
        </header>
        <nav aria-label="Sections">
          <ul class="seo-grid">
            ${ROUTES.filter((r) => r.path !== route.path)
              .map((r) => `<li class="seo-card"><h2><a href="${BASE}/${r.path}/">${esc(r.h1)}</a></h2></li>`)
              .join('\n            ')}
          </ul>
        </nav>
        <footer>
          <p>
            Department of Computer Science, University of South Dakota, 414 E Clark St, Vermillion, SD 57069, USA ·
            <a href="mailto:debesh.jha@usd.edu">debesh.jha@usd.edu</a> ·
            <a href="https://github.com/PerceptionIntelligenceLab" rel="noopener">GitHub organization</a>
          </p>
        </footer>
      </main>`;

const template = readFileSync(resolve(DIST, 'index.html'), 'utf8');
const shellRe = /<main id="main" class="seo-shell">[\s\S]*?<\/main>/;
const ldRe = /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/;

if (!shellRe.test(template)) throw new Error('prerender: seo-shell block not found in dist/index.html');
if (!ldRe.test(template)) throw new Error('prerender: ld+json block not found in dist/index.html');

for (const route of ROUTES) {
  const url = `${ORIGIN}${BASE}/${route.path}/`;
  let html = template;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(route.title)}</title>`);
  html = replaceAttr(html, 'name="description"', route.description);
  html = replaceAttr(html, 'property="og:title"', route.title);
  html = replaceAttr(html, 'property="og:description"', route.description);
  html = replaceAttr(html, 'property="og:url"', url);
  html = replaceAttr(html, 'name="twitter:title"', route.title);
  html = replaceAttr(html, 'name="twitter:description"', route.description);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

  html = html.replace(ldRe, (_m, open, json, close) => {
    const data = JSON.parse(json);
    const page = data['@graph'].find((n) => n['@type'] === 'WebPage');
    page['@id'] = `${url}#webpage`;
    page.url = url;
    page.name = route.title;
    page.description = route.description;
    data['@graph'] = data['@graph'].filter(
      (n) => !['Dataset', 'SoftwareApplication'].includes(n['@type'])
    );
    data['@graph'].push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}${BASE}/` },
        { '@type': 'ListItem', position: 2, name: route.h1, item: url },
      ],
    });
    return `${open}\n${JSON.stringify(data, null, 2)}\n    ${close}`;
  });

  html = html.replace(shellRe, buildShell(route));

  const dir = resolve(DIST, route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, 'index.html'), html, 'utf8');
}

console.log(`prerender: wrote ${ROUTES.length} route pages`);
