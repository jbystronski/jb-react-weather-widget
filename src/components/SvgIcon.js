import React from "react";

export const SvgIcon = ({ title, path, size, viewBox, color }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={size || 40 + "px"}
    height={size || 40 + "px"}
    viewBox={viewBox || "0 0 30 30"}
    fill={color || "#FFF"}
  >
    <title>{title}</title>
    <path d={path} />
  </svg>
);
