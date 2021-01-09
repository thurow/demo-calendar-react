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
  }
  export function datesGenerator (body: DatesGeneratorBody): DatesGenerator
}
