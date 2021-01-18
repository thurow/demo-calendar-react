import produce from "immer"
import { date, getCalendar } from "../../../utils"
import {
  CalendarActionTypes, CalendarState, SET_NEXT_MONTH_CALENDAR,
  SET_SELECTED_DATE, SET_PREVIOUS_MONTH_CALENDAR
} from "./types"

export const INITIAL_STATE: CalendarState = {
  weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  calendar: getCalendar(),
  selectedMonth: date().getMonth(),
  selectedYear: date().getFullYear(),
  selectedDate: null
}

export default function calendar (state = INITIAL_STATE, action: CalendarActionTypes): CalendarState {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_SELECTED_DATE:
        draft.selectedDate = action.payload
        break
      case SET_NEXT_MONTH_CALENDAR:
        draft.selectedMonth = state.calendar.nextMonth
        draft.selectedYear = state.calendar.nextYear
        draft.calendar = getCalendar({
          month: state.calendar.nextMonth,
          year: state.calendar.nextYear
        })
        break
      case SET_PREVIOUS_MONTH_CALENDAR:
        draft.selectedMonth = state.calendar.previousMonth
        draft.selectedYear = state.calendar.previousYear
        draft.calendar = getCalendar({
          month: state.calendar.previousMonth,
          year: state.calendar.previousYear
        })
        break
      default:
    }
  })
}
