import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types/Theme';
import {
  ContainerProps,
  PositionValuesArgs,
  TooltipPositions,
  TooltipVariant,
} from './Tooltip.types';

import { faInfoCircle as outlineFaInfoCircle } from '@fortawesome/pro-regular-svg-icons/faInfoCircle';
import { faQuestionCircle as outlineFaQuestionCircle } from '@fortawesome/pro-regular-svg-icons/faQuestionCircle';
import { getHaloValue } from '../../../utils/getHaloValue';
import { getRgba } from '../../../utils/getRgba';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { defaultAnimationSpeed } from './Tooltip.constants';

export const getVariantIcon = () => ({
  [TooltipVariant.info]: outlineFaInfoCircle,
  [TooltipVariant.question]: outlineFaQuestionCircle,
});

const calculateWidthOffset = (
  width: number | 'NaN',
  padding: number | 'NaN'
) => {
  if (width === 'NaN' || padding === 'NaN') return 'NaN';

  const widthValue = (width + 2 * padding) / 2;

  return `-${+widthValue}rem`;
};

const getTooltipWidth = (theme: ThemeDesignTokens) => {
  const widthValue = getHaloValue(theme.SpacingBase12);
  if (widthValue === 'NaN') return 'NaN';

  return `${+(widthValue * 10)}rem`;
};

export const getPositionValues = ({
  marginOffset,
  paddingOffset,
  widthOffset,
}: PositionValuesArgs) => ({
  [TooltipPositions.Top]: css`
    bottom: 100%;
    left: 50%;
    margin-bottom: ${marginOffset};
    margin-left: ${widthOffset};
  `,
  [TooltipPositions.Right]: css`
    top: ${paddingOffset};
    left: 100%;
    margin-left: ${marginOffset};
  `,
  [TooltipPositions.Bottom]: css`
    top: 100%;
    left: 50%;
    margin-top: ${marginOffset};
    margin-left: ${widthOffset};
  `,
  [TooltipPositions.Left]: css`
    top: ${paddingOffset};
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
      width: ${getTooltipWidth(theme)};
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
        widthOffset: calculateWidthOffset(
          getHaloValue(getTooltipWidth(theme)),
          getHaloValue(theme.SpacingBase24)
        ),
        paddingOffset: `-${theme.SpacingBase16}`,
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
