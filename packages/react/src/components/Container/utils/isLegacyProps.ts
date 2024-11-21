import { SemanticSpacing } from '../../../types';
import { CombinedContainerProps, ContainerProps } from '../Container';
import { LegacyContainerProps } from '../LegacyContainer';

export const isLegacyProps = (
  props: CombinedContainerProps
): props is LegacyContainerProps => {
  const newSpacingValues = new Set<SemanticSpacing>([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
  ]);

  const newProps: Array<
    keyof Omit<
      ContainerProps,
      | 'children'
      | 'display'
      | 'flexWrap'
      | 'fullWidth'
      | 'flexDirection'
      | 'justifyContent'
      | 'alignItems'
      | 'testID'
    >
  > = [
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
    const value = props?.[prop];
    if (!value) return false;
    return newSpacingValues.has(value as SemanticSpacing);
  });
};
