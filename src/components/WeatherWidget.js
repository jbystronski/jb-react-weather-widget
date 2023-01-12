import React, { createContext, useContext, useState, useEffect } from "react";
import { useWeatherApi } from "../utils/useWeatherApi";
import { apiProviders } from "../utils/apiProviders";
import { getSpeedUnit, getTempUnit } from "../utils/getUnits";
import { randomLocations } from "../constants/randomLocations";
import { autodetectLocation } from "../utils/autodectLocation";
import { useLocalStorage } from "../utils/useLocalStorage";
import { localStorageKey } from "../constants/localStorageKey";
import { getGpsData } from "../utils/getGpsData";

export const WeatherContext = createContext();

export const WeatherWidget = ({
  defaultLocation,
  theme,
  units,
  children,
  remember,
  refresh,
}) => {
  const { weatherResultData, setWeatherInputData } = useWeatherApi("openMeteo");

  const { isStored, getStored, saveToLocalStorage } =
    useLocalStorage(localStorageKey);

  const [gpsData, setGpsData] = useState(null);
  const [location, setLocation] = useState(null);

  const temperature_unit = getTempUnit(units?.temperature);
  const windspeed_unit = getSpeedUnit(units?.speed);

  const handleChangeLocation = (index) => {
    if (!gpsData) return;

    setLocation(gpsData[index]);

    if (remember) saveToLocalStorage(gpsData[index]);
  };

  const handleSearch = (v) => {
    getGpsData({ name: v }).then(setGpsData);
  };

  useEffect(() => {
    switch (true) {
      case isStored():
        return setLocation(getStored());
      default:
        getGpsData({
          count: 1,
          name:
            defaultLocation ||
            randomLocations[Math.floor(Math.random() * randomLocations.length)],
        }).then((result) => setLocation(result[0]));
    }
  }, [defaultLocation, randomLocations]);

  const handleSetWeatherInputData = ({ longitude, latitude, timezone }) => {
    setWeatherInputData({
      ...apiProviders["openMeteo"]["requestParams"],
      longitude,
      latitude,
      timezone,
      temperature_unit,
      windspeed_unit,
    });
  };

  useEffect(() => {
    if (location) {
      handleSetWeatherInputData(location);

      const interval = setInterval(() => {
        handleSetWeatherInputData(location);
      }, refresh * 100 * 1000);

      return () => clearInterval(interval);
    }
  }, [location]);

  return (
    <WeatherContext.Provider
      value={{
        handleSearch,
        theme,
        gpsData,
        handleChangeLocation,
        data: weatherResultData,
        temperature_unit,
        windspeed_unit,
        location,
      }}
    >
      {weatherResultData ? children : null}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
