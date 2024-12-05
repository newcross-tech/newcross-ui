import React, { PropsWithChildren } from 'react';
import { Platform } from 'react-native';
import { native } from '@newcross-ui/design-tokens';

const isWeb = Platform.OS === 'web';
const { SpacingBase12 } = native.healthforce;

export const PlatformStyle = ({ children }: PropsWithChildren) => {
  const Wrapper = isWeb ? 'div' : React.Fragment;

  return (
    <Wrapper
      style={
        isWeb
          ? {
              position: 'fixed',
              bottom: SpacingBase12,
              right: SpacingBase12,
              zIndex: 100,
            }
          : {}
      }
    >
      {children}
    </Wrapper>
  );
};
