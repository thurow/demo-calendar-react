import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/modules/rootReducer'
import { RemindersState } from '../../store/modules/reminders/types'
import { setModalIsOpen } from '../../store/modules/reminders/actions'

export const ReminderModal = (): JSX.Element => {
  const { isReminderModalOpen, selectedReminder } = useSelector<RootState, RemindersState>(state => state.reminders)
  const dispatch = useDispatch()

  const handleCloseDialog = React.useCallback(() => {
    dispatch(setModalIsOpen(false))
  }, [dispatch])

  return (
    <Dialog
      open={isReminderModalOpen}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Reminder Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Reminder Dialog
            <span>{JSON.stringify(selectedReminder)}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} title="Cancel">
            Cancel
          </Button>
          <Button
            onClick={handleCloseDialog}
            color="primary"
            variant="contained"
            title="Save"
          >
            Save
          </Button>
        </DialogActions>
    </Dialog>
  )
}
