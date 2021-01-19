import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, IconButton, TableBody, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@material-ui/core'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { CalendarState } from '../../store/modules/calendar/types'
import { RootState } from '../../store/modules/rootReducer'
import { CalendarHeader, CalendarTable, HeaderTableCell } from './styles'
import { Day } from '../Day'
import { setNextMonthCalendar, setPreviousMonthCalendar } from '../../store/modules/calendar/actions'

const Calendar = (): JSX.Element => {
  const { calendar, weekDays, months, selectedMonth, selectedYear } = useSelector<RootState, CalendarState>(state => state.calendar)
  const dispatch = useDispatch()

  return (
    <Container maxWidth="lg" component="section">
      <CalendarHeader
        variant="outlined"
        component="header"
        square
      >
        <Tooltip
          title="Previous month"
        >
          <IconButton color="primary" onClick={() => dispatch(setPreviousMonthCalendar())}>
            <ArrowBackIosRoundedIcon />
          </IconButton>
        </Tooltip>
        <Typography variant="h5" component="h2">{months[selectedMonth]} / {selectedYear}</Typography>
        <Tooltip
          title="Next month"
        >
          <IconButton color="primary" onClick={() => dispatch(setNextMonthCalendar())}>
            <ArrowForwardIosRoundedIcon />
          </IconButton>
        </Tooltip>
      </CalendarHeader>
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
