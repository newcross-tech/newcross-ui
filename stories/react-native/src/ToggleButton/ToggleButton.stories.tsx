import { Meta, Story } from '@storybook/react';
import { ToggleButton, ToggleButtonProps } from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter } from '@fortawesome/pro-regular-svg-icons/faFilter';
import { faCalendarDays } from '@fortawesome/pro-solid-svg-icons/faCalendarDays';
import useState from 'storybook-addon-state';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './ToggleButtonInfo';
import { isWebPlatform } from '../utils';

export default {
  title: 'ReactNative/Components/ToggleButton',
  component: ToggleButton,
} as Meta;

export const Variants = () => {
  return (
    <Container>
      <ToggleButton
        selected={false}
        rightIcon={<FontAwesomeIcon icon={faCalendarDays} />}
      >
        Apr
      </ToggleButton>
      <Spacing />
      <ToggleButton
        selected={true}
        rightIcon={<FontAwesomeIcon icon={faCalendarDays} />}
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
        leftIcon={<FontAwesomeIcon icon={faFilter} />}
        fullWidth
      >
        Filter By
      </ToggleButton>
      <Spacing />
      <ToggleButton
        selected={true}
        leftIcon={<FontAwesomeIcon icon={faFilter} />}
        fullWidth
      >
        Filter By
      </ToggleButton>
    </Container>
  );
};

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container
        hasPadding={false}
        containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
      >
        <ToggleButton
          selected={false}
          leftIcon={<FontAwesomeIcon icon={faFilter} />}
        >
          Filter By
        </ToggleButton>
        <Spacing />
        <ToggleButton
          selected={true}
          leftIcon={<FontAwesomeIcon icon={faFilter} />}
        >
          Filter By
        </ToggleButton>
      </Container>
    </InfoTemplate>
  );
};

const Template: Story<ToggleButtonProps> = (props) => {
  const [selected, setSelected] = useState('toggleButton', false);

  return (
    <Container>
      <ToggleButton
        {...props}
        selected={selected || props.selected}
        leftIcon={<FontAwesomeIcon icon={faFilter} />}
        onPress={() => setSelected(!selected)}
      />
    </Container>
  );
};

export const Interactive = Template.bind({});

Interactive.args = {
  children: 'Filter By',
};
