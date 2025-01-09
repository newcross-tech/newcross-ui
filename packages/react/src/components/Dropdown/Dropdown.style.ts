import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated } from '@react-spring/web';
import styled, { css } from 'styled-components';
import { getElipsisStyles, getTabbedStateStyles } from '../../utils/css';
import { getScrollbarStyles } from '../../utils/css/getScrollbarStyles';
import { getHaloValue } from '../../utils/getHaloValue';
import HaloLabel, { LabelProps } from '../Label';
import Typography from '../Typography';
import { defaultAnimationSpeed, optionNumberOfLines } from './Dropdown.constants';
import {
  DropdownAnimatedStyleArgs,
  ErrorProps,
  HeaderContainerProps,
  HeaderValueProps,
  OptionProps,
} from './Dropdown.types';

const getPaddingStyles = (isMulti: boolean) => css`
  ${({ theme }) => css`
    padding: ${!isMulti ? theme.SpacingBase8 : theme.SpacingBase4} ${theme.TextInputPaddingHorizontal};
  `};
`;

export const Label = styled(HaloLabel)<LabelProps>`
  ${({ theme }) => css`
    display: inline-block;
    color: ${theme.RadioColor};
    margin-bottom: ${theme.SpacingBase4};
  `}
`;

export const Option = styled(Typography)<OptionProps>`
  cursor: pointer;
  ${getElipsisStyles(optionNumberOfLines)};

  ${({ theme, isMulti }) => css`
    color: ${theme.AccordionIconColor};
    ${getPaddingStyles(isMulti)};

    :hover {
      background-color: ${theme.BrandColorSecondary400};
    }
    :focus-visible {
      outline: none;
      background: ${theme.BrandColorSecondary400};
    }
  `};
`;

export const getAnimatedStyles = ({ isFocused }: DropdownAnimatedStyleArgs) => ({
  display: isFocused ? 'block' : 'none',
  opacity: isFocused ? 1 : 0,
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
  ${({ theme }) => css`
    background-color: ${theme.AccordionHeaderBackgroundColor};
    border-radius: ${theme.TextInputBorderRadius};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  `};
`;

export const BodyContent = styled(animated.div)<ErrorProps>`
  overflow-y: auto;

  ${({ theme, $hasError }) => css`
    max-height: ${+getHaloValue(theme.SpacingBase16) * 10}rem;
    background: ${theme.ColorNeutralWhite};
    border-radius: ${theme.TextInputBorderRadius};
    border: ${theme.TextInputWebSelectedBorderWidth} solid
      ${!$hasError ? theme.TextInputSelectedBorderColor : theme.TextInputErrorColor};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: none;

    ${getScrollbarStyles()}
  `};
`;

export const HeaderContent = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => css`
    color: ${theme.AccordionIconColor};
    padding: ${theme.TextInputPaddingVertical} ${theme.TextInputPaddingHorizontal};
  `}
`;

export const Divider = styled.div`
  ${({ theme }) => css`
    border: ${theme.BorderBaseWidthSm} solid ${theme.ColorNeutralGrey200};
    align-self: stretch;
    display: flex;
  `}
`;

export const IndicatorsContainer = styled.div`
  display: flex;
  justify-self: right;
  align-self: stretch;
  align-items: center;

  ${({ theme }) => css`
    margin-left: ${theme.SpacingBase16};
    > div:not(:last-child) {
      margin-right: ${theme.SpacingBase16};
    }
  `};
`;

export const Icon = styled(FontAwesomeIcon)`
  transition: ${`all ${defaultAnimationSpeed}s ease-in-out`};
  ${({ theme }) => css`
    height: ${theme.SpacingBase24};
    width: ${theme.SpacingBase24};
  `};
`;

export const CloseIcon = styled(FontAwesomeIcon)`
  ${({ theme }) => css`
    color: ${theme.TextInputSearchBarCloseIconColor};
    height: ${+getHaloValue(theme.SpacingBase16) * 1.2}rem;
    width: ${+getHaloValue(theme.SpacingBase16) * 1.2}rem;
  `}
`;

export const HeaderContainer = styled.div<HeaderContainerProps>`
  ${({ theme, isContentShown, $hasError, disabled }) => css`
    background-color: ${theme.AccordionHeaderBackgroundColor};
    border: ${theme.TextInputBorderWidth} solid ${theme.TextInputBorderColor};
    border-radius: ${theme.TextInputBorderRadius};
    ${getTabbedStateStyles()}

    ${disabled &&
    css`
      background-color: ${theme.ColorBaseGrey500};
    `}

    ${!disabled &&
    !$hasError &&
    !isContentShown &&
    css`
      &:hover {
        border: ${theme.TextInputWebSelectedBorderWidth} solid ${theme.TextInputSelectedBorderColor};
      }
    `}

    ${isContentShown &&
    css`
      border: ${theme.TextInputWebSelectedBorderWidth} solid ${theme.TextInputSelectedBorderColor};
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

    ${$hasError &&
    css`
      background-color: ${theme.ColorBaseRed400};
      border: ${theme.TextInputWebSelectedBorderWidth} solid ${theme.TextInputErrorColor};
    `}
  `}
`;

export const HeaderLabel = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

export const HeaderValue = styled(Typography)<HeaderValueProps>`
  ${({ theme, hasChosen }) =>
    !hasChosen &&
    css`
      color: ${theme.ColorNeutralGrey100};
    `}
`;

export const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => css`
    gap: ${theme.SpacingBase8};
  `};
`;
