/**
 *
 * @param color  string ex. rgb(r, g, b) or #rrggbb or #rgb
 * @param opacityNum number ex. 0.4
 * @returns  string ex  rgba(10,20,30,0.4)
 */

export const getRgba = (color: string, opacity: number) => {
  // Validate RGB format
  const rgbRegex = /^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/;
  if (rgbRegex.test(color)) {
    const rgbaColor = color
      .replace(/rgb/i, 'rgba')
      .replace(')', `, ${opacity})`);
    return rgbaColor;
  }

  // Validate Hex format
  const hexRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
  if (hexRegex.test(color)) {
    const hex = color.slice(1);
    const fullHex =
      hex.length === 3
        ? hex
            .split('')
            .map((char) => char + char)
            .join('')
        : hex;
    const r = parseInt(fullHex.slice(0, 2), 16);
    const g = parseInt(fullHex.slice(2, 4), 16);
    const b = parseInt(fullHex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
};
