import * as actions from './actions'
import * as types from './types'

describe('reminders actions', () => {
  test('should create an action to add a Reminder', () => {
    const REMINDER_INPUT: types.ReminderInput = {
      title: 'Test Add',
      city: 'Indaial',
      color: '#000',
      date: {
        date: 3,
        month: 4,
        year: 2021
      },
      time: '7:06 AM'
    }

    const EXPECTED_ACTION: types.ReminderActionTypes = {
      type: types.ADD_REMINDER,
      payload: REMINDER_INPUT
    }

    expect(actions.addReminder(REMINDER_INPUT)).toEqual(EXPECTED_ACTION)
  })
  test('should create an action to select a Reminder', () => {
    const ID_TO_SELECT = Math.random()

    const EXPECTED_ACTION: types.ReminderActionTypes = {
      type: types.SELECT_REMINDER,
      payload: ID_TO_SELECT
    }

    expect(actions.selectReminder(ID_TO_SELECT)).toEqual(EXPECTED_ACTION)
  })
  test('should create an action to update a Reminder', () => {
    const ID_TO_UPDATE = Math.random()
    const REMINDER_TO_UPDATE: types.ReminderInput = {
      title: 'Test Add',
        city: 'Indaial',
        color: '#000',
        date: {
          date: 3,
          month: 4,
          year: 2021
        },
        time: '7:06 AM'
    }

    const EXPECTED_ACTION: types.ReminderActionTypes = {
      type: types.UPDATE_REMINDER,
      payload: {
        id: ID_TO_UPDATE,
        reminder: REMINDER_TO_UPDATE
      }
    }

    expect(actions.updateReminder(ID_TO_UPDATE, REMINDER_TO_UPDATE)).toEqual(EXPECTED_ACTION)
  })
})
