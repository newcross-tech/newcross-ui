import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated } from '@react-spring/web';
import styled, { css } from 'styled-components';
import { getElipsisStyles } from '../../../utils/getElipsisStyles';
import { getTabbedStateStyles } from '../../../utils/getTabbedStateStyles';
import { ExtendedTheme, Theme } from '../../types/Theme';
import Typography, { TypographyProps } from '../Typography';
import { defaultAnimationSpeed, dividerRotationDeg, optionNumberOfLines } from './Dropdown.constants';
import { DropdownAnimatedStyleArgs, HeaderContainerProps, HeaderValueProps } from './Dropdown.types';

const getPaddingStyles = () => css`
  ${({ theme }: Theme) => css`
    padding: ${theme.TextInputPaddingVertical} ${theme.TextInputPaddingHorizontal};
  `};
`;

const getActiveMarginStyles = () => css`
  margin: -1px; //consider writing SpacingBase1
`;

export const Label = styled(Typography)`
  ${({ theme }: ExtendedTheme<TypographyProps>) => css`
    margin-bottom: ${theme.TextInputMarginTop};
  `}
`;

export const Option = styled(Typography)`
  cursor: pointer;
  ${getElipsisStyles(optionNumberOfLines)};
  ${getPaddingStyles()};

  ${({ theme }: ExtendedTheme<TypographyProps>) => css`
    color: ${theme.AccordionIconColor};

    :hover {
      background-color: ${theme.ColorBaseMint400};
    }

    :focus-visible {
      outline: none;
      background: ${theme.ColorBaseMint400};
    }
  `};
`;

export const getAnimatedStyles = ({ theme, isFocused, hasError }: DropdownAnimatedStyleArgs) => ({
  display: isFocused ? 'block' : 'none',
  opacity: isFocused ? 1 : 0,
  borderRadius: theme.TextInputBorderRadius,
  border: `${theme.TextInputSelectedBorderWidth} solid ${
    !hasError ? theme.TextInputSelectedBorderColor : theme.TextInputErrorColor
  }`,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderTop: 'none',
  paddingTop: theme.SpacingBase4,
  paddingBottom: theme.SpacingBase4,
  config: { duration: defaultAnimationSpeed * 1000 },
});

export const Container = styled.div`
  min-width: 50%;
  position: relative;
`;

export const BodyContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: absolute;
  z-index: 1;
  ${({ theme }: Theme) => css`
    background-color: ${theme.AccordionHeaderBackgroundColor};
    border-radius: ${theme.TextInputBorderRadius};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  `};
`;

export const BodyContent = styled(animated.div)`
  background: white;
`;

export const HeaderContent = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }: Theme) => css`
    color: ${theme.AccordionIconColor};
    padding: ${theme.AccordionHeaderContentPaddingVertical} ${theme.AccordionHeaderContentPaddingHorizontal};
  `}
`;

export const Divider = styled.div`
  transform: rotate(${dividerRotationDeg}deg);
  ${({ theme }: Theme) => css`
    min-width: ${theme.SpacingBase24};
    border: ${theme.BorderBaseWidthSm} solid ${theme.TextInputBorderColor};
  `}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    gap: ${theme.SpacingBase4};
  `};
`;

export const Icon = styled(FontAwesomeIcon)`
  transition: ${`all ${defaultAnimationSpeed}s ease-in-out`};
`;

export const CloseIcon = styled(FontAwesomeIcon)`
  ${({ theme }: Theme) => css`
    color: ${theme.TextInputSearchBarCloseIconColor};
  `}
`;

export const HeaderContainer = styled.div`
  ${({ theme, isContentShown, hasError, disabled }: ExtendedTheme<HeaderContainerProps>) => css`
    background-color: ${theme.AccordionHeaderBackgroundColor};
    border: ${theme.TextInputBorderWidth} solid ${theme.TextInputBorderColor};
    border-radius: ${theme.TextInputBorderRadius};
    ${getTabbedStateStyles(theme.SpacingBase4)}

    ${disabled &&
    css`
      background-color: ${theme.ColorNeutralGrey400};
    `}

    ${!disabled &&
    !hasError &&
    !isContentShown &&
    css`
      &:hover {
        ${getActiveMarginStyles()};
        border: ${theme.TextInputSelectedBorderWidth} solid ${theme.TextInputSelectedBorderColor};
      }
    `}

    ${isContentShown &&
    css`
      border: ${theme.TextInputSelectedBorderWidth} solid ${theme.TextInputSelectedBorderColor};
      border-bottom: ${theme.AccordionHeaderBorderBottomWidth} solid ${theme.AccordionHeaderBorderBottomColor};
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}

    > ${HeaderContent} {
      ${disabled &&
      css`
        cursor: default;
        color: ${theme.ColorNeutralGrey100};
      `}
    }

    ${hasError &&
    css`
      background-color: ${theme.ColorBaseRed400};
      border: ${theme.TextInputSelectedBorderWidth} solid ${theme.TextInputErrorColor};
    `}
  `}
`;

export const HeaderLabel = styled.div`
  width: 80%;
`;

export const HeaderValue = styled(Typography)`
  ${({ theme, hasChosen }: ExtendedTheme<HeaderValueProps>) =>
    !hasChosen &&
    css`
      color: ${theme.ColorNeutralGrey100};
    `}
`;
