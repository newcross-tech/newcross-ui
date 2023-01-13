import { Meta, Story } from '@storybook/react';

import { faBarsFilter } from '@fortawesome/pro-light-svg-icons/faBarsFilter';
import { faKitMedical } from '@fortawesome/pro-light-svg-icons/faKitMedical';
import { faTrainSubway } from '@fortawesome/pro-light-svg-icons/faTrainSubway';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { web } from '@newcross-ui/design-tokens';
import styled, { css } from 'styled-components';
import Badge, {
  BadgePositions,
  BadgeProps,
  BadgeSizes,
} from '../../components/Badge';
import Container from '../Container';
import Spacing from '../Spacing';

const { SpacingBase24, SpacingBase48 } = web.healthforce;

export default {
  title: 'React/Components/Badge',
  component: Badge,
} as Meta;

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.ColorNeutralWhite};
    width: ${theme.SpacingBase32};
    height: ${theme.SpacingBase32};
    border-radius: ${theme.BorderBaseRadiusRounded};
    justify-content: center;
    align-items: center;
  `}
`;

type IconProps = FontAwesomeIconProps & {
  $size?: string;
};

const Icon = styled(FontAwesomeIcon)<IconProps>`
  ${({ $size }) => css`
    width: ${$size};
    height: ${$size};
  `}
`;

export const VariantsWithIcons = () => {
  return (
    <Container display="inline-flex" justifyContent="space-around">
      <Spacing position={'Horizontal'} />
      <Badge size={BadgeSizes.small} position={BadgePositions.TopRight}>
        <StyledWrapper>
          <Icon icon={faBarsFilter} $size={SpacingBase24} />
        </StyledWrapper>
      </Badge>
      <Spacing size={'Large'} position={'Horizontal'} />
      <Badge
        size={BadgeSizes.medium}
        badgeContent={9}
        position={BadgePositions.TopLeft}
      >
        <Icon icon={faUser} $size={SpacingBase24} />
      </Badge>
      <Spacing size={'Large'} position={'Horizontal'} />
      <Badge
        size={BadgeSizes.large}
        badgeContent={'!'}
        position={BadgePositions.BottomRight}
      >
        <Icon icon={faTrainSubway} $size={SpacingBase48} />
      </Badge>
    </Container>
  );
};

export const Variants = () => {
  return (
    <Container justifyContent="space-around" hasPadding>
      <Badge size={BadgeSizes.small} />
      <Badge size={BadgeSizes.medium} badgeContent={9} />
      <Badge size={BadgeSizes.medium} badgeContent={'?'} />
      <Badge size={BadgeSizes.large} badgeContent={1000} maxNumber={999} />
      <Badge size={BadgeSizes.large} badgeContent={'!'} />
    </Container>
  );
};

const Template: Story<BadgeProps> = ({ size, ...rest }) => (
  <Container justifyContent={'flex-start'}>
    <Badge size={size as BadgeSizes} {...rest}>
      <Icon icon={faKitMedical} $size={SpacingBase48} />
    </Badge>
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  badgeContent: 9,
  size: BadgeSizes.large,
  position: BadgePositions.TopRight,
};
