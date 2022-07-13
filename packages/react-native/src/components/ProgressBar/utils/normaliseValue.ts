export const normaliseValue = (
  progress: number,
  minProgress: number,
  maxProgress: number
) => ((progress - minProgress) * 100) / (maxProgress - minProgress);
