import { OptionalProps } from '../../types';
import * as Styled from './Typography.style';
import { TypographyPropsStrict } from './Typography.types';
import { typographyMap } from './Typography.constants';

export type TypographyProps = OptionalProps<
  TypographyPropsStrict,
  'mode' | 'display'
>;

const normalizeTypographyProps = (
  props: TypographyProps
): TypographyPropsStrict => ({
  ...props,
  mode: props.mode ?? 'light',
  display: props.display ?? 'block',
});

export default function Typography(_props: TypographyProps) {
  const props = normalizeTypographyProps(_props);
  return (
    <Styled.Typography
      // This line can be removed when all usages of `Typography` replace `testID` with `data-testid`
      data-testid={props.testID}
      as={typographyMap[props.variant].semanticTag}
      {...props}
    />
  );
}
