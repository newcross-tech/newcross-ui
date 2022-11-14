import { ReactElement } from 'react';
import { Container } from './PillGroup.style';
import { PillProps } from '../Pill';

export type PillGroupProps = {
  /**
   * Used to display the group in either a row or a column.
   */
  direction?: 'row' | 'column';
  /**
   * The content of the component,
   */
  children?: Array<ReactElement<PillProps>>;
};

const PillGroup = ({ direction, children }: PillGroupProps) => {
  return (
    <Container direction={direction} data-testid="pill-group-container">
      {children}
    </Container>
  );
};

export default PillGroup;
