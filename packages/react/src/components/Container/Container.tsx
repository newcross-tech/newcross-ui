import LegacyContainer, { LegacyContainerProps } from './LegacyContainer';
import NewContainer, { NewContainerProps } from './NewContainer';
import { isLegacyProps } from './utils';

export type ContainerProps = NewContainerProps | LegacyContainerProps;

const Container = (props: ContainerProps) => {
  if (isLegacyProps(props)) {
    return <LegacyContainer {...props} />;
  }
  return <NewContainer {...props} />;
};

export default Container;
