import produce from "immer";
import { ADD_REMINDER, Reminder, ReminderActionTypes, RemindersState, UPDATE_REMINDER } from "./types";

const INITIAL_STATE: RemindersState = {
  reminders: new Map<string, Reminder>()
}

export default function reminders(state = INITIAL_STATE, action: ReminderActionTypes): RemindersState {
  return produce(state, (draftState) => {
    switch (action.type) {
      case ADD_REMINDER:
        console.log(action.payload)
      case UPDATE_REMINDER:
        console.log(action.payload)
      default:
    }
  })
}
