import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types/Theme';
import { ShiftCardDay, ShiftCardNight, ShiftCardSleeper } from './svg';
import Typography, { TypographyVariant } from '../../components/Typography';

const SHIFT_CARD_STATUS = {
  DAY: 'DAY',
  NIGHT: 'NIGHT',
  SLEEPER: 'SLEEPER',
} as const;

type ObjectValues<T> = T[keyof T];

type ShiftCardStatus = ObjectValues<typeof SHIFT_CARD_STATUS>;

export type CardThumbnailProps = {
  shiftCardStatus?: ShiftCardStatus;
};

const StyledText = styled(Typography)<CardThumbnailProps>`
  ${({ theme, shiftCardStatus }: ExtendedTheme<CardThumbnailProps>) => css`
    color: ${shiftCardStatus === 'DAY' ? theme.TextInputLabelColor : 'white'};
    margin-top: -${theme.SpacingBase8};
  `};
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const InnerText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  position: absolute;
`;

export const CardThumbnail = ({ shiftCardStatus }: CardThumbnailProps) => {
  const getThumbnail = ({ shiftCardStatus }: CardThumbnailProps) => {
    if (shiftCardStatus === 'DAY') return <ShiftCardDay />;
    if (shiftCardStatus === 'NIGHT') return <ShiftCardNight />;
    if (shiftCardStatus === 'SLEEPER') return <ShiftCardSleeper />;
  };

  return (
    <ThumbnailContainer>
      <InnerText>
        <StyledText
          shiftCardStatus={shiftCardStatus}
          variant={TypographyVariant.heading4}
        >
          Tue
        </StyledText>
        <StyledText
          shiftCardStatus={shiftCardStatus}
          variant={TypographyVariant.heading1}
        >
          13
        </StyledText>
      </InnerText>
      {getThumbnail({ shiftCardStatus })}
    </ThumbnailContainer>
  );
};
