import { css } from 'styled-components';

export const getElipsisStyles = (numberOfLines: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${numberOfLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
