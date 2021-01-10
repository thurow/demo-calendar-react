import produce from "immer"
import { SET_SELECTED_DATE } from "../calendar/types";
import { ADD_REMINDER, Reminder, ReminderActionTypes, UpdateReminderAction, RemindersState, SELECT_REMINDER, UPDATE_REMINDER } from "./types";

export const INITIAL_STATE: RemindersState = {
  reminders: [],
  isReminderModalOpen: false,
  selectedReminder: null
}

export default function reminders(state = INITIAL_STATE, action: ReminderActionTypes): RemindersState {
  return produce(state, (draftState) => {
    switch (action.type) {
      case ADD_REMINDER:
        const newReminder: Reminder = {
          id: Math.random(),
          ...action.payload
        }
        draftState.reminders.push(newReminder)
        draftState.isReminderModalOpen = false
        break
      case SET_SELECTED_DATE:
        draftState.selectedReminder = null
        draftState.isReminderModalOpen = true
        break
      case SELECT_REMINDER:
        draftState.selectedReminder = state.reminders.find(x => x.id === action.payload) ?? null
        draftState.isReminderModalOpen = true
        break
      case UPDATE_REMINDER:
        const updatedReminderIndex = draftState.reminders.findIndex(x => x.id === (action as UpdateReminderAction).payload.id)
        if (updatedReminderIndex === -1) break
        draftState.reminders[updatedReminderIndex] = {...draftState.reminders[updatedReminderIndex], ...(action as UpdateReminderAction).payload.reminder}
        draftState.isReminderModalOpen = false
        break
      default:
    }
  })
}
