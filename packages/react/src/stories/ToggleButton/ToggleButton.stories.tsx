import { Meta, Story } from '@storybook/react';
import ToggleButton, { ToggleButtonProps } from '../../components/ToggleButton';
import Container from '../Container';
import Spacing from '../Spacing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/pro-regular-svg-icons';
import { faCalendarDays } from '@fortawesome/pro-solid-svg-icons/faCalendarDays';
import useState from 'storybook-addon-state';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './ToggleButtonInfo';

export default {
  title: 'React/Components/ToggleButton',
  component: ToggleButton,
} as Meta;

export const Variants = () => {
  return (
    <Container direction="column" display="block">
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
      <Container hasPadding={false} direction={'column'} display={'block'}>
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
        onClick={() => setSelected(!selected)}
      />
    </Container>
  );
};

export const Interactive = Template.bind({});

Interactive.args = {
  children: 'Filter By',
};
