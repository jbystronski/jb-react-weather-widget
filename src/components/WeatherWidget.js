import React, { createContext, useContext, useState, useEffect } from "react";
import { useGpsApi } from "../utils/useGpsApi";
import { useWeatherApi } from "../utils/useWeatherApi";
import { geocodingApiParams } from "../constants/geocodingApi";
import { apiProviders } from "../utils/apiProviders";
import { getSpeedUnit, getTempUnit } from "../utils/getUnits";

export const WeatherContext = createContext();

export const WeatherWidget = ({
  defaultLocation,
  theme,
  units,
  children,
  remember,
}) => {
  const { gpsData, setGpsInputData } = useGpsApi();
  const { weatherResultData, setWeatherInputData } = useWeatherApi("openMeteo");

  const [location, setLocation] = useState(null);

  const temperature_unit = getTempUnit(units?.temperature);
  const windspeed_unit = getSpeedUnit(units?.speed);

  const localKey = "weatherWidgetStoredLocation";

  const handleChangeLocation = (index) => {
    if (!gpsData) return;

    setLocation(gpsData[index]);

    if (remember && localStorage) {
      localStorage.setItem(localKey, JSON.stringify(gpsData[index]));
    }
  };

  const handleSearch = (v) => {
    setGpsInputData({ ...geocodingApiParams, name: v });
  };

  useEffect(() => {
    setGpsInputData({
      ...geocodingApiParams,
      count: 1,
      name: defaultLocation,
    });
  }, []);

  useEffect(() => {
    if (gpsData && location === null) {
      if (remember && localStorage && localStorage.getItem(localKey)) {
        setLocation(JSON.parse(localStorage.getItem(localKey)));
      } else {
        setLocation(gpsData[0]);
      }
    }
  }, [gpsData, location, remember]);

  useEffect(() => {
    if (location) {
      const { longitude, latitude, timezone } = location;

      setWeatherInputData({
        ...apiProviders["openMeteo"]["requestParams"],
        longitude,
        latitude,
        timezone,
        temperature_unit,
        windspeed_unit,
      });
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
        defaultLocation,
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
