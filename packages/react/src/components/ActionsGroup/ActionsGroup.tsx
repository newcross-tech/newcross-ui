import { cloneElement, isValidElement, ReactNode } from 'react';
import * as Styled from './ActionsGroup.style';
import Container from '../Container';
import { OptionalProps } from '../../types';
import { ActionsGroupPropsStrict } from './ActionsGroups.types';

export type ActionsGroupProps = OptionalProps<
  ActionsGroupPropsStrict,
  'primary' | 'secondary' | 'tertiary'
>;

const normaliseActionsGroupProps = (
  _props: ActionsGroupProps
): ActionsGroupPropsStrict => {
  return {
    ..._props,
    primary: _props.primary ?? null,
    secondary: _props.secondary ?? null,
    tertiary: _props.tertiary ?? null,
  };
};

export const ActionsGroup = (_props: ActionsGroupProps) => {
  const { primary, secondary, tertiary, testID } =
    normaliseActionsGroupProps(_props);

  const hasButtons = isValidElement(primary) || isValidElement(secondary);
  const safeClone = (element: ReactNode) =>
    isValidElement(element) ? cloneElement(element) : null;

  return (
    <Container fullWidth gap="md" flexDirection="column" testID={testID}>
      {hasButtons && (
        <Styled.ButtonsSection fullWidth alignItems="center" gap="md">
          {safeClone(secondary)}
          {safeClone(primary)}
        </Styled.ButtonsSection>
      )}
      {safeClone(tertiary)}
    </Container>
  );
};
