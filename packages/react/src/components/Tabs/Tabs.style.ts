import { animated } from '@react-spring/web';
import styled from 'styled-components';
import { getTabbedStateStyles } from '../../utils';
import Typography from '../Typography';
import { TabsPropsStrict } from './Tabs.types';
import Container from '../Container';
import { HTMLAttributes } from 'react';

export const getAnimatedStyles = (props: Pick<TabsPropsStrict, 'currentIndex' | 'tabs'>) => {
  return {
    from: {
      marginLeft: '0%',
    },
    to: {
      marginLeft: getActiveTabOffset(props),
    },
    config: {
      mass: 1,
      tension: 100,
      friction: 16,
    },
  };
};

const getActiveTabWidth = ({ tabs }: Pick<TabsPropsStrict, 'tabs'>) => `${100 / tabs.length}%`;
const getActiveTabOffset = ({ currentIndex, tabs }: Pick<TabsPropsStrict, 'currentIndex' | 'tabs'>) =>
  `${(100 / tabs.length) * currentIndex}%`;

export const TabsContainer = styled(Container)(({ theme }) => ({
  minWidth: 'fit-content',
  backgroundColor: theme.ElementsSurfaceDefault,
  borderRadius: theme.BorderBaseRadiusRounded,
}));

export const InnerContainer = styled(Container)<Pick<TabsPropsStrict, 'disabled'>>((props) => ({
  position: 'relative',
  flex: 1,
  cursor: !props.disabled ? 'pointer' : 'inherit',
  height: props.theme.BaselineSpacesSpace40,
}));

export const Text = styled(Typography)(() => ({
  ...getTabbedStateStyles(),
}));

export const Content = styled(Container)<Pick<TabsPropsStrict, 'disabled'> & HTMLAttributes<HTMLDivElement>>(
  (props) => ({
    color: props.disabled ? props.theme.ElementsTextDisabled : props.theme.ElementsTextDefaultDark,
    ...getTabbedStateStyles(),
  })
);

export const Tab = styled(Container)<{ isSelected: boolean; disabled: boolean }>(({ theme, isSelected, disabled }) => [
  {
    flex: 1,
    zIndex: 1,
    height: theme.BaselineSpacesSpace40,
    borderRadius: theme.BorderBaseRadiusRounded,
    transition: 'background-color 0.3s cubic-bezier(0, 0, 0, 1)',
  },
  !isSelected &&
    !disabled && {
      '&:hover': {
        backgroundColor: theme.ElementsSurfaceActionHover,
      },
    },
]);

export const ActiveTab = styled(animated(Container))<Pick<TabsPropsStrict, 'currentIndex' | 'tabs' | 'disabled'>>(
  (props) => ({
    position: 'absolute',
    alignContent: 'center',
    width: getActiveTabWidth(props),
    marginLeft: getActiveTabOffset(props),
    height: props.theme.BaselineSpacesSpace40,
    backgroundColor: props.disabled ? props.theme.ElementsSurfaceDisabled : props.theme.ElementsSurfaceActionDefault,
    borderRadius: props.theme.BorderBaseRadiusRounded,
  })
);
