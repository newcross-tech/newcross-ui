import React from 'react';
import { render, screen } from '@testing-library/react-native';
import FloatingActionButtonGroup from './FloatingActionButtonGroup';
import { faCalendarDays } from '@fortawesome/pro-light-svg-icons/faCalendarDays';
import FloatingActionButton from '../FloatingActionButton';

describe('FloatingActionButtonGroup Component', () => {
  it('renders successfully', () => {
    // Act
    const { getByText } = render(
      <FloatingActionButtonGroup>
        <FloatingActionButton text={'Sort'} />
        <FloatingActionButton icon={faCalendarDays} />
        <FloatingActionButton text={'Filter'} />
      </FloatingActionButtonGroup>
    );

    // Assert
    expect(screen.getAllByTestId('icon')).toBeDefined();
    expect(screen.getAllByTestId('divider').length).toBe(2);
    expect(getByText('Sort')).toBeDefined();
    expect(getByText('Filter')).toBeDefined();
  });
});
