import 'styled-components';
import { ThemeDesignTokens } from './theme/ThemeProvider';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeDesignTokens {}
}
