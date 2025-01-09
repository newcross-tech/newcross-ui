export type RequiredProps<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;
export type OptionalProps<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
