import React from 'react'
import { DateObj } from 'dates-generator'
import { Box } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setSelectedDate } from '../../store/modules/calendar/actions'
import { DayCell, DayNumber } from './styles'
import { isCurrentMonth } from '../../utils'

type Props = {
  date: DateObj
  isWeekend: boolean
}

export const Day = ({ date, isWeekend }: Props): JSX.Element => {
  const dispatch = useDispatch()

  const handleSelectDate = React.useCallback(() => {
    dispatch(setSelectedDate(date))
  }, [dispatch, date])

  const isFromOtherMonth = React.useMemo(() => {
    return !isCurrentMonth(date.month)
  }, [date])

  return (
    <DayCell $isWeekendDay={isWeekend} key={`${date.date}-${date.month}`} onClick={handleSelectDate}>
      <Box
        display="flex"
        flexDirection="column"
      >
        <DayNumber
          $isWeekendDay={isWeekend}
          $isFromOtherMonth={isFromOtherMonth}
          variant="body2"
        >
          {date.date}
        </DayNumber>
      </Box>
    </DayCell>
  )
}
