import { TableCell, Theme, Table } from "@material-ui/core"
import styled from "styled-components"

export const HeaderTableCell = styled(TableCell)`
  ${({ theme }: { theme: Theme}) => `
    background: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
  `}
`

export const CalendarTable = styled(Table)`
  ${({ theme }: { theme: Theme}) => `
    border: 1px solid ${theme.palette.divider};
  `}
`