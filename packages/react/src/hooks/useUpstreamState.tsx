import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/**
 * @description Just like the regular `useState` hook but it will update state if the upstream value changes
 */
export function useUpstreamState<TState>(
  upstreamState: TState
): [TState, Dispatch<SetStateAction<TState>>] {
  const [state, setState] = useState(upstreamState);

  useEffect(() => {
    setState(upstreamState);
  }, [upstreamState]);

  return [state, setState];
}
