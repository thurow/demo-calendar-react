import { combineReducers } from 'redux'
import calendar from './calendar/reducer'

export const rootReducer = combineReducers({
  calendar
})

export type RootState = ReturnType<typeof rootReducer>
