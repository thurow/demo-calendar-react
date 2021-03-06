import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { App } from '../src/App'
import { CalendarState } from '../src/store/modules/calendar/types'
import { RemindersState } from '../src/store/modules/reminders/types'
import { rootReducer, RootState } from '../src/store/modules/rootReducer'
import { date, getCalendar } from '../src/utils'

export interface AppBuilderProps {
  children?: React.ReactChild
  remindersState?: Partial<RemindersState>
  calendarState?: Partial<CalendarState>
}

const AppBuilder = ({ children = <App />, remindersState, calendarState }: AppBuilderProps): JSX.Element => {
  const INITIAL_STATE: RootState = {
    calendar: {
      calendar: getCalendar(),
      weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      selectedMonth: date().getMonth(),
      selectedYear: date().getFullYear(),
      selectedDate: null,
      ...calendarState
    },
    reminders: {
      isReminderModalOpen: false,
      reminders: [],
      selectedReminder: null,
      ...remindersState
    },
  }
  const store = createStore(rootReducer, INITIAL_STATE)

  return (
    <Provider
      store={store}
    >
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {children}
      </MuiPickersUtilsProvider>
    </Provider>
  )
}

export { AppBuilder }
