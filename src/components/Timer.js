import React, { useState, useEffect } from "react";
import { TextSecondary } from "./TextSecondary";
import { useWeather } from "./WeatherWidget";
import { pad } from "../utils/formatTime";

export const Timer = () => {
  const {
    theme: { color },
    data,
  } = useWeather();

  const [seconds, setSeconds] = useState("00");
  const [hrs, setHrs] = useState("00");
  const [mins, setMins] = useState("00");

  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      const offset =
        d.getTime() +
        data.utc_offset_seconds * 1000 +
        d.getTimezoneOffset() * 60 * 1000;

      const time = new Date(offset);

      const secs = time.getSeconds() + 1;
      setHrs(time.getHours());
      setMins(time.getMinutes());

      setSeconds(secs);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [data.current_weather.time]);

  return (
    <TextSecondary color={color.timer}>
      {pad(hrs)} : {pad(mins)} : {pad(seconds)}
    </TextSecondary>
  );
};
