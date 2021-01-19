import React from 'react'
import moment from 'moment'
import { DateObj } from 'dates-generator'
import { Box, Tooltip } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedDate } from '../../store/modules/calendar/actions'
import { DayCell, DayNumber, DeleteAllRemindersBtn } from './styles'
import { isPastDay } from '../../utils'
import { Reminders } from '../Reminders'
import { removeAllReminders } from '../../store/modules/reminders/actions';
import { RemindersState } from '../../store/modules/reminders/types';
import { RootState } from '../../store/modules/rootReducer';
import { CalendarState } from '../../store/modules/calendar/types';

type Props = {
  date: DateObj
  isWeekend: boolean
}

export const Day = ({ date, isWeekend }: Props): JSX.Element => {
  const dispatch = useDispatch()
  const { reminders } = useSelector<RootState, RemindersState>(state => state.reminders)
  const { selectedMonth } = useSelector<RootState, CalendarState>(state => state.calendar)

  const isFromOtherMonth = React.useMemo(() => {
    return date.month !== selectedMonth
  }, [date, selectedMonth])

  const pastDay = React.useMemo(() => {
    return isPastDay(date)
  }, [date])

  const handleSelectDate = React.useCallback(() => {
    let payload: DateObj | undefined = date

    if(isFromOtherMonth || pastDay) payload = undefined
    dispatch(setSelectedDate(payload))
  }, [dispatch, date, isFromOtherMonth, pastDay])

  const canDeleteAllReminders = React.useMemo(() => {
    return !pastDay && !isFromOtherMonth
      && reminders.filter(x =>
        moment({
          day: x.date.date,
          month: x.date.month,
          year: x.date.year
        }).isSame(date, 'day')).length > 0
  }, [date, pastDay, isFromOtherMonth, reminders])

  const handleRemoveAllRemindersFromDate = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    dispatch(removeAllReminders(date))
  }, [date, dispatch])

  return (
    <DayCell width="155px" $pastDay={pastDay} $isFromOtherMonth={isFromOtherMonth} $isWeekendDay={isWeekend} key={`${date.date}-${date.month}`} onClick={handleSelectDate}>
      <Box
        display="flex"
        flexDirection="column"
        position="relative"
        >
        <Tooltip
          title="Delete all reminders from this date"
          >
          <DeleteAllRemindersBtn
            aria-label="delete all reminders"
            size="small"
            color="secondary"
            onClick={handleRemoveAllRemindersFromDate}
            $canRemoveAllReminders={canDeleteAllReminders}
          >
            <DeleteForeverIcon fontSize="small" />
          </DeleteAllRemindersBtn>
        </Tooltip>
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
