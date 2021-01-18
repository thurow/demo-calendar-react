import calendar, { INITIAL_STATE as CALENDAR_INITIAL_STATE } from './reducer'
import { CalendarActionTypes, SET_NEXT_MONTH_CALENDAR, SET_PREVIOUS_MONTH_CALENDAR, SET_SELECTED_DATE } from './types'

describe('calendar reducer', () => {
  test('should return initial state', () => {
    expect(calendar(undefined, {} as CalendarActionTypes)).toBe(CALENDAR_INITIAL_STATE)
  })
  test('should select date', () => {
    const DATE_TO_SELECT = CALENDAR_INITIAL_STATE.calendar.dates[0][1]

    const { selectedDate } = calendar(undefined, { type: SET_SELECTED_DATE, payload: DATE_TO_SELECT })

    expect(selectedDate).toEqual(DATE_TO_SELECT)
  })
  test('should set next month to current', () => {
    const NEXT_MONTH = CALENDAR_INITIAL_STATE.selectedMonth + 1

    const { selectedMonth } = calendar(undefined, { type: SET_NEXT_MONTH_CALENDAR })

    expect(selectedMonth).toEqual(NEXT_MONTH)
  })
  test('should set previous month to current', () => {
    const PREVIOUS_MONTH = CALENDAR_INITIAL_STATE.selectedMonth > 0 ?
      CALENDAR_INITIAL_STATE.selectedMonth - 1 :
      11

    const { selectedMonth } = calendar(undefined, { type: SET_PREVIOUS_MONTH_CALENDAR })

    expect(selectedMonth).toEqual(PREVIOUS_MONTH)
  })
})
