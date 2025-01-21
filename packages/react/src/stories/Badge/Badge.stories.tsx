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
import Badge, { BadgeSizes } from '../../components/Badge';
import Container from '../../components/Container';
import { BadgeProps } from '../..';

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
      <Container mx="SpacingBase8" />
      <Badge size="small" position="topRight">
        <StyledWrapper>
          <Icon icon={faBarsFilter} $size={SpacingBase24} />
        </StyledWrapper>
      </Badge>
      <Container mx="SpacingBase8" />
      <Badge size={'medium'} badgeContent={9} position={'topLeft'}>
        <Icon icon={faUser} $size={SpacingBase24} />
      </Badge>
      <Container mx="SpacingBase8" />
      <Badge size={'large'} badgeContent={'!'} position={'bottomRight'}>
        <Icon icon={faTrainSubway} $size={SpacingBase48} />
      </Badge>{' '}
      <Container mx="SpacingBase32" />
      <Badge size={'medium'} badgeContent={9} position={'topLeft'} hasCutout>
        <Icon icon={faUser} $size={SpacingBase24} />
      </Badge>
      <Container mx="SpacingBase8" />
      <Badge
        size={'large'}
        badgeContent={'C'}
        position={'bottomRight'}
        hasCutout
      >
        <Icon icon={faTrainSubway} $size={SpacingBase48} />
      </Badge>
    </Container>
  );
};

export const Variants = () => {
  return (
    <Container justifyContent="space-around">
      <Badge size={'small'} />
      <Badge size={'medium'} badgeContent={9} />
      <Badge size={'medium'} badgeContent={'?'} />
      <Badge size={'large'} badgeContent={1000} maxNumber={999} />
      <Badge size={'large'} badgeContent={'!'} />
    </Container>
  );
};

export const VariantsWithBackground = () => {
  return (
    <Container justifyContent="space-around">
      <Badge size={'small'} backgroundColor="primary" />
      <Badge size={'medium'} badgeContent={9} backgroundColor="secondary" />
      <Badge size={'medium'} badgeContent={'?'} backgroundColor="warning" />
      <Badge
        size={'large'}
        badgeContent={1000}
        maxNumber={999}
        backgroundColor="success"
      />
      <Badge size={'large'} badgeContent={'!'} backgroundColor="error" />
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
  size: 'large',
  position: 'topRight',
};
