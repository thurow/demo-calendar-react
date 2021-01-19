import { TableCell, Theme, Table, Paper } from "@material-ui/core"
import styled from "styled-components"

export const HeaderTableCell = styled(TableCell)`
  ${({ theme }: { theme: Theme}) => `
    background: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
  `}
  text-align: center;
`

export const CalendarTable = styled(Table)`
  ${({ theme }: { theme: Theme}) => `
    border: 1px solid ${theme.palette.divider};
  `}
  table-layout: fixed;
`

export const CalendarHeader = styled(Paper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  margin-top: 8px;
`
