type FilterAttributes = { category?: string; type?: string };

type StorybookToken = {
  destination: string;
  headers: Array<string>;
  filterAttributes: FilterAttributes;
};

export const storybookTokens: Array<StorybookToken> = [
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
    destination: 'brand-color.css',
    headers: ['@tokens Brand Color', '@presenter Color'],
    filterAttributes: { category: 'brand', type: 'color' },
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
