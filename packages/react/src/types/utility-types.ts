import { DistributedOmit, DistributedPick } from 'type-fest';

export type RequiredProps<T, K extends keyof T> = DistributedOmit<T, K> &
  Required<DistributedPick<T, K>>;
export type OptionalProps<T, K extends keyof T> = DistributedOmit<T, K> &
  Partial<DistributedPick<T, K>>;

/**
 * Helper for writing `ValueFrom<typeof SomeConstant>` instead of `typeof SomeConstant[keyof typeof SomeConstant]`.
 * Also makes using anonymous types easier -> Instead of `SomeOtherType<{ a: number }>[keyof SomeOtherType<{ a: number }>]` you can write `ValueFrom<SomeOtherType<{ a: number }>>`.
 */
export type ValueFrom<T> = T[keyof T];
