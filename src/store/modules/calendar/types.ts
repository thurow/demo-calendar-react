import { DateObj, DatesGenerator } from "dates-generator";

export const SET_SELECTED_DATE = 'SET_SELECTED_DATE'
export const SET_NEXT_MONTH_CALENDAR = 'SET_NEXT_MONTH_CALENDAR'
export const SET_PREVIOUS_MONTH_CALENDAR = 'SET_PREVIOUS_MONTH_CALENDAR'

export interface SetSelectedDateAction {
  type: typeof SET_SELECTED_DATE
  payload: DateObj | null
}

export interface SetNextMonthCalendar {
  type: typeof SET_NEXT_MONTH_CALENDAR,
}

export interface SetPreviousMonthCalendar {
  type: typeof SET_PREVIOUS_MONTH_CALENDAR,
}

export interface CalendarState {
  weekDays: string[]
  months: string[]
  selectedMonth: number
  selectedYear: number
  calendar: DatesGenerator
  selectedDate?: DateObj | null
}

export type CalendarActionTypes = SetSelectedDateAction | SetNextMonthCalendar | SetPreviousMonthCalendar
