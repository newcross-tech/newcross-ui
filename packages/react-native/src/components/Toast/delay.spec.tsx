import { delay } from './Toast';

jest.useFakeTimers();

describe('delay function', () => {
  it('calls onClose when setTimeout function has reached the duration value', () => {
    const onClose = jest.fn();
    const duration = 500;

    delay(onClose, duration);
    jest.advanceTimersByTime(duration);

    expect(onClose).toHaveBeenCalled();
  });
});
