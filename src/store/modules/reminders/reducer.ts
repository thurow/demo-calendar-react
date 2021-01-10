import produce from "immer";
import { ADD_REMINDER, ReminderActionTypes, RemindersState, SELECT_REMINDER, SET_REMINDER_MODAL_OPEN, UPDATE_REMINDER } from "./types";

const INITIAL_STATE: RemindersState = {
  reminders: [],
  isReminderModalOpen: false,
  selectedReminder: null
}

export default function reminders(state = INITIAL_STATE, action: ReminderActionTypes): RemindersState {
  return produce(state, (draftState) => {
    switch (action.type) {
      case ADD_REMINDER:
        console.log(action.payload)
        draftState.isReminderModalOpen = false
      case SET_REMINDER_MODAL_OPEN:
        draftState.selectedReminder = null
        draftState.isReminderModalOpen = !!action.payload
      case SELECT_REMINDER:
        draftState.selectedReminder = state.reminders.find(x => x.id === action.payload) ?? null
        draftState.isReminderModalOpen = true
      case UPDATE_REMINDER:
        console.log(action.payload)
        draftState.isReminderModalOpen = false
      default:
    }
  })
}
