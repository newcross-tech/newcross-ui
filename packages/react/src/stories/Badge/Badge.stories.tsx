import { Meta, Story } from '@storybook/react';
import { faBarsFilter } from '@fortawesome/pro-light-svg-icons/faBarsFilter';
import { faKitMedical } from '@fortawesome/pro-light-svg-icons/faKitMedical';
import { faTrainSubway } from '@fortawesome/pro-light-svg-icons/faTrainSubway';
import { faHeart } from '@fortawesome/pro-solid-svg-icons/faHeart';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { web } from '@newcross-tech/ui-design-tokens';
import styled, { css } from 'styled-components';
import Badge, { BadgeSizes } from '../../components/Badge';
import Container from '../../components/Container';
import { Avatar, BadgeProps } from '../..';

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
    <Container display="inline-flex" justifyContent="space-around" gap="xl">
      <Badge size="small">
        <StyledWrapper>
          <Icon icon={faBarsFilter} $size={SpacingBase24} />
        </StyledWrapper>
      </Badge>
      <Badge size={'medium'} badgeContent={9}>
        <Icon icon={faUser} $size={SpacingBase24} />
      </Badge>
      <Badge size={'large'} badgeContent={'!'}>
        <Icon icon={faTrainSubway} $size={SpacingBase48} />
      </Badge>
      <Badge size={'medium'} badgeContent={9}>
        <Icon icon={faUser} $size={SpacingBase24} />
      </Badge>
      <Badge size={'large'} badgeContent={'C'}>
        <Icon icon={faTrainSubway} $size={SpacingBase48} />
      </Badge>
      <Badge size={'large'} badgeContent={faHeart}>
        <Avatar size={64} clickable />
      </Badge>
    </Container>
  );
};

export const Variants = () => {
  return (
    <Container flexDirection="column" gap="xl">
      <Container justifyContent="space-around">
        <Badge size={'small'} />
        <Badge size={'medium'} badgeContent={9} />
        <Badge size={'medium'} badgeContent={1000} />
        <Badge size={'large'} badgeContent={9} />
        <Badge size={'large'} badgeContent={1000} />
        <Badge size={'large'} badgeContent={faHeart} />
      </Container>
      <Container justifyContent="space-around">
        <Badge size={'small'} scheme={'dark'} />
        <Badge size={'medium'} badgeContent={9} scheme={'dark'} />
        <Badge size={'medium'} badgeContent={1000} scheme={'dark'} />
        <Badge size={'large'} badgeContent={9} scheme={'dark'} />
        <Badge size={'large'} badgeContent={1000} scheme={'dark'} />
        <Badge size={'large'} badgeContent={faHeart} scheme={'dark'} />
      </Container>
      <Container justifyContent="space-around">
        <Badge size={'small'} type={'notification'} />
        <Badge size={'medium'} badgeContent={9} type={'notification'} />
        <Badge size={'medium'} badgeContent={1000} type={'notification'} />
        <Badge size={'large'} badgeContent={9} type={'notification'} />
        <Badge size={'large'} badgeContent={1000} type={'notification'} />
        <Badge size={'large'} badgeContent={faHeart} type={'notification'} />
      </Container>
      <Container justifyContent="space-around">
        <Badge size={'small'} disabled />
        <Badge size={'medium'} badgeContent={9} disabled />
        <Badge size={'medium'} badgeContent={1000} disabled />
        <Badge size={'large'} badgeContent={9} disabled />
        <Badge size={'large'} badgeContent={1000} disabled />
        <Badge size={'large'} badgeContent={faHeart} disabled />
      </Container>
      <Container justifyContent="space-around">
        <Badge size={'small'} scheme={'dark'} disabled />
        <Badge size={'medium'} badgeContent={9} scheme={'dark'} disabled />
        <Badge size={'medium'} badgeContent={1000} scheme={'dark'} disabled />
        <Badge size={'large'} badgeContent={9} scheme={'dark'} disabled />
        <Badge size={'large'} badgeContent={1000} scheme={'dark'} disabled />
        <Badge size={'large'} badgeContent={faHeart} scheme={'dark'} disabled />
      </Container>
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
};
