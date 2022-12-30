import React from "react";
import { mapIcons } from "../utils/mapIcons";
import { SvgIcon } from "./SvgIcon";
import { TextPrimary } from "./TextPrimary";
import { TextSecondary } from "./TextSecondary";
import { Item } from "./Item";
import styled from "styled-components";
import { useWeather } from "./WeatherWidget";

const Container = styled(Item)`
  text-align: center;
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.borderRadius};
`;

const IconWrapper = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

const TextWrapper = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 8px;
`;

const TimeWrapper = styled(TextWrapper)`
  height: 2rem;
`;

export const Forecast = ({ temp_max, temp_min, icon, description, time }) => {
  const {
    data: { tempSymbol },
    theme: { borderRadius, color, bg },
  } = useWeather();

  return (
    <Container bg={bg.bottom} borderRadius={borderRadius.element}>
      <TimeWrapper>
        <TextSecondary color={color.font.bottom}>{time}</TextSecondary>
      </TimeWrapper>

      <IconWrapper>
        <SvgIcon
          path={mapIcons(icon)}
          color={color.icon.bottom}
          size="3.5rem"
        />
      </IconWrapper>
      <TextWrapper>
        <TextSecondary color={color.font.bottom}>
          {Math.round(temp_max) +
            tempSymbol +
            "/" +
            Math.round(temp_min) +
            tempSymbol}
        </TextSecondary>
        <TextSecondary color={color.font.bottom}>{description}</TextSecondary>
      </TextWrapper>
    </Container>
  );
};
