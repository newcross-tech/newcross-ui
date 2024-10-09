import { useUpstreamState } from './useUpstreamState';
import { act, renderHook } from '@testing-library/react';

describe('useUpstreamState', function () {
  it('should return value as normal state', function () {
    const hook = renderHook(useUpstreamState, { initialProps: 1 });

    const result = hook.result.current;

    expect(result[0]).toEqual(1);
  });

  it('should change as normal state', async function () {
    const hook = renderHook(useUpstreamState, { initialProps: 1 });

    const result = hook.result.current;
    const setter = result[1];
    await act(() => setter(2));

    expect(hook.result.current[0]).toEqual(2);
  });

  it('should change if upstream changes', function () {
    const hook = renderHook(useUpstreamState, { initialProps: 1 });

    hook.rerender(4);

    expect(hook.result.current[0]).toEqual(4);
  });
});
