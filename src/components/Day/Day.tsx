import React from 'react'
import { DateObj } from 'dates-generator'
import { Box } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setSelectedDate } from '../../store/modules/calendar/actions'
import { DayCell, DayNumber } from './styles'
import { isCurrentMonth, isPastDay } from '../../utils'
import { Reminders } from '../Reminders'

type Props = {
  date: DateObj
  isWeekend: boolean
}

export const Day = ({ date, isWeekend }: Props): JSX.Element => {
  const dispatch = useDispatch()

  const isFromOtherMonth = React.useMemo(() => {
    return !isCurrentMonth(date.month)
  }, [date])

  const pastDay = React.useMemo(() => {
    return isPastDay(date)
  }, [date])

  const handleSelectDate = React.useCallback(() => {
    let payload: DateObj | undefined = date

    if(isFromOtherMonth || pastDay) payload = undefined
    dispatch(setSelectedDate(payload))
  }, [dispatch, date, isFromOtherMonth, pastDay])

  return (
    <DayCell width="155px" $pastDay={pastDay} $isFromOtherMonth={isFromOtherMonth} $isWeekendDay={isWeekend} key={`${date.date}-${date.month}`} onClick={handleSelectDate}>
      <Box
        display="flex"
        flexDirection="column"
      >
        <DayNumber
          $isWeekendDay={isWeekend}
          $isFromOtherMonth={isFromOtherMonth}
          $pastDay={pastDay}
          variant="body2"
        >
          {date.date}
        </DayNumber>
        <Reminders date={date} />
      </Box>
    </DayCell>
  )
}
