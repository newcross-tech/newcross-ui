import React from 'react';
import { OptionalProps } from '../../types';
import Container from '../Container';
import { LOGO_PATHS, LOGO_SIZE } from './NXLogo.constants';
import { NXLogoPropsStrict } from './NXLogo.types';

export type NXLogoProps = OptionalProps<NXLogoPropsStrict, 'scheme' | 'size'>;

const normalizeNXLogoProps = (props: NXLogoProps): NXLogoPropsStrict => ({
  ...props,
  scheme: props.scheme ?? 'light',
  size: props.size ?? 'lg',
});

const NXLogo = (_props: NXLogoProps) => {
  const { type, scheme, size } = normalizeNXLogoProps(_props);

  const dimensions = LOGO_SIZE[type][size];
  const svgElement = LOGO_PATHS[type][scheme];
  const sizedSvg = React.cloneElement(svgElement, {
    width: dimensions.width,
    height: dimensions.height,
  });

  return <Container testID={`NX-${type}-${scheme}`}>{sizedSvg}</Container>;
};

export default NXLogo;
