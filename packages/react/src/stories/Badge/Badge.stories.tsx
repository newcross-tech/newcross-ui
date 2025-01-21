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
import { Scheme } from '../../types';
import { BadgeType } from '../../components/Badge/Badge.types';

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
      </Container>
      <Container justifyContent="space-around">
        <Badge size={'small'} scheme={'dark' as Scheme} />
        <Badge size={'medium'} badgeContent={9} scheme={'dark' as Scheme} />
        <Badge size={'medium'} badgeContent={1000} scheme={'dark' as Scheme} />
        <Badge size={'large'} badgeContent={9} scheme={'dark' as Scheme} />
        <Badge size={'large'} badgeContent={1000} scheme={'dark' as Scheme} />
      </Container>
      <Container justifyContent="space-around">
        <Badge size={'small'} type={'notification' as BadgeType} />
        <Badge
          size={'medium'}
          badgeContent={9}
          type={'notification' as BadgeType}
        />
        <Badge
          size={'medium'}
          badgeContent={1000}
          type={'notification' as BadgeType}
        />
        <Badge
          size={'large'}
          badgeContent={9}
          type={'notification' as BadgeType}
        />
        <Badge
          size={'large'}
          badgeContent={1000}
          type={'notification' as BadgeType}
        />
      </Container>
      <Container justifyContent="space-around">
        <Badge size={'small'} disabled />
        <Badge size={'medium'} badgeContent={9} disabled />
        <Badge size={'medium'} badgeContent={1000} disabled />
        <Badge size={'large'} badgeContent={9} disabled />
        <Badge size={'large'} badgeContent={1000} disabled />
      </Container>
      <Container justifyContent="space-around">
        <Badge size={'small'} scheme={'dark' as Scheme} disabled />
        <Badge
          size={'medium'}
          badgeContent={9}
          scheme={'dark' as Scheme}
          disabled
        />
        <Badge
          size={'medium'}
          badgeContent={1000}
          scheme={'dark' as Scheme}
          disabled
        />
        <Badge
          size={'large'}
          badgeContent={9}
          scheme={'dark' as Scheme}
          disabled
        />
        <Badge
          size={'large'}
          badgeContent={1000}
          scheme={'dark' as Scheme}
          disabled
        />
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
