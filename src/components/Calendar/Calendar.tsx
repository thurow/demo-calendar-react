import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateObj } from 'dates-generator'
import { Box, Container, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { CalendarState } from '../../store/modules/calendar/types'
import { RootState } from '../../store/modules/rootReducer'
import { setSelectedDate } from '../../store/modules/calendar/actions'
import { CalendarTable, HeaderTableCell } from './styles'

const Calendar = (): JSX.Element => {
  const { calendar, weekDays, selectedDate } = useSelector<RootState, CalendarState>(state => state.calendar)
  const dispatch = useDispatch()

  const handleSelectDate = React.useCallback((date: DateObj) => {
    dispatch(setSelectedDate(date))
  }, [dispatch])

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
                  <TableCell key={`${date.date}-${date.month}`} onClick={() => handleSelectDate(date)}>
                    {date.date}
                  </TableCell>
                ))}
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
