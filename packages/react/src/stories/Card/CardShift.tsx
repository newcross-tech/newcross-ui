import styled, { css } from 'styled-components';
import Card from '../../components/Card';
import { Theme } from '../../types';
import { CardContent } from './CardContent';
import { CardThumbnail, CardThumbnailProps } from './CardThumbnail';
import { SvgBadge } from './svg';

export const StyledBadgeContainer = styled.div`
  ${({ theme }: Theme) => css`
    position: relative;
    align-self: flex-start;
    right: ${theme.CardPadding};
    margin-top: -${theme.CardPadding};
  `};
`;
type CardShiftProps = {
  hasRoundedCorners?: boolean;
} & CardThumbnailProps;

export const CardShift = ({
  shiftCardStatus,
  hasRoundedCorners,
}: CardShiftProps) => (
  <Card
    thumbnailContent={
      <CardThumbnail shiftCardStatus={shiftCardStatus}></CardThumbnail>
    }
    hasRoundedCorners={hasRoundedCorners}
    fullWidth={false}
    hasRightIcon
  >
    <CardContent />
    <StyledBadgeContainer>
      <SvgBadge />
    </StyledBadgeContainer>
  </Card>
);
