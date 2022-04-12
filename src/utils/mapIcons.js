import { icons } from "../components/icons";

export const mapIcons = (code) => {
  return {
    "01d": icons["clear_d"],
    "01n": icons["clear_n"],
    "02d": icons["cloudy_d"],
    "02n": icons["cloudy_n"],
    "03d": icons["cloud"],
    "03n": icons["cloud"],
    "04d": icons["broken_clouds"],
    "04n": icons["broken_clouds"],
    "09d": icons["showers"],
    "09n": icons["showers"],
    "10d": icons["rain"],
    "10n": icons["rain"],
    "11d": icons["thunderstorm"],
    "11n": icons["thunderstorm"],
    "13d": icons["snow"],
    "13n": icons["snow"],
    "50d": icons["mist"],
    "50n": icons["mist"]
  }[code];
};
