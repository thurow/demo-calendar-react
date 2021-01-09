import { DateObj, Dates } from "dates-generator";

export const SET_SELECTED_DATE = 'SET_SELECTED_DATE'

interface SetSelectedDateAction {
  type: typeof SET_SELECTED_DATE
  payload: DateObj | null
}

export interface CalendarState {
  weekDays: string[]
  calendar: Dates[]
  selectedDate: DateObj | null
}

export type CalendarActionTypes = SetSelectedDateAction
