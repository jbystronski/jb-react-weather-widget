import React from "react";
import styled from "styled-components";
import { useWeather } from "./WeatherWidget";
import { Item } from "./Item";

const Component = styled(Item)`
  grid-column-start: 4;
  grid-column-end: 6;
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.borderRadius};
`;

export const RightScreen = ({ children }) => {
  const { theme } = useWeather();

  return (
    <Component bg={theme.bg.right} borderRadius={theme.borderRadius.element}>
      {children}
    </Component>
  );
};
