import React, { useState } from "react";
import { useWeather } from "./WeatherWidget";
import { SvgIcon } from "./SvgIcon";
import { icons } from "./icons";
import styled from "styled-components";
import { getFullLocation } from "../utils/getFullLocation";

const Container = styled.div`
  position: relative;
  width: 16rem;
  height: 3rem;
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  background: rgba(0, 0, 0, 0.08);

  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: inerit;
  box-sizing: border-box;
  padding: 4px;
  width: 100%;
`;

const IconsWrapper = styled.div`
  > svg {
    cursor: pointer;
    margin-left: 8px;
  }
`;

const Input = styled.input`
  border: none;
  background: transparent;
  width: auto;

  outline: none;
  color: ${(props) => props.color};
`;

const List = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
  width: inherit;
  max-height: 24rem;
  overflow: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
  color: ${(props) => props.color};
`;

const ListItem = styled.li`
  font-size: 0.845rem;
  color: inherit;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  box-sizing: border-box;
  padding: 4px;
  &:hover {
    background: #ccc;
  }
`;

export const GeoDropdown = () => {
  const {
    handleSearch,
    gpsData,
    handleChangeLocation,
    theme: { color, borderRadius },
  } = useWeather();

  const [value, setValue] = useState("");

  const onSearch = () => {
    if (value !== "") {
      handleSearch(
        value.trim().charAt(0).toUpperCase() + value.trim().slice(1)
      );
      setListVisible(true);
    }
  };

  const [listVisible, setListVisible] = useState(false);

  const handleListItemClick = (index) => {
    setListVisible(false);
    handleChangeLocation(index);
  };

  return (
    <Container>
      <InputWrapper color={color.font.main}>
        <Input
          color={color.font.main}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <IconsWrapper>
          <SvgIcon
            color={color.font.main}
            size="0.5rem"
            path={icons["arrow_down"]}
            onClick={() => setListVisible(!listVisible)}
          />
          <SvgIcon
            size="1rem"
            style={{ marginLeft: "8px" }}
            color={color.font.main}
            path={icons["search"]}
            onClick={onSearch}
          />
        </IconsWrapper>
      </InputWrapper>
      {listVisible && gpsData && gpsData.length ? (
        <List color={color.font.main}>
          {gpsData.map((location, index) => {
            return (
              <ListItem onClick={() => handleListItemClick(index)} key={index}>
                {getFullLocation(location)}
              </ListItem>
            );
          })}
        </List>
      ) : null}
    </Container>
  );
};
