import React from "react";
import { SvgIcon } from "./SvgIcon";
import { mapIcons } from "../utils/mapIcons";
import styled from "styled-components";
import { TextPrimary } from "./TextPrimary";
import { useWeather } from "./WeatherWidget";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 100%;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  margin-right: 1rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Temperature = styled.h4`
  font-size: 3rem;
  margin: 0;
  line-height: 100%;
`;

export const Today = () => {
  const {
    data: { daily, current_weather, tempSymbol },
    temperature_unit,
    theme: {
      color: { font, icon },
    },
  } = useWeather();

  return (
    <Container>
      <Inner>
        <IconContainer>
          <SvgIcon
            size="7.5rem"
            path={mapIcons(daily[0]["icon"])}
            color={icon.main}
          />
        </IconContainer>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Temperature style={{ color: font.main }}>
              {current_weather.temperature}
              {tempSymbol}
            </Temperature>
          </div>

          <TextPrimary style={{ textAlign: "center" }} color={font.main}>
            {daily[0]["description"]}
          </TextPrimary>
        </div>
      </Inner>
    </Container>
  );
};
