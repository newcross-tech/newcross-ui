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
    filterAttributes: { category: 'color' },
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
    destination: 'neutral.css',
    headers: ['@tokens Neutral', '@presenter Color'],
    filterAttributes: { category: 'color', type: 'neutral' },
  },
  {
    destination: 'primary.css',
    headers: ['@tokens Primary', '@presenter Color'],
    filterAttributes: { category: 'color', type: 'primary' },
  },
  {
    destination: 'semantics.css',
    headers: ['@tokens Semantics', '@presenter Color'],
    filterAttributes: { category: 'color', type: 'semantics' },
  },
];
