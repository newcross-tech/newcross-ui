type FilterAttributes = { category?: string; type?: string };

type StorybookToken = {
  destination: string;
  headers: Array<string>;
  filterAttributes: FilterAttributes;
};

export const getGlobalStorybookTokens = (): Array<StorybookToken> => [
  {
    destination: 'spacing.css',
    headers: ['@tokens Spacing', '@presenter Spacing'],
    filterAttributes: { category: 'spacing' },
  },
  {
    destination: 'color.css',
    headers: ['@tokens Color', '@presenter Color'],
    filterAttributes: { category: 'color' },
  },
  {
    destination: 'font-family.css',
    headers: ['@tokens FontFamily', '@presenter FontFamily'],
    filterAttributes: { type: 'font-family' },
  },
  {
    destination: 'font-size.css',
    headers: ['@tokens FontSize', '@presenter FontSize'],
    filterAttributes: { type: 'font-size' },
  },
  {
    destination: 'font-weight.css',
    headers: ['@tokens FontWeight', '@presenter FontWeight'],
    filterAttributes: { type: 'font-weight' },
  },
  {
    destination: 'line-height.css',
    headers: ['@tokens LineHeight', '@presenter LineHeight'],
    filterAttributes: { type: 'line-height' },
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
