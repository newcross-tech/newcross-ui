export type SnapPointPayload = {
  windowHeight: number;
  top: number;
  bottom: number;
  contentHeight: number;
  snapPoint: number | `${number}%`;
};
