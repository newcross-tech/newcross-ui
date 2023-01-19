import styled, { css } from 'styled-components';

type ContainerProps = {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  display?: 'flex' | 'block' | 'inline-flex';
  hasPadding?: boolean;
  // width?: string;
  justifyContent?: 'center' | 'flex-start' | 'space-around';
};

const StyledContainer = styled.div<ContainerProps>`
  ${({
    theme,
    hasPadding = true,
    justifyContent,
    direction,
    // width,
    display = 'flex',
  }) =>
    css`
      display: ${display};
      flex: 1;
      gap: ${hasPadding ? theme.SpacingBase12 : undefined};
      justify-content: ${justifyContent};
      flex-direction: ${direction};
    `}
`;

const Container = ({ children, ...rest }: ContainerProps) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;
