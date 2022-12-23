import React, { useEffect } from 'react'
import { placeholders } from './placeholders'

export default function useWidget(
  options = {
    apiKey: null,
    longitude: null,
    latitude: null,
    units: null
  }
) {
  const [data, setData] = React.useState(null)

  const getWeatherUrl = (params) =>
    'https://api.openweathermap.org/data/2.5/onecall?' +
    new URLSearchParams(params)

  const getLocationUrl = (params) =>
    'https://api.openweathermap.org/geo/1.0/reverse?' +
    new URLSearchParams(params)

  const getHourlyTime = (unixTime) => {
    const date = new Date(unixTime * 1000)

    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  }

  const getMonthDay = (time) => time.toString().split(' ').slice(0, 3).join(' ')

  const setWeather = async (lat, lon, apiKey, units) => {
    const weatherApiResponse = await getWeather(lat, lon, apiKey, units)

    const locationResponse = await getLocation(lat, lon, apiKey)

    const weatherData = await weatherApiResponse.json()

    const locationData = await locationResponse.json()

    setData(parseData(weatherData, locationData))
  }

  const getWeather = async (latitude, longitude, apiKey, units) =>
    await fetch(
      getWeatherUrl({
        lat: latitude,
        lon: longitude,
        appid: apiKey,
        units: units || 'metric'
      })
    )

  const getLocation = async (latitude, longitude, apiKey) =>
    await fetch(
      getLocationUrl({
        lat: latitude,
        lon: longitude,
        appid: apiKey
      })
    )

  const parseData = (weatherObject, locationObject) => {


  

    const curr = weatherObject.current

    return {
      location: locationObject[0].name,
      timezone: weatherObject.current.dt,

      currentDate: getMonthDay(
        new Date(
          (weatherObject.current.dt + weatherObject.timezone_offset) * 1000
        )
      ),
      sunrise: getHourlyTime(curr.sunrise),
      sunset: getHourlyTime(curr.sunset),
      humidity: curr.humidity,
      wind_speed: curr.wind_speed,
      temperature: Math.round(curr.temp),
      max: Math.round(weatherObject.daily[0].temp.max),
      min: Math.round(weatherObject.daily[0].temp.min),
      felt_temperature: Math.round(curr.feels_like),
      pressure: curr.pressure,
      description: curr.weather[0].description,
      icon: curr.weather[0].icon,
      forecast: weatherObject.daily.map((d) => {
        return {
          date: () =>
            getMonthDay(
              new Date((d.dt + weatherObject.timezone_offset) * 1000)
            ),
          max: Math.round(d.temp.max),
          min: Math.round(d.temp.min),
          icon: d.weather[0].icon,
          description: d.weather[0].description
        }
      })
    }
  }

  useEffect(() => {
    if (!options.apiKey) {
      setData(placeholders)
      return
    }

    if ('geolocation' in navigator) {
      try {
        navigator.permissions.query({ name: 'geolocation' }).then((res) => {
          if (res.state === 'granted') {
            navigator.geolocation.getCurrentPosition(async function (position) {
              setWeather(
                options.latitude || position.coords.latitude,
                options.longitude || position.coords.longitude,
                options.apiKey,
                options.units
              )
            })
          } else {
            setWeather(
              options.latitude || 51.477928,
              options.longitude || -0.001545,
              options.apiKey,
              options.units
            )
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
  }, [options.apiKey, options.units])

  return {
    data
  }
}
