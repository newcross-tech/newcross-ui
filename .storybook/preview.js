import { useReducer } from 'react';
import * as Web from '@newcross-ui/react';
import {
  bottomSheetReducer,
  BottomSheetActionType,
  initialState,
  BottomSheetContext,
  getBottomSheetContent,
} from '@newcross-stories/react-native/src/BottomSheet';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as tokens from '@newcross-ui/design-tokens';
import { BottomSheet } from '@newcross-ui/react-native';
import * as Native from '@newcross-ui/react-native';
import { ToastProvider } from '../packages/react/src/context/toast/ToastProvider.tsx';

const { ColorNeutralWhite, ColorNeutralGrey300 } = tokens.web.healthforce;

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
        value: ColorNeutralWhite,
      },
      {
        name: 'figma',
        value: ColorNeutralGrey300,
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

  const isBottomSheetStory =
    context.title === 'ReactNative/Components/BottomSheet';

  const ThemeProviders = {
    [ComponentTypes.ReactNative]: (
      <Native.ThemeProvider brand={brand}>
        <SafeAreaProvider
          style={{
            height: isBottomSheetStory ? '100vh' : undefined,
          }}
        >
          <BottomSheetContext.Provider value={providerState}>
            {isBottomSheetStory && (
              <BottomSheet isOpen={state.isOpen} onClose={closeBottomSheet}>
                <BottomSheetContent
                  onClose={closeBottomSheet}
                  data={state.contentData}
                />
              </BottomSheet>
            )}
            <Story {...context} />
          </BottomSheetContext.Provider>
        </SafeAreaProvider>
      </Native.ThemeProvider>
    ),
    [ComponentTypes.React]: (
      <Web.ThemeProvider brand={brand}>
        <ToastProvider>
          <Story {...context} />
        </ToastProvider>
      </Web.ThemeProvider>
    ),
  };

  return ThemeProviders[componentType];
};

export const decorators = [withThemeProvider];
