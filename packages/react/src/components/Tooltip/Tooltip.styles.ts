import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types/Theme';
import {
  ContainerProps,
  PositionValuesArgs,
  TooltipPositions,
  TooltipVariant,
} from './Tooltip.types';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faInfoCircle as outlineFaInfoCircle } from '@fortawesome/pro-regular-svg-icons/faInfoCircle';
import { faQuestionCircle as outlineFaQuestionCircle } from '@fortawesome/pro-regular-svg-icons/faQuestionCircle';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { getHaloValue, getRgba } from '../../utils';
import { defaultAnimationSpeed } from './Tooltip.constants';

export const getVariantIcon = (): Record<TooltipVariant, IconDefinition> => ({
  info: outlineFaInfoCircle,
  question: outlineFaQuestionCircle,
});

const getTooltipWidth = (theme: ThemeDesignTokens) => {
  const widthValue = getHaloValue(theme.SpacingBase8);
  if (widthValue === 'NaN') return 'NaN';

  return `${+(widthValue * 23)}rem`;
};

const verticalAlignment = (): FlattenSimpleInterpolation => css`
  top: 50%;
  transform: translateY(-50%);
`;

export const getPositionValues = ({
  marginOffset,
}: PositionValuesArgs): Record<
  TooltipPositions,
  FlattenSimpleInterpolation
> => ({
  top: css`
    bottom: 100%;
    left: 50%;
    margin-bottom: ${marginOffset};
    transform: translateX(-50%);
  `,
  right: css`
    ${verticalAlignment()}
    left: 100%;
    margin-left: ${marginOffset};
  `,
  bottom: css`
    top: 100%;
    left: 50%;
    margin-top: ${marginOffset};
    transform: translateX(-50%);
  `,
  left: css`
    ${verticalAlignment()}
    right: 100%;
    margin-right: ${marginOffset};
  `,
});

export const Icon = styled(FontAwesomeIcon)`
  ${({ theme }: Theme) => css`
    color: ${theme.AccordionIconColor};
    width: ${theme.SpacingBase24};
    height: ${theme.SpacingBase24};
  `};
`;

export const TextWrapper = styled.span`
  opacity: 0;
  transition: ${`all ${defaultAnimationSpeed}s ease-in-out`};
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: inline-block;

  ${({ theme, position }: ExtendedTheme<ContainerProps>) => css`
    ${TextWrapper} {
      visibility: hidden;
      width: max-content;
      max-width: ${getTooltipWidth(theme)};
      min-width: ${theme.SpacingBase24};
      text-align: center;
      padding: ${theme.SpacingBase16} ${theme.SpacingBase24};
      color: ${theme.ColorBaseBlack100};
      background-color: ${theme.ColorBaseBlue500};
      border-radius: ${theme.TextInputBorderRadius};
      box-shadow: ${theme.TabsActiveTabShadowOffsetWidth}px
        ${theme.TabsActiveTabShadowOffsetHeight}px ${theme.CardShadowRadius}
        ${getRgba(theme.CardShadowColor, theme.CardShadowOpacity)};

      position: absolute;

      ${position &&
      getPositionValues({
        marginOffset: theme.SpacingBase16,
      })[position]}
      z-index: 1;
    }

    :hover {
      ${TextWrapper} {
        visibility: visible;
        opacity: 1;
      }
    }
  `};
`;
