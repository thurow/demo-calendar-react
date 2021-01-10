import { ADD_REMINDER, ReminderActionTypes, ReminderInput, SELECT_REMINDER, SET_MODAL_IS_OPEN, UPDATE_REMINDER } from "./types";

export function addReminder(data: ReminderInput): ReminderActionTypes {
  return {
    type: ADD_REMINDER,
    payload: data
  }
}

export function setModalIsOpen(isOpen: boolean): ReminderActionTypes {
  return {
    type: SET_MODAL_IS_OPEN,
    payload: isOpen
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
