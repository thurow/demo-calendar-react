import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, TableBody, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import { CalendarState } from '../../store/modules/calendar/types'
import { RootState } from '../../store/modules/rootReducer'
import { CalendarTable, HeaderTableCell } from './styles'
import { Day } from '../Day'
import { setNextMonthCalendar, setPreviousMonthCalendar } from '../../store/modules/calendar/actions'

const Calendar = (): JSX.Element => {
  const { calendar, weekDays, months, selectedMonth, selectedYear } = useSelector<RootState, CalendarState>(state => state.calendar)
  const dispatch = useDispatch()

  return (
    <Container maxWidth="lg" component="section">
      <Button onClick={() => dispatch(setPreviousMonthCalendar())}>Previous Month</Button>
      <Typography>{months[selectedMonth]} / {selectedYear}</Typography>
      <Button onClick={() => dispatch(setNextMonthCalendar())}>Next Month</Button>
      <TableContainer>
        <CalendarTable size="small">
          <TableHead>
            <TableRow>
              {weekDays.map(day =>
                <HeaderTableCell
                  key={day}
                  width="155px"
                >
                  {day}
                </HeaderTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {calendar.dates.map((week, idx) => (
              <TableRow key={`${idx}-week`}>
                {week.map((date, i) => <Day date={date} isWeekend={i === 0 || i === 6} key={`${date.date}-${date.month}`} />)}
              </TableRow>
            ))}
          </TableBody>
        </CalendarTable>
      </TableContainer>
    </Container>
  )
}

export { Calendar }
