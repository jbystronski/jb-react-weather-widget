import React from "react";
import { useWeather } from "./WeatherWidget";
import { Forecast } from "./Forecast";

export const BottomScreen = () => {
  const {
    data: { daily },
  } = useWeather();

  return (
    <>
      {daily && daily.length
        ? daily
            .slice(1, 6)
            .map((day, index) => (
              <Forecast
                description={day.description}
                icon={day.icon}
                temp_max={day.temp_max}
                temp_min={day.temp_min}
                time={day.time}
                key={day.time + index}
              />
            ))
        : null}
    </>
  );
};
