import { Dates, datesGenerator } from 'dates-generator'

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
