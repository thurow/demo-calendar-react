import { ADD_REMINDER, ReminderActionTypes, ReminderInput, UPDATE_REMINDER } from "./types";

export function addReminder(data: ReminderInput): ReminderActionTypes {
  return {
    type: ADD_REMINDER,
    payload: data
  }
}

export function updateReminder(id: number, data: ReminderInput): ReminderActionTypes {
  return {
    type: UPDATE_REMINDER,
    payload: {
      id,
      reminder: data
    }
  }
}
