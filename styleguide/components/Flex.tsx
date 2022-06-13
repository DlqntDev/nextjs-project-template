import styled, { CSSProperties } from 'styled-components'

type IFlex = Partial<{
  direction: CSSProperties['flexDirection']
  justifyContent: CSSProperties['justifyContent']
  gap: CSSProperties['gap']
  border: CSSProperties['border']
  width: CSSProperties['width']
  alignItems: CSSProperties['alignItems']
  padding: CSSProperties['padding']
  wrap: CSSProperties['flexWrap']
  cursor: CSSProperties['cursor']
  flex: CSSProperties['flex']
  margin: CSSProperties['margin']
  minHeight: CSSProperties['minHeight']
}>

export const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'flex-start'};
  gap: ${({ gap }) => (gap ? gap : 'normal')};
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems}` : null)};
  ${({ border }) => (border ? `border: ${border}` : null)};
  ${({ width }) => (width ? `width: ${width}` : null)};
  ${({ padding }) => (padding ? `padding: ${padding}` : null)};
  ${({ wrap }) => (wrap ? `flex-wrap: ${wrap}` : null)};
  ${({ cursor }) => (cursor ? `cursor: ${cursor}` : null)};
  ${({ flex }) => (flex ? `flex: ${flex}` : null)};
  ${({ margin }) => (margin ? `margin: ${margin}` : null)};
  ${({ minHeight }) => (minHeight ? `min-height: ${minHeight}` : null)};
`
