import React from "react";
import { icons } from "./icons";
import { SvgIcon } from "./SvgIcon";

import TextSecondary from "./TextSecondary";

import styled from "styled-components";

const Row = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export default function TodayDetails({
  sunrise,
  sunset,
  wind_speed,
  humidity,
  max,
  min,
  units,
  iconColor,
  fontColor,
}) {
  const list = [
    {
      icon: icons.sunrise,
      val: sunrise,
    },
    {
      icon: icons.sunset,
      val: sunset,
    },
    { icon: icons.temp, val: max + "/" + min },
    {
      icon: icons.wind,
      val: wind_speed + " " + units.speed,
    },
    {
      icon: icons.humidity,
      val: humidity + "%",
    },
  ];

  return (
    <div>
      {list.map(({ icon, val }, index) => (
        <Row key={index}>
          <SvgIcon color={iconColor} path={icon} size="2rem" />
          <TextSecondary color={fontColor} style={{ marginLeft: "0.7rem" }}>
            {val}
          </TextSecondary>
        </Row>
      ))}
    </div>
  );
}
