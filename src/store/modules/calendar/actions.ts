import { DateObj } from "dates-generator";
import { CalendarActionTypes, SET_SELECTED_DATE } from "./types";

export function setSelectedDate(date?: DateObj): CalendarActionTypes {
  return {
    type: SET_SELECTED_DATE,
    payload: date ?? null
  }
}
