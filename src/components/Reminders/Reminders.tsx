import React from 'react'
import { DateObj } from 'dates-generator'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/modules/rootReducer'
import { RemindersState } from '../../store/modules/reminders/types'
import { Box } from '@material-ui/core'
import { ReminderChip } from './styles'
import { filterByDate, sortByHour } from '../../utils'
import { removeReminder, selectReminder } from '../../store/modules/reminders/actions'

type Props = {
  date: DateObj
}

export const Reminders = ({ date }: Props): JSX.Element => {
  const { reminders } = useSelector<RootState, RemindersState>(state => state.reminders)
  const dispatch = useDispatch()

  const remindersFromDate = React.useMemo(() => {
    return reminders
      .filter(x => filterByDate(date, x.date))
      .sort(sortByHour)
  }, [date, reminders])

  const handleEditReminder = React.useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
    e.stopPropagation()
    e.currentTarget.blur()
    dispatch(selectReminder(id))
  }, [dispatch])

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="80px"
      overflow="scroll"
      paddingTop={1}
      paddingBottom={1}
    >
      {remindersFromDate.map(reminder =>
        <ReminderChip
          $bgColor={reminder.color}
          key={reminder.id}
          label={reminder.title}
          size="small"
          onClick={(e) => handleEditReminder(e, reminder.id)}
          onDelete={() => dispatch(removeReminder(reminder.id))}
        />
      )}
    </Box>
  )
}
