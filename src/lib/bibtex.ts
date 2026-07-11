import type { Publication } from '../data/publications';

const ENTRY_TYPE: Record<Publication['type'], string> = {
  Journal: 'article',
  Conference: 'inproceedings',
  Preprint: 'misc',
};

const slug = (value: string): string => value.replace(/[^a-zA-Z]/g, '');

const firstMeaningfulWord = (title: string): string => {
  const word = title.split(/\s+/).find(w => w.length > 3);
  return word ? word.toLowerCase().replace(/[^a-z]/g, '') : 'paper';
};

const escapeBraces = (value: string): string => value.replace(/([{}])/g, '\\$1');

export const generateBibtex = (pub: Publication): string => {
  const firstAuthor = slug(pub.authors.split(',')[0] ?? '');
  const key = `${firstAuthor}${pub.year}${firstMeaningfulWord(pub.title)}`;
  const entryType = ENTRY_TYPE[pub.type];
  const venueField = pub.type === 'Journal' ? 'journal  ' : 'booktitle';
  return [
    `@${entryType}{${key},`,
    `  author    = {${escapeBraces(pub.authors)}},`,
    `  title     = {{${escapeBraces(pub.title)}}},`,
    `  ${venueField} = {${escapeBraces(pub.venue)}},`,
    `  year      = {${pub.year}},`,
    `  url       = {${pub.link}}`,
    `}`,
  ].join('\n');
};
