import styled, { CSSProperties } from 'styled-components'

type IGrid = Partial<{
  rows: CSSProperties['gridTemplateRows']
  columns: CSSProperties['gridTemplateColumns']
  border: CSSProperties['border']
  width: CSSProperties['width']
  padding: CSSProperties['padding']
  gap: CSSProperties['gap']
  rowGap: CSSProperties['rowGap']
  columnGap: CSSProperties['columnGap']
  minHeight: CSSProperties['minHeight']
  templateAreas: string[]
}>

type IGridItem = Partial<{
  area: CSSProperties['gridArea']
  width: CSSProperties['width']
  height: CSSProperties['height']
  border: CSSProperties['border']
  overflow: CSSProperties['overflow']
}>

const GridItem = styled.div<IGridItem>`
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  ${({ area }) => (area ? `grid-area: ${area}` : null)};
  ${({ overflow }) => (overflow ? `overflow: ${overflow}` : null)};
`

const GridComponent = styled.div<IGrid>`
  display: grid;
  ${({ rows }) => (rows ? `grid-template-rows: ${rows}` : null)};
  ${({ columns }) => (columns ? `grid-template-columns: ${columns}` : null)};
  ${({ rowGap }) => (rowGap ? `row-gap: ${rowGap}` : null)};
  ${({ columnGap }) => (columnGap ? `column-gap: ${columnGap}` : null)};
  ${({ gap }) => (gap ? `gap: ${gap}` : null)};
  ${({ minHeight }) => (minHeight ? `min-height: ${minHeight}` : null)};
  ${({ templateAreas }) => {
    if (!templateAreas) return null
    let areas = ``
    templateAreas.forEach((row) => {
      areas += `"${row}"\n`
    })
    return `grid-template-areas: ${areas}`
  }};
  border: ${({ border }) => (border ? border : 'none')};
  width: ${({ width }) => (width ? width : 'auto')};
  padding: ${({ padding }) => (padding ? padding : '0')};
`

const Grid = Object.assign(GridComponent, { Item: GridItem })

export { Grid }
