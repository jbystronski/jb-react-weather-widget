import React, { useState, useEffect } from "react";
import { TextSecondary } from "./TextSecondary";
import { useWeather } from "./WeatherWidget";
import { pad, getTimezoneCurrentTime } from "../utils/formatTime";

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
      const time = getTimezoneCurrentTime(data.utc_offset_seconds);

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
    <TextSecondary color={color.font.timer}>
      {pad(hrs)} : {pad(mins)} : {pad(seconds)}
    </TextSecondary>
  );
};
