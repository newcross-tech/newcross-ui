import {
  bottomSheetReducer,
  BottomSheetActionType,
  initialState,
  BottomSheetContext,
  getBottomSheetContent,
} from '@newcross-stories/react-native/src/BottomSheet';
import * as tokens from '@newcross-ui/design-tokens';
import { BottomSheet } from '@newcross-ui/react-native';
import * as Native from '@newcross-ui/react-native';
import * as Web from '@newcross-ui/react';
import { useReducer } from 'react';

const { ColorBaseWhite100, ColorBaseGrey300 } = tokens.web.healthforce;

const ComponentTypes = {
  ReactNative: 'ReactNative',
  React: 'React',
};

export const globalTypes = {
  brands: {
    name: 'Brands',
    description: 'Pick your brand',
    defaultValue: Web.Brand.healthforce,
    toolbar: {
      icon: 'globe',
      items: [
        { value: Web.Brand.healthforce, title: 'Health Force' },
        { value: Web.Brand.homeclinic, title: 'Home Clinic' },
        { value: Web.Brand.yourcare, title: 'Your Care' },
        { value: Web.Brand.yourlife, title: 'Your Life' },
      ],
      showName: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'figma',
    values: [
      {
        name: 'white',
        value: ColorBaseWhite100,
      },
      {
        name: 'figma',
        value: ColorBaseGrey300,
      },
    ],
  },
  options: { showPanel: true, panelPosition: 'bottom' },
};

const withThemeProvider = (Story, context) => {
  const brand = context.globals.brands;
  const [componentType] = context.title ? context.title.split('/') : [];
  const [state, dispatch] = useReducer(bottomSheetReducer, initialState);
  const BottomSheetContent = getBottomSheetContent(state.contentType);

  const providerState = { state, dispatch };

  const closeBottomSheet = () =>
    dispatch({
      type: BottomSheetActionType.closeBottomSheet,
    });

  const ThemeProviders = {
    [ComponentTypes.ReactNative]: (
      <Native.ThemeProvider brand={brand}>
        <BottomSheetContext.Provider value={providerState}>
          <BottomSheet isOpen={state.isOpen} onBackdropPress={closeBottomSheet}>
            <BottomSheetContent
              onClose={closeBottomSheet}
              data={state.contentData}
            />
          </BottomSheet>
          <Story {...context} />
        </BottomSheetContext.Provider>
      </Native.ThemeProvider>
    ),
    [ComponentTypes.React]: (
      <Web.ThemeProvider brand={brand}>
        <Story {...context} />
      </Web.ThemeProvider>
    ),
  };

  return ThemeProviders[componentType];
};

export const decorators = [withThemeProvider];
