// Libs
import styled from 'styled-components';

// Types
import type { TypographyProps } from './types';

export const Typography = styled.label<TypographyProps>`
  color: ${({ color = '#fff' }) => color};
  font-size: ${({ fontSize = '1rem' }) => fontSize};
  font-weight: ${({ fontWeight = '500' }) => fontWeight};
  font-family: ${({ fontFamily = 'Inter' }) => fontFamily};
  line-height: ${({ lineHeight = 'normal' }) => lineHeight};
`;
