import calendar, { INITIAL_STATE as CALENDAR_INITIAL_STATE } from './reducer'
import { CalendarActionTypes, SET_SELECTED_DATE } from './types'

describe('calendar reducer', () => {
  test('should return initial state', () => {
    expect(calendar(undefined, {} as CalendarActionTypes)).toBe(CALENDAR_INITIAL_STATE)
  })
  test('should select date', () => {
    const DATE_TO_SELECT = CALENDAR_INITIAL_STATE.calendar[0][1]

    const { selectedDate } = calendar(undefined, { type: SET_SELECTED_DATE, payload: DATE_TO_SELECT })

    expect(selectedDate).toEqual(DATE_TO_SELECT)
  })
})
