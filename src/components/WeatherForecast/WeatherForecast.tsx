import React from 'react'
import { Moment } from 'moment'
import { getWeatherForecast, WeatherDtObj, WeatherObj } from '../../services/api'
import { getDateFromWeatherForecastApi } from '../../utils'
import { Box, Typography } from '@material-ui/core'

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
    <Box
      display="flex"
      flexDirection="column"
      minHeight="50px"
      mt={2}
    >
      <Typography variant="subtitle1" color="textSecondary">Weather Forecast</Typography>
      {weatherForecastToDate ? (
        <Box
          display="flex"
          alignItems="center"
        >
          {weatherForecastToDate.icon &&
            <img src={`http://openweathermap.org/img/w/${weatherForecastToDate.icon}.png`} />}
          <Typography variant="body1">{weatherForecastToDate.main}</Typography>
        </Box>
      ): <Typography variant="caption">No data.</Typography>}
    </Box>
  )
}
