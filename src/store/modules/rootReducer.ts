import { combineReducers } from 'redux'
import calendar from './calendar/reducer'
import reminders from './reminders/reducer'

export const rootReducer = combineReducers({
  calendar,
  reminders
})

export type RootState = ReturnType<typeof rootReducer>
