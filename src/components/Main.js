import React from "react";
import { TodayDetails } from "./TodayDetails";
import { BottomScreen } from "./BottomScreen";
import { RightScreen } from "./RightScreen";
import { WeatherWidget } from "./WeatherWidget";
import { Container } from "./Container";
import { MainScreen } from "./MainScreen";

export const Main = ({ theme, units, defaultLocation, remember, refresh }) => {
  return (
    <WeatherWidget
      theme={theme}
      units={units}
      defaultLocation={defaultLocation}
      remember={remember}
      refresh={refresh}
    >
      <Container>
        <MainScreen />
        <RightScreen>
          <TodayDetails />
        </RightScreen>
        <BottomScreen />
      </Container>
    </WeatherWidget>
  );
};
