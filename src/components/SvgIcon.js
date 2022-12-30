import React from "react";

export const SvgIcon = ({ title, path, size, viewBox, color, ...props }) => (
  <svg
    {...props}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: size,
      height: size,
    }}
    viewBox={viewBox || "0 0 24 24"}
    fill={color || "#FFF"}
  >
    <title>{title}</title>
    <path d={path} />
  </svg>
);
