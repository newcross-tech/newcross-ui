import React from 'react';
import styled, { css } from 'styled-components';

type ContainerProps = {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  hasPadding?: boolean;
  justifyContent?: 'center' | 'flex-start';
};

const StyledContainer = styled.div<ContainerProps>`
  ${({ theme, hasPadding = true, justifyContent = 'center', direction }) =>
    css`
      flex: 1;
      padding: ${hasPadding ? theme.SpacingBase12 : undefined};
      justify-content: ${justifyContent};
      flex-direction: ${direction};
    `}
`;

const Container = ({ children, ...rest }: ContainerProps) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;
