import { DateObj } from "dates-generator"
import { SetSelectedDateAction } from "../calendar/types"

export const ADD_REMINDER = "ADD_REMINDER"
export const SELECT_REMINDER = "SELECT_REMINDER"
export const UPDATE_REMINDER = "UPDATE_REMINDER"
export const SET_MODAL_IS_OPEN = "SET_MODAL_IS_OPEN"
export const REMOVE_REMINDER = "REMOVE_REMINDER"
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

interface SetModalIsOpenAction {
  type: typeof SET_MODAL_IS_OPEN
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

export interface RemoveReminderAction {
  type: typeof REMOVE_REMINDER,
  payload: number
}

export interface RemindersState {
  reminders: Reminder[]
  isReminderModalOpen: boolean
  selectedReminder: Reminder | null
}

export type ReminderActionTypes = AddReminderAction | SetModalIsOpenAction | UpdateReminderAction | SelectReminderAction | SetSelectedDateAction | RemoveReminderAction
