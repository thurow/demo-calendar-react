import React from 'react'
import moment from 'moment'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { DateObj } from 'dates-generator'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormLabel, InputLabel, TextField, Typography } from '@material-ui/core'
import { RootState } from '../../store/modules/rootReducer'
import { ReminderInput, RemindersState } from '../../store/modules/reminders/types'
import { addReminder, setModalIsOpen, updateReminder } from '../../store/modules/reminders/actions'
import { CalendarState } from '../../store/modules/calendar/types'
import { TimePicker } from '@material-ui/pickers'
import { ColorInput } from './styles'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

type FormInput = {
  date: DateObj
  time: MaterialUiPickersDate
  title: string
  city: string
  color: string
}

export const ReminderModal = (): JSX.Element => {
  const { isReminderModalOpen, selectedReminder } = useSelector<RootState, RemindersState>(state => state.reminders)
  const { selectedDate } = useSelector<RootState, CalendarState>(state => state.calendar)
  const dispatch = useDispatch()
  const { handleSubmit, register, errors, control, getValues } = useForm<FormInput>({
    defaultValues: {
      city: selectedReminder?.city ?? '',
      color: selectedReminder?.color ?? '#5616C6',
      date: selectedReminder?.date ?? undefined,
      time: selectedReminder?.time ?? undefined,
      title: selectedReminder?.title ?? ''
    },
    shouldUnregister: false
  })

  const handleCloseDialog = React.useCallback(() => {
    dispatch(setModalIsOpen(false))
  }, [dispatch])

  const selectedDateString = React.useMemo(() => {
    if (!selectedDate) return ''
    return moment(
      {
        year: selectedDate.year,
        month: selectedDate.month,
        day: selectedDate.date
      }
    ).format('dddd, MMMM Do of YYYY')
  }, [selectedDate])

  const submitForm: SubmitHandler<FormInput> = React.useCallback((data) => {
    if (selectedReminder) {
      const body: ReminderInput = {
        ...data,
        time: data.time?.format('LT') ?? '',
      }
      dispatch(updateReminder(selectedReminder.id, body))
    } else {
      const body: ReminderInput = {
        ...data,
        time: data.time?.format('LT') ?? '',
        date: selectedDate as DateObj
      }
      dispatch(addReminder(body))
    }
  }, [selectedReminder, dispatch, selectedDate])

  return (
    <Dialog
      open={isReminderModalOpen}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Reminder Dialog</DialogTitle>
      <form onSubmit={handleSubmit(submitForm)}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" variant="body1">
            Date selected: <strong>{selectedDateString}</strong>
          </DialogContentText>
          <TextField
            fullWidth
            margin="dense"
            name="title"
            label="Reminder name"
            error={!!errors.title}
            helperText={errors.title?.type === "maxLength" && 'Maximum number of characters is 30'}
            inputRef={register({ required: true, maxLength: 30 })}
          />
          <Controller
            name="time"
            control={control}
            rules={{ required: true }}
            defaultValue={null}
            render={({ ref, ...props}, { invalid }) => (
              <TimePicker
                clearable
                label="Time"
                fullWidth
                margin="dense"
                inputRef={ref}
                error={invalid}
                {...props}
              />
            )}
          />
          <TextField
            name="city"
            label="City name"
            fullWidth
            margin="dense"
            error={!!errors.city}
            inputRef={register({ required: true })}
          />

          <Box
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
            mt={2}
          >
            <FormLabel htmlFor="color">Reminder color</FormLabel>
            <Controller
              name="color"
              control={control}
              rules={{ required: true }}
              defaultValue="#5616C6"
              render={(props) => (
                <Box display="flex" alignItems="center" mt={1}>
                  <ColorInput type="color" {...props} />
                  <Typography variant="body1">{props.value}</Typography>
                </Box>
              )}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} title="Cancel">
            Cancel
          </Button>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            title="Save"
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
