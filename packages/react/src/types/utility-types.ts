export type RequiredProps<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;
export type OptionalProps<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

/**
 * Helper for writing `ValueFrom<typeof SomeConstant>` instead of `typeof SomeConstant[keyof typeof SomeConstant]`.
 * Also makes using anonymous types easier -> Instead of `SomeOtherType<{ a: number }>[keyof SomeOtherType<{ a: number }>]` you can write `ValueFrom<SomeOtherType<{ a: number }>>`.
 */
export type ValueFrom<T> = T[keyof T];
