import { DateObj, Dates, datesGenerator } from 'dates-generator'
import { Reminder } from '../store/modules/reminders/types'

const date = () => new Date()

export const currentDay = (): number => date().getDate()

export const isCurrentMonth = (month: number): boolean => month === date().getMonth()

export const getCalendar = (): Dates[] => {
  const currDate = new Date()
  const { dates } = datesGenerator({
    month: currDate.getMonth(),
    year: currDate.getFullYear()
  })

  return dates
}

export const filterByDate = (date: DateObj, reminderDate: DateObj): boolean =>
  reminderDate.date === date.date
  && reminderDate.month === date.month
  && reminderDate.year === date.year

export const sortByHour = (a: Reminder, b: Reminder): number =>
  new Date('1970/01/01 ' + a.time).getTime() - new Date('1970/01/01 ' + b.time).getTime()
