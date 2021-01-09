import { Dates, datesGenerator } from 'dates-generator'

export const currentDay = (): number => new Date().getDate()

export const getCalendar = (): Dates[] => {
  const currDate = new Date()
  const { dates } = datesGenerator({
    month: currDate.getMonth(),
    year: currDate.getFullYear()
  })

  return dates
}
