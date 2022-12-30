import React from "react";
import styled from "styled-components";
import { useWeather } from "./WeatherWidget";

const Component = styled("div")`
  display: grid;
  gap: ${(props) => props.innerSpacing};
  padding: ${(props) => props.outerSpacing};
  border-radius: ${(props) => props.borderRadius};
  grid-template-columns: auto auto auto auto auto;
  background-color: ${(props) => props.bg};
`;

export const Container = ({ children }) => {
  const {
    theme: {
      bg: { main },
      spacing: { inner, outer },
      borderRadius: { container },
    },
  } = useWeather();

  return (
    <Component
      bg={main}
      innerSpacing={inner}
      outerSpacing={outer}
      borderRadius={container}
    >
      {children}
    </Component>
  );
};
