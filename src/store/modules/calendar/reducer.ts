import { getCalendar } from "../../../utils"
import { CalendarState } from "./types"

const INITIAL_STATE: CalendarState = {
  weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  calendar: getCalendar()
}

export default function calendar (state = INITIAL_STATE): CalendarState {
  return state
}
