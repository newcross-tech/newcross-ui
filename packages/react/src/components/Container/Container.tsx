import { TestProp } from '../../types';
import { ThemeSpacing } from './Container.types';
import * as Styled from './Container.style';

export type ContainerProps = {
  children?: React.ReactNode;
  /**
   * margin-left and margin-right and margin-top and margin-bottom
   */
  m?: ThemeSpacing;
  /**
   * margin-left and margin-right
   */
  mx?: ThemeSpacing;
  /**
   * margin-top and margin-bottom
   */
  my?: ThemeSpacing;
  /**
   * margin-left
   */
  ml?: ThemeSpacing;
  /**
   * margin-right
   */
  mr?: ThemeSpacing;
  /**
   * margin-top
   */
  mt?: ThemeSpacing;
  /**
   * margin-bottom
   */
  mb?: ThemeSpacing;
  /**
   * padding-left and padding-right and padding-top and padding-bottom
   */
  p?: ThemeSpacing;
  /**
   * padding-left and padding-right
   */
  px?: ThemeSpacing;
  /**
   * padding-top and padding-bottom
   */
  py?: ThemeSpacing;
  /**
   * padding-left
   */
  pl?: ThemeSpacing;
  /**
   * padding-right
   */
  pr?: ThemeSpacing;
  /**
   * padding-top
   */
  pt?: ThemeSpacing;
  /**
   * padding-bottom
   */
  pb?: ThemeSpacing;
  /**
   * Makes the container a flexbox and sets the flex-direction
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /**
   * Sets the spacing between each child using margin
   */
  gap?: ThemeSpacing;
  /**
   * Used to make the container take the full width of its parent
   * `width: 100%`
   */
  fullWidth?: boolean;
} & TestProp;

const Container = ({ children, testID, ...props }: ContainerProps) => {
  return (
    <Styled.Container {...props} data-testid={testID}>
      {children}
    </Styled.Container>
  );
};

export default Container;
