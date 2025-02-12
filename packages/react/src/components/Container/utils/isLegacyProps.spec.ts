import { isLegacyProps } from './isLegacyProps';
import { ContainerProps } from '../Container';
import { HTMLAttributes } from 'react';

type ContainerTestProps = ContainerProps &
  Pick<HTMLAttributes<HTMLElement>, 'onClick' | 'onMouseDown' | 'onKeyDown'>;

const mockLegacyProps: ContainerTestProps = {
  m: 'SpacingBase16',
  p: 'SpacingBase24',
  gap: 'SpacingBase8',
};

const mockNewProps: ContainerTestProps = {
  m: 'sm',
  p: 'md',
  gap: 'lg',
  display: 'flex',
};

const mockDontCareProps: ContainerTestProps = {
  m: 'auto',
  p: 'auto',
  gap: 'inherit',
};

const mockEmptyProps: ContainerTestProps = {};

const mockWithEventHandlers: ContainerTestProps = {
  onClick: () => console.log('Clicked!'),
};

const mockWithNewPropsAndEventHandlers: ContainerTestProps = {
  m: 'md',
  p: 'lg',
  onMouseDown: () => console.log('Mouse Down!'),
};

describe('isLegacyProps', () => {
  it('should return true for legacy props', () => {
    expect(isLegacyProps(mockLegacyProps)).toBe(true);
  });

  it('should return false for new props', () => {
    expect(isLegacyProps(mockNewProps)).toBe(false);
  });

  it('should return true for props with "dont care" values', () => {
    expect(isLegacyProps(mockDontCareProps)).toBe(true);
  });

  it('should return true for empty props', () => {
    expect(isLegacyProps(mockEmptyProps)).toBe(true);
  });

  it('should return false if props include event handlers', () => {
    expect(isLegacyProps(mockWithEventHandlers)).toBe(false);
  });

  it('should return false if props include both new props and event handlers', () => {
    expect(isLegacyProps(mockWithNewPropsAndEventHandlers)).toBe(false);
  });
});
