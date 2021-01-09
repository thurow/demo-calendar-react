import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme } from '@material-ui/core'
import { CalendarState } from '../../store/modules/calendar/types'
import { RootState } from '../../store/modules/rootReducer'

const HeaderTableCell = styled(TableCell)`
  ${({ theme }: { theme: Theme}) => `
    background: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
  `}
`

const CalendarTable = styled(Table)`
  ${({ theme }: { theme: Theme}) => `
    border: 1px solid ${theme.palette.divider};
  `}
`

const Calendar = (): JSX.Element => {
  const { calendar, weekDays } = useSelector<RootState, CalendarState>(state => state.calendar)

  return (
    <Container maxWidth="lg" component="section">
      <TableContainer>
        <CalendarTable size="small">
          <TableHead>
            <TableRow>
              {weekDays.map(day =>
                <HeaderTableCell
                  key={day}
                >
                  {day}
                </HeaderTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {calendar.map((week, idx) => (
              <TableRow key={`${idx}-week`}>
                {week.map(date => (
                  <TableCell key={`${date.date}-${date.month}`}>
                    {date.date}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </CalendarTable>
      </TableContainer>
    </Container>
  )
}

export default Calendar
