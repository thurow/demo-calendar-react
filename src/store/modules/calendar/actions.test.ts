import { DateObj } from 'dates-generator'
import * as actions from './actions'
import * as types from './types'

describe('calendar actions', () => {
  test('should create an action to select a date', () => {
    const DATE_INPUT: DateObj = {
      date: 3,
      month: 4,
      year: 2021
    }

    const EXPECTED_ACTION: types.CalendarActionTypes = {
      type: types.SET_SELECTED_DATE,
      payload: DATE_INPUT
    }

    expect(actions.setSelectedDate(DATE_INPUT)).toEqual(EXPECTED_ACTION)
  })
})
