import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders Newcross logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('Newcross Logo');
    expect(logo).toBeInTheDocument();
  });
});
