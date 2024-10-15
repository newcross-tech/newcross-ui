import { ExtendedTheme } from '../../types';
import styled, { css } from 'styled-components';
import Label from '../Label';
import Typography from '../Typography';

export const Content = styled.div`
  ${({ $isError, theme }: ExtendedTheme<{ $isError: boolean }>) => css`
    min-height: ${theme.SpacingBase48};

    .react-international-phone-input-container {
      border: ${theme.SizeBaseBorderWidthSm} solid
        ${$isError ? theme.ColorBaseRed100 : theme.ColorBaseGrey200};
      border-radius: ${theme.CardBorderRadius};
    }

    .react-international-phone-country-selector-button__button-content {
      padding: ${theme.SpacingBase0} ${theme.SpacingBase8};
    }

    .react-international-phone-country-selector-button {
      border: ${theme.SpacingBase0};
      position: relative;
      border-radius: ${theme.CardBorderRadius} ${theme.SpacingBase0}
        ${theme.SpacingBase0} ${theme.CardBorderRadius}!important;
      height: ${theme.SpacingBase48};
    }

    .react-international-phone-country-selector-button::after {
      content: '';
      position: absolute;
      top: 25%;
      right: ${theme.SpacingBase0};
      height: 50%;
      width: ${theme.SizeBaseBorderWidthSm};
      background-color: ${theme.ColorNeutralGrey200};
    }

    .react-international-phone-input {
      color: ${theme.TypographyColorSecondary}!important;
      width: 100%;
      border: ${theme.SpacingBase0} !important;
      border-radius: ${theme.SpacingBase0} ${theme.CardBorderRadius}
        ${theme.CardBorderRadius} ${theme.SpacingBase0}!important;
      height: ${theme.SpacingBase48};
    }

    .react-international-phone-country-selector-button__dropdown-arrow {
      border-bottom: 2px solid ${theme.ColorNeutralGrey100};
      border-right: 2px solid ${theme.ColorNeutralGrey100};
      width: ${theme.SpacingBase8};
      height: ${theme.SpacingBase8};
      transform: rotate(45deg);
      margin-left: ${theme.SpacingBase4};
      margin-bottom: ${theme.SpacingBase4};
      transition: all 0.1s ease-out;
      border-left: ${theme.SpacingBase0};
      border-top: ${theme.SpacingBase0};
    }

    .react-international-phone-country-selector-button__dropdown-arrow--active {
      transform: rotate(-135deg);
      margin-top: ${theme.SpacingBase8};
    }

    .react-international-phone-input,
    .react-international-phone-country-selector-dropdown__list-item-country-name,
    .react-international-phone-country-selector-dropdown__list-item-dial-code {
      font-family: ${theme.TextInputFontFamily};
      font-size: ${theme.TextInputFontSize};
      line-height: ${theme.TextInputLineHeight};
    }
  `};
`;

export const LabelWithMargin = styled(Label)`
  margin-bottom: ${({ theme }) => theme.SpacingBase4};
`;

export const ErrorMessage = styled(Typography)`
  padding-left: ${({ theme }) => theme.SpacingBase16};
  padding-top: ${({ theme }) => theme.SpacingBase4};
`;
