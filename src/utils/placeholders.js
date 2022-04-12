export const placeholders = {
  location: "Paris",
  currentDate: "Sun, Apr 10",
  sunrise: "5:58:43",
  sunset: "19:26:52",
  humidity: 68,
  wind_speed: 1.54,
  temperature: 4,
  max: 10,
  min: -2,
  felt_temperature: 6,
  pressure: "8/3",
  description: "scattered clouds",
  icon: "02d",
  forecast: [
    {
      date: () => "Sun, Apr 10",
      min: -1,
      max: 11,
      description: "Broken clouds",
      icon: "04d"
    },
    {
      date: () => "Mon, Apr 11",
      min: -1,
      max: 11,
      description: "Broken clouds",
      icon: "04d"
    },
    {
      date: () => "Tue, Apr 12",
      min: 2,
      max: 9,
      description: "Light snow",
      icon: "13d"
    },
    {
      date: () => "Wed, Apr 13",
      min: -3,
      max: 6,
      description: "Overcast clouds",
      icon: "02d"
    },
    {
      date: () => "Thur, Apr 14",
      min: 3,
      max: 12,
      description: "Clear sky",
      icon: "01d"
    },
    {
      date: () => "Fri, Apr 15",
      min: 4,
      max: 14,
      description: "Clear sky",
      icon: "01d"
    }
  ]
};
