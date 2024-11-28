type FilterAttributes = { category?: string; type?: string };

type StorybookToken = {
  destination: string;
  headers: Array<string>;
  filterAttributes: FilterAttributes;
};

export const getGlobalStorybookTokens = (): Array<StorybookToken> => [
  {
    destination: 'baseline-spaces.css',
    headers: ['@tokens BaselineSpacing', '@presenter Spacing'],
    filterAttributes: { category: 'baseline-spaces' },
  },
  {
    destination: 'color.css',
    headers: ['@tokens Color', '@presenter Color'],
    filterAttributes: { category: 'themes' },
  },
  {
    destination: 'baseline-font-family.css',
    headers: ['@tokens BaselineFontFamily', '@presenter FontFamily'],
    filterAttributes: { category: 'baseline-font', type: 'font-family' },
  },
  {
    destination: 'baseline-font-size.css',
    headers: ['@tokens BaselineFontSize', '@presenter FontSize'],
    filterAttributes: { category: 'baseline-font', type: 'font-size' },
  },
  {
    destination: 'baseline-font-weight.css',
    headers: ['@tokens BaselineFontWeight', '@presenter FontWeight'],
    filterAttributes: { category: 'baseline-font', type: 'font-weight' },
  },
];

export const getBrandStorybookTokens = (
  brand: string
): Array<StorybookToken> => [
  {
    destination: `${brand}-color.css`,
    headers: [`@tokens ${brand} Color`, '@presenter Color'],
    filterAttributes: { category: 'brand', type: 'color' },
  },
];

export const getColorStorybookTokens = (): Array<StorybookToken> => [
  {
    destination: 'border.css',
    headers: ['@tokens Border', '@presenter Color'],
    filterAttributes: { category: 'elements', type: 'border' },
  },
  {
    destination: 'icon.css',
    headers: ['@tokens Icon', '@presenter Color'],
    filterAttributes: { category: 'elements', type: 'icon' },
  },
  {
    destination: 'surface.css',
    headers: ['@tokens Surface', '@presenter Color'],
    filterAttributes: { category: 'elements', type: 'surface' },
  },
  {
    destination: 'text.css',
    headers: ['@tokens Text', '@presenter Color'],
    filterAttributes: { category: 'elements', type: 'text' },
  },
];
