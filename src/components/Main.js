import React from "react";
import Forecast from "./Forecast";
import TodayDetails from "./TodayDetails";
import Today from "./Today";
import Timer from "./Timer";
import useWidget from "../utils/useWidget";
import { getUnits } from "../utils/getUnits";
import TextPrimary from "./TextPrimary";
import Item from "./Item";
import styled from "styled-components";

const Container = styled("div")`
  display: grid;
  gap: ${(props) => props.innerSpacing};
  padding: ${(props) => props.outerSpacing};
  border-radius: ${(props) => props.borderRadius};
  grid-template-columns: auto auto auto auto auto;
  background-color: ${(props) => props.bg};
`;

const MainScreen = styled(Item)`
  grid-column-start: 1;
  grid-column-end: 4;
  position: relative;
`;

const Location = styled("div")`
  position: absolute;
  left: 0px;
  top: 0px;
`;

const RightScreen = styled(Item)`
  grid-column-start: 4;
  grid-column-end: 6;
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.borderRadius};
`;

export default function Main({ theme, apiKey, longitude, latitude, units }) {
  const { data } = useWidget({
    apiKey: apiKey,
    longitude: longitude,
    latitude: latitude,
    units: units,
  });

  const {
    color: { font, icon },
    bg,
    spacing,
    borderRadius,
  } = theme;

  return (
    <React.Fragment>
      {data ? (
        <Container
          bg={bg.main}
          innerSpacing={spacing.inner}
          outerSpacing={spacing.outer}
          borderRadius={borderRadius.container}
        >
          <MainScreen>
            <Location>
              <TextPrimary color={font.main}>{data.location}</TextPrimary>
              <TextPrimary color={font.main}>{data.currentDate}</TextPrimary>
              <Timer color={font.timer} />
            </Location>
            <Today
              description={data.description}
              units={getUnits(units)}
              temperature={data.temperature}
              icon={data.icon}
              iconColor={icon.main}
              fontColor={font.main}
            />
          </MainScreen>
          <RightScreen bg={bg.right} borderRadius={borderRadius.element}>
            <TodayDetails
              {...data}
              iconColor={icon.right}
              fontColor={font.right}
              units={getUnits(units)}
            />
          </RightScreen>
          {data.forecast
            ? data.forecast
                .slice(1, 6)
                .map((props, index) => (
                  <Forecast
                    key={props.date + index}
                    {...props}
                    iconColor={icon.bottom}
                    bg={bg.bottom}
                    color={font.bottom}
                    borderRadius={borderRadius.element}
                  />
                ))
            : null}
        </Container>
      ) : null}
    </React.Fragment>
  );
}
