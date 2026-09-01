// Libs
import styled from 'styled-components';

// Types
import type { SeparatorProps } from './types';

export const Separator = styled.div<SeparatorProps>`
  min-width: 1px !important;
  height: 80px;
  background: ${({ color = '#d5dbea' }) => color};
`;
