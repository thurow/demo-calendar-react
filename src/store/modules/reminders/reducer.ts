import produce from "immer"
import moment from 'moment'
import { SET_SELECTED_DATE } from "../calendar/types";
import {
  ADD_REMINDER, Reminder, ReminderActionTypes, UpdateReminderAction,
  RemindersState, SELECT_REMINDER, UPDATE_REMINDER, SET_MODAL_IS_OPEN,
  REMOVE_REMINDER, REMOVE_ALL_REMINDERS
} from "./types";

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
      case SET_MODAL_IS_OPEN:
        draftState.isReminderModalOpen = action.payload
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
      case REMOVE_REMINDER:
        const reminderToRemoveIndex = state.reminders.findIndex(x => x.id === action.payload)
        if (reminderToRemoveIndex === -1) break
        draftState.reminders.splice(reminderToRemoveIndex, 1)
        draftState.selectedReminder = null
        draftState.isReminderModalOpen = false
        break
      case REMOVE_ALL_REMINDERS:
        draftState.reminders = state.reminders.filter(x =>
          !moment({
            day: x.date.date,
            month: x.date.month,
            year: x.date.year
          }).isSame(action.payload, 'day'))
        break
      default:
    }
  })
}
