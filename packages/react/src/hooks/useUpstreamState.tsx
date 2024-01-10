import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useUpstreamState<TState>(
  upstreamState: TState
): [TState, Dispatch<SetStateAction<TState>>] {
  const [state, setState] = useState(upstreamState);

  useEffect(() => {
    setState(upstreamState);
  }, [upstreamState]);

  return [state, setState];
}
