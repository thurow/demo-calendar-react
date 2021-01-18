import React from 'react'
import moment from 'moment'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormLabel, TextField, Typography } from '@material-ui/core'
import { RootState } from '../../store/modules/rootReducer'
import { ReminderInput, RemindersState } from '../../store/modules/reminders/types'
import { addReminder, removeReminder, setModalIsOpen, updateReminder } from '../../store/modules/reminders/actions'
import { CalendarState } from '../../store/modules/calendar/types'
import { DatePicker, TimePicker } from '@material-ui/pickers'
import { ColorInput } from './styles'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { WeatherForecast } from '../WeatherForecast'

type FormInput = {
  date: MaterialUiPickersDate
  time: MaterialUiPickersDate
  title: string
  city: string
  color: string
}

export const ReminderModal = (): JSX.Element => {
  const [currentCity, setCurrentCity] = React.useState<string | null>(null)
  const { isReminderModalOpen, selectedReminder } = useSelector<RootState, RemindersState>(state => state.reminders)
  const { selectedDate } = useSelector<RootState, CalendarState>(state => state.calendar)
  const dispatch = useDispatch()
  const { handleSubmit, register, errors, control, reset, watch } = useForm<FormInput>({
    defaultValues: {
      city: selectedReminder?.city ?? '',
      color: selectedReminder?.color ?? '#5616C6',
      date: moment(selectedReminder?.date) ?? undefined,
      time: moment(selectedReminder?.time) ?? undefined,
      title: selectedReminder?.title ?? ''
    },
    shouldUnregister: false
  })

  const watchedTitle = watch('title')
  const watchedDate = watch('date')

  const handleCloseDialog = React.useCallback(() => {
    dispatch(setModalIsOpen(false))
  }, [dispatch])

  const submitForm: SubmitHandler<FormInput> = React.useCallback((data) => {
    if (!data.date || !data.time) return
    const body: ReminderInput = {
      ...data,
      date: {
        date: data.date.date(),
        month: data.date.month(),
        year: data.date.year()
      },
      time: data.time.format('LT'),
    }
    if (selectedReminder) {
      dispatch(updateReminder(selectedReminder.id, body))
    } else {
      dispatch(addReminder(body))
    }
  }, [selectedReminder, dispatch])

  // select a date in the form when there is a selected date
  React.useEffect(() => {
    if (selectedDate) {
      reset({
        date: moment(
          {
            year: selectedDate.year,
            month: selectedDate.month,
            day: selectedDate.date
          }
        )
      })
    }
  }, [selectedDate, reset])

  // reset form values when closes modal
  React.useEffect(() => {
    if (!isReminderModalOpen) {
      reset({
        city: undefined,
        color: '#5616C6',
        time: null,
        title: undefined,
      })
      setCurrentCity(null)
    }
  }, [isReminderModalOpen, reset])

  // populate form with selected reminder
  React.useEffect(() => {
    if (selectedReminder) {
      reset({
        city: selectedReminder.city,
        color: selectedReminder.color,
        time: moment(selectedReminder.time, 'LT'),
        date: moment(
          {
            year: selectedReminder.date.year,
            month: selectedReminder.date.month,
            day: selectedReminder.date.date
          }
        ),
        title: selectedReminder.title
      })
      setCurrentCity(selectedReminder.city)
    }
  }, [selectedReminder, reset])

  return (
    <Dialog
      open={isReminderModalOpen}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">
        {selectedReminder ? `Editing ${watchedTitle} reminder` : `Adding ${watchedTitle ?? ''} reminder`}
      </DialogTitle>
      <form onSubmit={handleSubmit(submitForm)}>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            name="title"
            id="title"
            label="Reminder name"
            error={!!errors.title}
            helperText={errors.title?.type === "maxLength" && 'Maximum number of characters is 30'}
            inputRef={register({ required: true, maxLength: 30 })}
          />
          <TextField
            name="city"
            id="city"
            label="City name"
            fullWidth
            margin="dense"
            error={!!errors.city}
            inputRef={register({ required: true })}
            onBlur={(e) => setCurrentCity(e.target.value)}
          />
          <Controller
            name="date"
            id="date"
            control={control}
            rules={{ required: true }}
            defaultValue={null}
            render={({ref, ...props}, { invalid }) => (
              <DatePicker
                label="Date"
                fullWidth
                format="LL"
                disablePast
                maxDate={moment('01/31/2021')}
                margin="dense"
                inputRef={ref}
                error={invalid}
                {...props}
              />
            )}
          />
          <Controller
            name="time"
            id="time"
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

          <Box
            display="flex"
            justifyContent={watchedDate && currentCity ? 'space-between': `flex-start`}
          >
            <Box
              display="flex"
              justifyContent="flex-start"
              flexDirection="column"
              mt={2}
            >
              <FormLabel htmlFor="color">Reminder color</FormLabel>
              <Controller
                name="color"
                id="color"
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
            {watchedDate && currentCity && <WeatherForecast city={currentCity} date={watchedDate} />}
          </Box>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'space-between' }}>
          <Box>
            {selectedReminder &&
              <Button
                title="Remove Reminder"
                color="secondary"
                onClick={() => dispatch(removeReminder(selectedReminder.id))}
              >
                Remove Reminder
              </Button>
            }
          </Box>
          <Box>
            <Button onClick={handleCloseDialog} title="Cancel">
              Cancel
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              title="Save"
              style={{ marginLeft: 8 }}
            >
              Save
            </Button>
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  )
}
