import React from 'react';
import { render } from '@testing-library/react-native';
import ExpandableCalendar from './ExpandableCalendar';
import { Text } from 'react-native';
import moment from 'moment';

describe('<ExpandableCalendar />', () => {
  const date = new Date('2023-07-21');
  const testDate = moment(date).format('YYYY-MM-DD');

  it('renders the ExpandableCalendar', () => {
    render(<ExpandableCalendar date={testDate} />);
  });

  it('renders loader when displayLoader prop is true', () => {
    const { getByTestId } = render(
      <ExpandableCalendar date={testDate} displayLoader />
    );
    expect(getByTestId('calendar-loader')).toBeDefined();
  });
  it('renders custom listComponent when passed', () => {
    const TestComponent = () => <Text testID="test-component">Test</Text>;
    const { getByTestId } = render(
      <ExpandableCalendar date={testDate} listComponent={<TestComponent />} />
    );
    expect(getByTestId('test-component')).toBeDefined();
  });
});
