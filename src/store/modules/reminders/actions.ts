import { ADD_REMINDER, ReminderActionTypes, ReminderInput, SELECT_REMINDER, UPDATE_REMINDER } from "./types";

export function addReminder(data: ReminderInput): ReminderActionTypes {
  return {
    type: ADD_REMINDER,
    payload: data
  }
}

export function selectReminder(id: number): ReminderActionTypes {
  return {
    type: SELECT_REMINDER,
    payload: id
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
