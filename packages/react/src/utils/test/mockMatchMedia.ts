export const mockMatchMedia = (matches: boolean) => {
  window.matchMedia = (query) => ({
    matches: matches,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  });
};
