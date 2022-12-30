import { getWeekdayMonthYear, getHoursMinutesSeconds } from "./formatTime";

const weatherCodes = {
  0: ["Clear sky", "clear_d"],
  1: ["Mainly clear", "clear_d"],
  2: ["Partly cloud", "cloudy_d"],
  3: ["Overcast", "cloud"],
  45: ["Fog", "mist"],
  48: ["Depositing rime fog", "mist"],
  51: ["Light drizzle", "rain"],
  53: ["Moderate drizzle", "rain"],
  55: ["Dense drizzle", "rain"],
  56: ["Light freezing drizzle", "rain"],
  57: ["Dense freezing drizzle", "rain"],
  61: ["Slight rain", "rain"],
  63: ["Moderate rain", "rain"],
  65: ["Heavy rain", "showers"],
  66: ["Light freezing rain", "rain"],
  67: ["Heavy freezing rain", "showers"],
  71: ["Light snow", "snow"],
  73: ["Moderate snow", "snow"],
  75: ["Heavy snow", "snow"],
  77: ["Grainy snow", "snow"],
  80: ["Light rain showers", "showers"],
  81: ["Moderate rain showers", "showers"],
  82: ["Heavy rain showers", "showers"],
  85: ["Light snow showers", "snow"],
  86: ["Heavy snow showers", "snow"],
  95: ["Thunderstorm", "thunderstorm"],
  96: ["Thunderstorm with light hail", "thunderstorm"],
  99: ["Thunderstorm with heavy hail", "thunderstorm"],
};

export const openMeteo = {
  url: "https://api.open-meteo.com/v1/forecast?",
  requestParams: {
    latitude: "",
    longitude: "",
    current_weather: true,
    temperature_unit: "celsius",
    daily: "temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset",
    timezone: "",
    temperature_unit: "celsius",
    windspeed_unit: "kmh",
  },
  responseParser: (responseData) => {
    responseData.current_weather["description"] =
      weatherCodes[responseData?.current_weather?.weathercode][0];
    responseData.tempSymbol = responseData.daily_units.temperature_2m_max;
    responseData.daily = responseData.daily.time.map((_, index) => {
      return {
        description: weatherCodes[responseData.daily.weathercode[index]][0],
        temp_max: responseData.daily.temperature_2m_max[index],
        temp_min: responseData.daily.temperature_2m_min[index],
        time: getWeekdayMonthYear(new Date(responseData.daily.time[index])),
        icon: weatherCodes[responseData.daily.weathercode[index]][1],
        sunset: getHoursMinutesSeconds(
          new Date(responseData.daily.sunset[index])
        ),
        sunrise: getHoursMinutesSeconds(
          new Date(responseData.daily.sunrise[index])
        ),
      };
    });

    if (
      responseData.current_weather.time >= responseData.daily[0]["sunset"] &&
      responseData.daily[0]["icon"].endsWith("_d")
    ) {
      responseData.daily[0]["icon"] =
        responseData.daily[0]["icon"].slice(0, -2) + "_n";
    }

    return responseData;
  },
};
