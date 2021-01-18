import moment, { Moment } from 'moment'
import { DateObj, DatesGenerator, datesGenerator, DatesGeneratorBody } from 'dates-generator'
import { Reminder } from '../store/modules/reminders/types'

export const date = (): Date => new Date()

export const currentDay = (): number => date().getDate()

export const isCurrentMonth = (month: number): boolean => month === date().getMonth()

export const getCalendar = (dtBody?: DatesGeneratorBody): DatesGenerator => {
  const currDate = new Date()
  const calendar = datesGenerator({
    month: dtBody?.month ?? currDate.getMonth(),
    year: dtBody?.year ?? currDate.getFullYear()
  })

  return calendar
}

export const filterByDate = (date: DateObj, reminderDate: DateObj): boolean =>
  reminderDate.date === date.date
  && reminderDate.month === date.month
  && reminderDate.year === date.year

export const sortByHour = (a: Reminder, b: Reminder): number =>
  new Date('1970/01/01 ' + a.time).getTime() - new Date('1970/01/01 ' + b.time).getTime()

export const isPastDay = (day: DateObj): boolean => moment({ day: day.date, month: day.month, year: day.year }).isBefore(moment(), 'day')

export const getDateFromWeatherForecastApi = (dt: number): Moment => moment(dt * 1000)
