import axios from 'axios'

export interface WeatherObj {
  description: string
  icon: string
  id: number
  main: string
}

export interface WeatherDtObj {
  dt: number
  weather: WeatherObj[]
}

interface WeatherResponseObj {
  list: WeatherDtObj[]
}

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params: {
    appid: process.env.OPEN_WEATHER_API_TOKEN,
    units: 'metrics',
    cnt: '16'
  }
})

export const getWeatherForecast = async (city: string): Promise<WeatherDtObj[]> => {
  return await weatherApi.get<WeatherResponseObj>('forecast/daily', {
    params: {
      q: city
    }
  }).then(({ data: { list } }) => list)
}
