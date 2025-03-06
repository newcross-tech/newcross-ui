export type RequiredProps<T, K extends keyof T> = DistributedOmit<T, K> &
  Required<DistributedPick<T, K>>;
export type OptionalProps<T, K extends keyof T> = DistributedOmit<T, K> &
  Partial<DistributedPick<T, K>>;

/**
 * Helper for writing `ValueFrom<typeof SomeConstant>` instead of `typeof SomeConstant[keyof typeof SomeConstant]`.
 * Also makes using anonymous types easier -> Instead of `SomeOtherType<{ a: number }>[keyof SomeOtherType<{ a: number }>]` you can write `ValueFrom<SomeOtherType<{ a: number }>>`.
 */
export type ValueFrom<T> = T[keyof T];

/**
 * @description
 * Omits keys from a type, distributing the operation over a union.
 *
 * TypeScript's `Omit` doesn't distribute over unions,
 * leading to the erasure of unique properties from union members when omitting keys.
 * This creates a type that only retains properties common to all union members,
 * making it impossible to access member-specific properties after the Omit.
 * Essentially, using `Omit` on a union type merges the types into a less specific one,
 * hindering type narrowing and property access based on discriminants.
 *
 * This type solves that.
 *
 * @link https://github.com/sindresorhus/type-fest/blob/bc49577/source/distributed-omit.d.ts
 */

export type DistributedOmit<
  ObjectType,
  KeyType extends KeysOfUnion<ObjectType>
> = ObjectType extends unknown ? Omit<ObjectType, KeyType> : never;

/**
 * @description
 * Pick keys from a type, distributing the operation over a union.
 *
 * TypeScript's `Pick` doesn't distribute over unions,
 * leading to the erasure of unique properties from union members when picking keys.
 * This creates a type that only retains properties common to all union members,
 * making it impossible to access member-specific properties after the Pick.
 * Essentially, using `Pick` on a union type merges the types into a less specific one,
 * hindering type narrowing and property access based on discriminants.
 *
 * This type solves that.
 *
 * @link https://github.com/sindresorhus/type-fest/blob/fa4099c/source/distributed-pick.d.ts
 */

export type DistributedPick<
  ObjectType,
  KeyType extends KeysOfUnion<ObjectType>
> = ObjectType extends unknown
  ? Pick<ObjectType, Extract<KeyType, keyof ObjectType>>
  : never;

/**
 * @description
 * Create a union of all keys from a given type, even those exclusive to specific union members.
 *
 * Unlike the native `keyof` keyword, which returns keys present in **all** union members,
 * this type returns keys from **any** member.
 *
 * @link https://github.com/sindresorhus/type-fest/blob/4789c7c/source/keys-of-union.d.ts
 */

export type KeysOfUnion<ObjectType> = keyof UnionToIntersection<
  ObjectType extends unknown ? Record<keyof ObjectType, never> : never
>;

/**
 * @description
 * Convert a union type to an intersection type using [distributive conditional types]
 *
 * @link https://github.com/sindresorhus/type-fest/blob/61f2ff9/source/union-to-intersection.d.ts
 */

export type UnionToIntersection<Union> = (
  Union extends unknown ? (distributedUnion: Union) => void : never
) extends (mergedIntersection: infer Intersection) => void
  ? Intersection & Union
  : never;
