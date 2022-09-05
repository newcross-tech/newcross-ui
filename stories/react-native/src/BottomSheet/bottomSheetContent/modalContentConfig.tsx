import { View } from 'react-native';
import { DemoContentCalendar } from './DemoContentCalendar';
import { DemoContentLongText } from './DemoContentLongText';

export enum BottomSheetContentType {
  demoContentCalendar = 'demoContentCalendar',
  demoContentLongText = 'demoContentLongText',
  noContent = 'noContent',
}

const NoContent = () => <View />;

export const getBottomSheetContent = (contentType: BottomSheetContentType) =>
  ({
    demoContentCalendar: DemoContentCalendar,
    demoContentLongText: DemoContentLongText,
    noContent: NoContent,
  }[contentType]);
