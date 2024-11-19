import { SemanticSpacing } from '../../../types';
import { CombinedContainerProps } from '../Container';
import { LegacyContainerProps } from '../LegacyContainer';

export const isLegacyProps = (
  props: CombinedContainerProps
): props is LegacyContainerProps => {
  const newSpacingValues = <Array<SemanticSpacing>>[
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
  ];
  const newProps = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'gap',
  ];

  return !newProps.some((prop) => {
    const value = props?.[prop as keyof CombinedContainerProps];
    if (!value) return false;
    return newSpacingValues.includes(value as SemanticSpacing);
  });
};
