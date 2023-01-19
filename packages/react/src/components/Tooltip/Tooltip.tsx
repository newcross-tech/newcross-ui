import { ReactNode } from 'react';
import Typography from '../Typography';
import * as Styled from './Tooltip.styles';
import { TooltipPositions, TooltipVariant } from './Tooltip.types';

export type TooltipProps = {
  /**
   * Used to define position of the tooltip
   */
  position?: TooltipPositions;
  /**
   * Used to define tooltip variant
   */
  variant?: TooltipVariant;
  /**
   * Support any kind of content for tooltip
   */
  children?: ReactNode;
};

const Tooltip = ({ children, position, variant = 'info' }: TooltipProps) => (
  <Styled.Container position={position}>
    <Styled.Icon icon={Styled.getVariantIcon()[variant]} />
    <Styled.TextWrapper>
      <Typography variant={'paragraph1'}>{children}</Typography>
    </Styled.TextWrapper>
  </Styled.Container>
);

export default Tooltip;
