import { Meta, Story } from '@storybook/react';
import styled, { css } from 'styled-components';
import Skeleton, { SkeletonProps } from '../../components/Skeleton';
import { ExtendedTheme, Theme } from '../../types/Theme';
import useTheme from '../../hooks/useTheme';
import { getHaloValue } from '../../utils';
import Container from '../Container';
import Spacing from '../Spacing';
import Card from '../../components/Card';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/Skeleton',
  component: Skeleton,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
} as Meta;

const Content = styled.div`
  ${({ theme }: Theme) => css`
    width: ${+getHaloValue(theme.SpacingBase16) * 18}rem;
    height: ${+getHaloValue(theme.SpacingBase12) * 6}rem;
  `}
`;

const FullWidthContent = styled(Content)`
  width: 100%;
`;

const ThumbnailSkeleton = styled(Skeleton)`
  ${({ theme }: Theme) => css`
    border-top-left-radius: ${theme.TextInputBorderRadius};
    border-bottom-left-radius: ${theme.TextInputBorderRadius};
  `}
`;

const SkeletonText = styled(Skeleton)`
  ${({ theme, mb }: ExtendedTheme<{ mb: boolean }>) =>
    css`
      flex: 1;
      margin-bottom: ${mb && theme.SpacingBase8};
    `};
`;

const getTextHeight = (theme) => `${+getHaloValue(theme.SpacingBase12)}rem`;

const SkeletonContent = styled.div`
  ${({ theme, direction }: any) => css`
    display: flex;
    width: 100%;
    flex-direction: ${direction || 'row'};
    gap: ${theme.SpacingBase8};
  `};
`;

export const Variants = () => {
  const theme = useTheme();
  return (
    <Container display={'block'} direction="column">
      <StoryTitle.Regular>Skeleton</StoryTitle.Regular>
      <Spacing />
      <Content>
        <Skeleton />
      </Content>
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Full Width Skeleton</StoryTitle.Regular>
      <Spacing />
      <FullWidthContent>
        <Skeleton />
      </FullWidthContent>
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Custom Skeleton</StoryTitle.Regular>
      <Spacing />
      <Card
        fullWidth
        hasRoundedCorners
        thumbnailContent={
          <ThumbnailSkeleton
            width={`${+getHaloValue(theme.SpacingBase16) * 5}rem`}
          />
        }
      >
        <SkeletonContent direction="column">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={`skeleton-${index}`} height={getTextHeight(theme)} />
          ))}
          <SkeletonContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonText
                key={`skeleton-flexed-${index}`}
                height={getTextHeight(theme)}
              />
            ))}
          </SkeletonContent>
        </SkeletonContent>
      </Card>
    </Container>
  );
};

const Template = ({ ...rest }: SkeletonProps) => (
  <Content>
    <Skeleton {...rest} />
  </Content>
);

export const Interactive: Story<SkeletonProps> = Template.bind({});

Interactive.args = {};
