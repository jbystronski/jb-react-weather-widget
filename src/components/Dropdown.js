import React, { useState } from "react";
import { useWeather } from "./WeatherWidget";
import { getFullLocation } from "../utils/getFullLocation";

export const Dropdown = () => {
  const { gpsData, handleChangeLocation } = useWeather();

  const [selected, setSelected] = useState(0);

  const handleChange = (e) => {
    setSelected(e.target.value);
    handleChangeLocation(e.target.value);
  };

  return (
    <select name="places" value={selected} onChange={handleChange}>
      {gpsData && gpsData.length
        ? gpsData.map((location, index) => {
            return (
              <option key={index} value={index}>
                {getFullLocation(location)}
              </option>
            );
          })
        : null}
    </select>
  );
};
