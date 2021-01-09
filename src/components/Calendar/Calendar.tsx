import React from 'react'
import { useSelector } from 'react-redux'
import { Container, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { CalendarState } from '../../store/modules/calendar/types'
import { RootState } from '../../store/modules/rootReducer'
import { CalendarTable, HeaderTableCell } from './styles'
import { Day } from '../Day'

const Calendar = (): JSX.Element => {
  const { calendar, weekDays, selectedDate } = useSelector<RootState, CalendarState>(state => state.calendar)

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
                {week.map((date, i) => <Day date={date} isWeekend={i === 0 || i === 6} key={`${date.date}-${date.month}`} />)}
              </TableRow>
            ))}
          </TableBody>
        </CalendarTable>
      </TableContainer>
      <span>{JSON.stringify(selectedDate)}</span>
    </Container>
  )
}

export { Calendar }
