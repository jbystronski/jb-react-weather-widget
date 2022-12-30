import React from "react";

import { SvgIcon } from "./SvgIcon";
import { mapIcons } from "../utils/mapIcons";

import { TextSecondary } from "./TextSecondary";
import { useWeather } from "./WeatherWidget";

import styled from "styled-components";

const Row = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const TodayDetails = () => {
  const {
    data: { daily, current_weather, tempSymbol },
    windspeed_unit,
    theme,
  } = useWeather();

  const list = [
    {
      icon: "sunrise",
      val: daily[0].sunrise + " (sunrise)",
    },
    {
      icon: "sunset",
      val: daily[0].sunset + " (sunset)",
    },
    {
      icon: "temp_max",
      val: "max temperature " + daily[0].temp_max + tempSymbol,
    },
    {
      icon: "temp_min",
      val: "min temperature " + daily[0].temp_min + tempSymbol,
    },
    {
      icon: "wind",
      val: `wind speed ${current_weather.windspeed} ${windspeed_unit}`,
    },
    // {
    //   icon: icons.humidity,
    //   val: humidity + "%",
    // },
  ];

  return (
    <div>
      {list.map(({ icon, val }, index) => (
        <Row key={index}>
          <SvgIcon
            color={theme.color.icon.right}
            path={mapIcons(icon)}
            size="1.5rem"
          />
          <TextSecondary
            color={theme.color.font.right}
            style={{ marginLeft: "0.7rem" }}
          >
            {val}
          </TextSecondary>
        </Row>
      ))}
    </div>
  );
};
