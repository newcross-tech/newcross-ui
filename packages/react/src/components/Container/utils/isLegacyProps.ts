import { ContainerProps } from '../Container';
import { LegacyContainerProps } from '../LegacyContainer';

export const isLegacyProps = (
  props: ContainerProps
): props is LegacyContainerProps => {
  return !!(props as LegacyContainerProps);
};
