import React from 'react'
import { Moment } from 'moment'
import { getWeatherForecast, WeatherDtObj, WeatherObj } from '../../services/api'
import { getDateFromWeatherForecastApi } from '../../utils'

type Props = {
  date: Moment
  city: string
}

export const WeatherForecast = ({ city, date }: Props): JSX.Element => {
  const [weatherList, setWeatherList] = React.useState<WeatherDtObj[]>([])

  const getWeatherValues = React.useCallback(async () => {
    try {
      const list = await getWeatherForecast(city)

      setWeatherList(list)
    } catch (err) {
      console.error(err)
      setWeatherList([])
    }
  }, [city])

  const weatherForecastToDate = React.useMemo((): WeatherObj | undefined => {
    return weatherList
      .find(x => getDateFromWeatherForecastApi(x.dt).isSame(date, 'day') )
      ?.weather[0]
  }, [date, weatherList])

  React.useEffect(() => {
    getWeatherValues()
  }, [getWeatherValues])

  return (
    <div>
      {weatherForecastToDate && (
        <>
          <span>{weatherForecastToDate.main}</span>
          {weatherForecastToDate.icon &&
            <img src={`http://openweathermap.org/img/w/${weatherForecastToDate.icon}.png`} />}
        </>
      )}
    </div>
  )
}
