import React from 'react';
import { Meta, Story } from '@storybook/react';
import ToggleButton, { ToggleButtonProps } from '../../components/ToggleButton';
import Container from '../../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/pro-regular-svg-icons/faFilter';
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
    <Container display="block">
      <ToggleButton
        selected={false}
        rightIcon={<FontAwesomeIcon icon={faCalendarDays} />}
      >
        Apr
      </ToggleButton>
      <Container m="SpacingBase4" />
      <ToggleButton
        selected={true}
        rightIcon={<FontAwesomeIcon icon={faCalendarDays} />}
      >
        Apr
      </ToggleButton>
      <Container m="SpacingBase4" />
      <ToggleButton selected={false}>Fav (3)</ToggleButton>
      <Container m="SpacingBase4" />
      <ToggleButton selected={true}>Fav (3)</ToggleButton>

      <Container m="SpacingBase4" />
      <ToggleButton
        selected={false}
        leftIcon={<FontAwesomeIcon icon={faFilter} />}
        fullWidth
      >
        Filter By
      </ToggleButton>
      <Container m="SpacingBase4" />
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
      <Container display={'block'}>
        <ToggleButton
          selected={false}
          leftIcon={<FontAwesomeIcon icon={faFilter} />}
        >
          Filter By
        </ToggleButton>
        <Container m="SpacingBase4" />
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
