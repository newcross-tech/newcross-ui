import { fireEvent, render, screen } from '@testing-library/react';
import { Drawer, DrawerProps } from './Drawer';

describe('Drawer', () => {
  const defaultProps: DrawerProps = {
    onClose: jest.fn(),
    side: 'left',
    isOpen: true,
  };

  it('should render the Drawer when open is true', () => {
    render(
      <Drawer {...defaultProps}>
        <div>Test</div>
      </Drawer>
    );
    expect(screen.getByTestId('drawer')).toHaveStyle({
      opacity: 1,
      visibility: 'visible',
    });
  });

  it('should not render the Drawer when open is false', () => {
    render(
      <Drawer {...defaultProps} isOpen={false}>
        <div>Test</div>
      </Drawer>
    );
    expect(screen.queryByTestId('drawer')).toHaveStyle({
      opacity: 0,
      visibility: 'hidden',
    });
  });

  it('should invoke onClose function when drawer is open and close link is clicked', () => {
    const onClose = jest.fn();
    render(
      <Drawer isOpen={false} side="left" onClose={onClose}>
        <div>Test</div>
      </Drawer>
    );

    fireEvent.click(screen.getByTestId('drawer-close-icon'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
