import { HTMLAttributes } from 'react';
import { SemanticSpacing } from '../../../types';
import { NewContainerProps, ContainerProps } from '../Container';
import { LegacyContainerProps } from '../LegacyContainer';

export const isLegacyProps = (
  props: ContainerProps &
    Pick<HTMLAttributes<HTMLElement>, 'onClick' | 'onMouseDown' | 'onKeyDown'>
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
      NewContainerProps,
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

  const hasNewProps = newProps.some((prop) => {
    const value = props?.[prop];
    if (!value) return false;
    return newSpacingValues.has(value as SemanticSpacing);
  });

  const hasEventHandlers =
    props.onClick || props.onMouseDown || props.onKeyDown;

  return !hasNewProps && !hasEventHandlers;
};
