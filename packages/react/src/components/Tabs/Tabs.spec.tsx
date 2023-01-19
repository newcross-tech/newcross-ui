import { faKitMedical } from '@fortawesome/pro-light-svg-icons/faKitMedical';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import Tabs, { TabsProps } from './Tabs';
import { axe } from '../../utils/test/axeConfig';
import { executeKeyPress } from '../../utils/test/executeKeyPress';
const renderComponent = (customProps: Partial<TabsProps>) => {
  const props = {
    tabs: ['Label A', 'Label B'],
    currentIndex: 0,
    onCurrentIndexChange: jest.fn(),
    ...customProps,
  };

  render(<Tabs {...props} />);
};

describe('Tabs Component', () => {
  const ui = {
    tabView: (index: number) => byTestId(`tab-view-${index}`),
    tabComp: (index: number) => byTestId(`tab-${index}`),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Act
    renderComponent({});

    // Assert
    expect(byText(/label a/i).get()).toBeInTheDocument();
    expect(byText(/label b/i).get()).toBeInTheDocument();
  });

  it('renders successfully with icons', () => {
    // Act
    renderComponent({
      tabs: [
        <FontAwesomeIcon icon={faUser} />,
        <FontAwesomeIcon icon={faKitMedical} />,
      ],
    });

    // Assert
    expect(ui.tabView(0).get()).toBeInTheDocument();
    expect(ui.tabView(1).get()).toBeInTheDocument();
  });

  it('triggers onClick successfully', () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    renderComponent({
      onCurrentIndexChange: onClick,
      tabs: ['Label A', 'Label B', 'Label C', 'Label D'],
    });

    fireEvent.click(ui.tabComp(3).get());

    // Assert
    expect(onClick).toBeCalled();
    expect(onClick).toHaveBeenCalledWith(3);
  });

  it('does not trigger onClick when disabled prop is passed', () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    renderComponent({ onCurrentIndexChange: onClick, disabled: true });
    fireEvent.click(ui.tabComp(1).get());

    // Assert
    expect(onClick).not.toBeCalled();
  });

  it('selects tab when pressing Spacebar', () => {
    // Arrange
    const onClick = jest.fn();
    // Act
    renderComponent({ onCurrentIndexChange: onClick });

    executeKeyPress(ui.tabComp(1).get());
    // Assert
    expect(onClick).toHaveBeenCalledWith(1);
  });

  it('doesnt select tab when pressing Spacebar when disabled is passed', () => {
    // Arrange
    const onClick = jest.fn();
    const tabsWithIcons = [
      <FontAwesomeIcon icon={faUser} />,
      <FontAwesomeIcon icon={faKitMedical} />,
    ];
    // Act
    renderComponent({
      onCurrentIndexChange: onClick,
      tabs: tabsWithIcons,
      disabled: true,
    });

    executeKeyPress(ui.tabComp(1).get());
    // Assert
    expect(onClick).not.toHaveBeenCalled();
  });
});
