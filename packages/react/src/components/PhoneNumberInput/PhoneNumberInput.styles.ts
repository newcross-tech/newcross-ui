import { Theme } from '../../types';
import styled, { css } from 'styled-components';
import Label from '../Label';

export const Content = styled.div`
  ${({ theme }: Theme) => css`
    min-height: 48px;
    & .react-international-phone-input-container  {
    max-width: 290px;
    border: ${theme.SizeBaseBorderWidthSm} solid ${theme.ColorBaseGrey200};
    border-radius: ${theme.CardBorderRadius};
    }
    & .react-international-phone-country-selector-button__button-content {
      padding: ${theme.SpacingBase0} ${theme.SpacingBase8};
    }
    & .react-international-phone-country-selector-button {
    border: ${theme.SpacingBase0};
    position: relative;
    border-radius: ${theme.CardBorderRadius} ${theme.SpacingBase0} ${theme.SpacingBase0} ${theme.CardBorderRadius}!important;
    }
    & .react-international-phone-country-selector-button::after {
      content: '';
      position: absolute;
      top: 25%;
      right: ${theme.SpacingBase0};
      height: 50%;
      width: ${theme.SizeBaseBorderWidthSm};
      background-color: ${theme.ColorNeutralGrey200};
    }
    & .react-international-phone-input {
    color: ${theme.TypographyColorSecondary}!important;
    width: 100%;
    border: ${theme.SpacingBase0} !important;
    border-radius: ${theme.SpacingBase0} ${theme.CardBorderRadius} ${theme.CardBorderRadius} ${theme.SpacingBase0}!important;
    }
    & .react-international-phone-country-selector-button__dropdown-arrow {
      border-bottom: 2px solid  ${theme.ColorNeutralGrey100};
      border-right: 2px solid ${theme.ColorNeutralGrey100};
      width: ${theme.SpacingBase8};
      height: ${theme.SpacingBase8};
      transform: rotate(45deg);
      margin-left: ${theme.SpacingBase4};
      margin-bottom: ${theme.SpacingBase4};
      transition: all .1s ease-out;
      border-left: ${theme.SpacingBase0};
      border-top: ${theme.SpacingBase0};
    }
    & .react-international-phone-country-selector-button__dropdown-arrow--active {
      transform: rotate(-135deg);
      margin-top: ${theme.SpacingBase8};
    }
      }
  `};
`;

export const LabelWithMargin = styled(Label)`
  ${({ theme }: Theme) => css`
    margin-bottom: ${theme.SpacingBase4};
  `};
`;
