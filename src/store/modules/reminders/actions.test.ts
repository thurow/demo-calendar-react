import { DateObj } from 'dates-generator'
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
  test('should create an action to open Reminder modal', () => {
    const EXPECTED_ACTION: types.ReminderActionTypes = {
      type: types.SET_MODAL_IS_OPEN,
      payload: true
    }

    expect(actions.setModalIsOpen(true)).toEqual(EXPECTED_ACTION)
  })
  test('should create an action to remove a Reminder', () => {
    const EXPECTED_ACTION: types.ReminderActionTypes = {
      type: types.REMOVE_REMINDER,
      payload: 1
    }

    expect(actions.removeReminder(1)).toEqual(EXPECTED_ACTION)
  })
  test('should create an action to remove all Reminders', () => {
    const DATE_TO_DELETE_ALL_REMINDERS: DateObj = {
      date: 3,
      month: 4,
      year: 2021
    }
    const EXPECTED_ACTION: types.ReminderActionTypes = {
      type: types.REMOVE_ALL_REMINDERS,
      payload: DATE_TO_DELETE_ALL_REMINDERS
    }

    expect(actions.removeAllReminders(DATE_TO_DELETE_ALL_REMINDERS)).toEqual(EXPECTED_ACTION)
  })
})
