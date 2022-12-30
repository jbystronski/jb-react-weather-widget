import React from "react";
import styled from "styled-components";

import { Item } from "./Item";
import { Timer } from "./Timer";
import { Location } from "./Location";
import { Today } from "./Today";
import { GeoDropdown } from "./GeoDropdown";

const Container = styled(Item)`
  grid-column-start: 1;
  grid-column-end: 4;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
`;

export const MainScreen = ({ children }) => {
  return (
    <Container>
      <Location />
      <Timer />
      <Today />
      <GeoDropdown />
    </Container>
  );
};
