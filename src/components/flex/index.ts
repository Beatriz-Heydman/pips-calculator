// Libs
import styled from 'styled-components';

// Types
import type { FlexProps } from './types';

export const Flex = styled.div<FlexProps>`
  display: flex;
  gap: ${({ gap = '0' }) => gap};
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  align-items: ${({ alignItems = 'center' }) => alignItems};
  flex-wrap: ${({ flexWrap = 'nowrap' }) => flexWrap};
  flex-direction: ${({ direction = 'row' }) => direction};
`;
