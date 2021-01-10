import produce from "immer"
import { getCalendar } from "../../../utils"
import { CalendarActionTypes, CalendarState, SET_SELECTED_DATE } from "./types"

export const INITIAL_STATE: CalendarState = {
  weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  calendar: getCalendar(),
  selectedDate: null
}

export default function calendar (state = INITIAL_STATE, action: CalendarActionTypes): CalendarState {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_SELECTED_DATE:
        draft.selectedDate = action.payload
        break
      default:
    }
  })
}
