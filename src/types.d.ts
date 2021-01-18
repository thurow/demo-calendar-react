// Manually added because there is no @types/dates-generator
declare module 'dates-generator' {
  interface DatesGeneratorBody {
    month: number
    year: number
  }

  interface DateObj {
    date: number
    month: number,
    year: number
  }

  type Dates = DateObj[]

  interface DatesGenerator {
    dates: Dates[]
    nextMonth: number
    previousMonth: number
    nextYear: number
    previousYear: number
  }

  export function datesGenerator (body: DatesGeneratorBody): DatesGenerator
}
