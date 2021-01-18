import { DateObj } from "dates-generator";
import { CalendarActionTypes, SET_NEXT_MONTH_CALENDAR, SET_PREVIOUS_MONTH_CALENDAR, SET_SELECTED_DATE } from "./types";

export function setSelectedDate(date?: DateObj): CalendarActionTypes {
  return {
    type: SET_SELECTED_DATE,
    payload: date ?? null
  }
}

export function setNextMonthCalendar(): CalendarActionTypes {
  return {
    type: SET_NEXT_MONTH_CALENDAR
  }
}

export function setPreviousMonthCalendar(): CalendarActionTypes {
  return {
    type: SET_PREVIOUS_MONTH_CALENDAR
  }
}
