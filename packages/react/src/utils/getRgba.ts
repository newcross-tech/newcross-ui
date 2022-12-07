/**
 *
 * @param rgbColor  string ex. rgb(10,20,30)
 * @param opacityNum number ex. 0.4
 * @returns  string ex  rgba(10,20,30,0.4)
 */
export const getRgba = (rgbColor: string, opacityNum: number) => {
  const colour = `${rgbColor}`;
  const rgbaColour = colour.replace(/rgb/i, 'rgba');
  return rgbaColour.replace(/\)/i, `,${opacityNum})`);
};
