import { DateObj } from "dates-generator"

export const ADD_REMINDER = "ADD_REMINDER"
export const SET_REMINDER_MODAL_OPEN = "SET_REMINDER_MODAL_OPEN"
export const SELECT_REMINDER = "SELECT_REMINDER"
export const UPDATE_REMINDER = "UPDATE_REMINDER"
// export const REMOVE_REMINDER = "REMOVE_REMINDER"
// export const REMOVE_ALL_REMINDERS = "REMOVE_ALL_REMINDER"

export interface Reminder {
  id: number
  date: DateObj
  time: string
  title: string
  city: string
  color: string
}

export type ReminderInput = Omit<Reminder, 'id'>

interface AddReminderAction {
  type: typeof ADD_REMINDER
  payload: ReminderInput
}

interface SetReminderModalOpenAction {
  type: typeof SET_REMINDER_MODAL_OPEN
  payload: boolean
}

interface SelectReminderAction {
  type: typeof SELECT_REMINDER
  payload: number
}

export interface UpdateReminderAction {
  type: typeof UPDATE_REMINDER
  payload: {
    id: number,
    reminder: ReminderInput
  }
}

export interface RemindersState {
  reminders: Reminder[]
  isReminderModalOpen: boolean
  selectedReminder: Reminder | null
}

export type ReminderActionTypes = AddReminderAction | SetReminderModalOpenAction | UpdateReminderAction | SelectReminderAction
