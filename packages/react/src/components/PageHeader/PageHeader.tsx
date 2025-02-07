import { cloneElement, isValidElement } from 'react';
import { faChevronLeft } from '@fortawesome/pro-regular-svg-icons/faChevronLeft';
import Container from '../Container';
import Typography from '../Typography';
import Icon from '../Icon';
import { PageHeaderPropsStrict } from './PageHeader.types';

export type PageHeaderProps = PageHeaderPropsStrict;

const PageHeader = ({
  title,
  subtitle,
  onBackClick,
  secondaryAction,
}: PageHeaderPropsStrict) => {
  return (
    <Container gap="sm" flexDirection="column" fullWidth>
      <Container fullWidth justifyContent="space-between">
        <Container gap="sm" alignItems="center">
          {onBackClick && (
            <Icon
              testID="title-back-icon"
              variant="h2"
              onClick={onBackClick}
              icon={faChevronLeft}
            />
          )}
          <Typography variant="h1" testID="page-title">
            {title}
          </Typography>
        </Container>
        {isValidElement(secondaryAction) && (
          <Container>{cloneElement(secondaryAction)}</Container>
        )}
      </Container>
      <Typography variant="p1" color="defaultDark">
        {subtitle}
      </Typography>
    </Container>
  );
};

export default PageHeader;
