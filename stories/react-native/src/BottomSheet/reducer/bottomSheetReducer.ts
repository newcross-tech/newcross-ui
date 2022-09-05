import { BottomSheetContentType } from '../bottomSheetContent';
import React from 'react';

export enum BottomSheetActionType {
  openBottomSheet = 'openBottomSheet',
  closeBottomSheet = 'closeBottomSheet',
}

export type BottomSheetState = {
  isOpen: boolean;
  contentType: BottomSheetContentType;
  contentData: any;
};

export type BottomSheetAction = {
  type: BottomSheetActionType;
  payload?: {
    contentType: BottomSheetContentType;
    contentData: any;
  };
};

export type ContextValue = {
  state?: BottomSheetState;
  dispatch?: React.Dispatch<BottomSheetAction>;
};

export const initialState: BottomSheetState = {
  isOpen: false,
  contentType: BottomSheetContentType.noContent,
  contentData: {},
};

const bottomSheetReducer = (
  state: BottomSheetState = initialState,
  action: BottomSheetAction
) => {
  const { type, payload } = action;

  if (type === BottomSheetActionType.openBottomSheet && payload) {
    return {
      ...state,
      isOpen: true,
      contentType: payload.contentType,
      contentData: payload.contentData,
    };
  }

  if (type === BottomSheetActionType.closeBottomSheet) {
    return {
      ...state,
      ...initialState,
    };
  }

  return initialState;
};

export default bottomSheetReducer;
