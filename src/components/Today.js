import React from "react";
import { SvgIcon } from "./SvgIcon";
import { mapIcons } from "../utils/mapIcons";
import styled from "styled-components";
import TextPrimary from "./TextPrimary";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 100%;
  min-height: 16rem;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  margin-right: 1rem;
`;

const Temperature = styled.h4`
  font-size: 4rem;
  margin: 0;
`;

export default function Today({
  description,
  units,
  temperature,
  icon,
  iconColor,
  fontColor,
}) {
  return (
    <Container>
      <Inner>
        <IconContainer>
          <SvgIcon size="11rem" path={mapIcons(icon)} color={iconColor} />
        </IconContainer>
        <div>
          <Temperature style={{ color: fontColor }}>
            {temperature}
            <span style={{ fontSize: "2.5rem" }}>&#176;{units.temp}</span>
          </Temperature>
          <TextPrimary color={fontColor}>{description}</TextPrimary>
        </div>
      </Inner>
    </Container>
  );
}
