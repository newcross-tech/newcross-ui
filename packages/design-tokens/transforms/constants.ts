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
    filterAttributes: { category: 'themes' },
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
