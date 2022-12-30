import React from "react";
import styled from "styled-components";
import { TextPrimary } from "./TextPrimary";
import { TextSecondary } from "./TextSecondary";
import { Timer } from "./Timer";
import { useWeather } from "./WeatherWidget";
import { getFullLocation } from "../utils/getFullLocation";

export const Location = () => {
  const {
    data: { daily },
    location,
    theme: {
      color: {
        font: { main },
      },
    },
  } = useWeather();

  return (
    <>
      <TextPrimary color={main}>
        {location
          ? getFullLocation(location).split(", ").slice(0, 2).join(", ")
          : ""}
      </TextPrimary>
      <TextSecondary color={main}>{daily[0].time}</TextSecondary>
    </>
  );
};
