import { Meta, Story } from '@storybook/react';
import {
  ToggleButton,
  ToggleButtonProps,
  ToggleButtonColors,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBarsFilter,
  faHeart,
  faCalendarDays,
} from '@fortawesome/pro-solid-svg-icons';
import useState from 'storybook-addon-state';

export default {
  title: 'ReactNative/Components/ToggleButton',
  component: ToggleButton,
} as Meta;

export const Variants = () => {
  return (
    <Container>
      <ToggleButton
        selected={false}
        icon={<FontAwesomeIcon icon={faCalendarDays} />}
      >
        Apr
      </ToggleButton>
      <Spacing />
      <ToggleButton
        selected={true}
        icon={<FontAwesomeIcon icon={faCalendarDays} />}
      >
        Apr
      </ToggleButton>
      <Spacing />
      <ToggleButton selected={false}>Fav (3)</ToggleButton>
      <Spacing />
      <ToggleButton selected={true}>Fav (3)</ToggleButton>
      <Spacing />
      <ToggleButton
        selected={false}
        color={ToggleButtonColors.secondary}
        icon={<FontAwesomeIcon icon={faHeart} />}
      >
        Day
      </ToggleButton>
      <Spacing />
      <ToggleButton
        selected={true}
        color={ToggleButtonColors.secondary}
        icon={<FontAwesomeIcon icon={faHeart} />}
      >
        Day
      </ToggleButton>
      <Spacing />
      <ToggleButton
        selected={false}
        icon={<FontAwesomeIcon icon={faBarsFilter} />}
        fullWidth
      >
        Sort
      </ToggleButton>
      <Spacing />
      <ToggleButton
        selected={true}
        icon={<FontAwesomeIcon icon={faHeart} />}
        fullWidth
      >
        Sort
      </ToggleButton>
      <Spacing />
      <ToggleButton
        selected={false}
        fullWidth
        color={ToggleButtonColors.secondary}
      >
        Day
      </ToggleButton>
      <Spacing />
      <ToggleButton
        selected={true}
        fullWidth
        color={ToggleButtonColors.secondary}
      >
        Day
      </ToggleButton>
    </Container>
  );
};

const Template: Story<ToggleButtonProps> = (props) => {
  const [primarySelected, setPrimarySelected] = useState(
    'primarySelected',
    false
  );
  return (
    <Container>
      <ToggleButton
        {...props}
        selected={primarySelected}
        onPress={() => setPrimarySelected(!primarySelected)}
      />
    </Container>
  );
};

export const Interactive = Template.bind({});

Interactive.args = {
  children: 'Sort',
};
