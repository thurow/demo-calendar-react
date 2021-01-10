import { DateObj } from 'dates-generator'
import { SET_SELECTED_DATE } from '../calendar/types'
import reminders, { INITIAL_STATE as REMINDER_INITIAL_STATE } from './reducer'
import { ADD_REMINDER, Reminder, ReminderActionTypes, ReminderInput, RemindersState, SELECT_REMINDER, UPDATE_REMINDER } from './types'

describe('reminders reducer', () => {
  test('should return initial state', () => {
    expect(reminders(undefined, {} as ReminderActionTypes)).toEqual(REMINDER_INITIAL_STATE)
  })
  test('should add new reminder', () => {
    const INPUT: ReminderActionTypes = {
      type: ADD_REMINDER,
      payload: {
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
    }

    const result = reminders(undefined, INPUT)

    expect(result.isReminderModalOpen).toBeFalsy()
    expect(result.selectedReminder).toBeNull()
    expect(result.reminders[0]).toEqual(
      expect.objectContaining(INPUT.payload)
    )
  })
  test('should open modal', () => {
    expect(reminders(
      undefined,
      { type: SET_SELECTED_DATE, payload: {} as DateObj }
    )).toEqual({...REMINDER_INITIAL_STATE, isReminderModalOpen: true})
  })
  test('should select reminder to edit and open modal', () => {
    const REMINDER_ID_TO_SELECT = Math.random()
    const REMINDER_SELECTED: Reminder = {
      id: REMINDER_ID_TO_SELECT,
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

    const INITIAL_STATE: RemindersState = {
      isReminderModalOpen: false,
      selectedReminder: null,
      reminders: [REMINDER_SELECTED]
    }

    const INPUT: ReminderActionTypes = {
      type: SELECT_REMINDER,
      payload: REMINDER_ID_TO_SELECT
    }

    const result = reminders(INITIAL_STATE, INPUT)

    expect(result.isReminderModalOpen).toBeTruthy()
    expect(result.selectedReminder).not.toBeNull()
    expect(result.selectedReminder).toBe(REMINDER_SELECTED)
  })
  test('should edit reminder', () => {
    const REMINDER_ID_TO_EDIT = Math.random()
    const REMINDER_INPUT_BODY: ReminderInput = {
      title: 'Test Add',
      city: 'Indaial',
      color: '#000',
      date: {
        date: 3,
        month: 4,
        year: 2021
      },
      time: '8:06 AM'
    }
    const REMINDER_TO_EDIT: Reminder = {
      id: REMINDER_ID_TO_EDIT,
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

    const INITIAL_STATE: RemindersState = {
      isReminderModalOpen: false,
      selectedReminder: null,
      reminders: [REMINDER_TO_EDIT]
    }

    const INPUT: ReminderActionTypes = {
      type: UPDATE_REMINDER,
      payload: {
        id: REMINDER_ID_TO_EDIT,
        reminder: REMINDER_INPUT_BODY
      }
    }

    const result = reminders(INITIAL_STATE, INPUT)

    expect(result.reminders[0]).not.toEqual(REMINDER_TO_EDIT)
    expect(result.reminders[0]).toEqual(
      expect.objectContaining(REMINDER_INPUT_BODY)
    )
  })
})
