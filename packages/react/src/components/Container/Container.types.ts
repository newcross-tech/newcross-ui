import { SemanticSpacing } from '../../types';

export type NewContainerSpacing = SemanticSpacing | 'auto';
export type NewContainerGapSpacing = SemanticSpacing | 'inherit';
export type SemanticContainerTags = keyof Pick<
  JSX.IntrinsicElements,
  | 'div'
  | 'button'
  | 'section'
  | 'article'
  | 'header'
  | 'footer'
  | 'aside'
  | 'label'
>;
