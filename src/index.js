import React from "react";
import { Main } from "./components/Main";
import { defaultTheme } from "./utils/defaultTheme";

export function WeatherWidget({
  theme,
  units = {
    temperature: "celsius",
    speed: "kmh",
  },
  defaultLocation,
  remember = false,
}) {
  const {
    color: { font: defFonts, icon: defIcons },
    bg: defBg,
    spacing: defSpacing,
    borderRadius: defRadius,
  } = defaultTheme;

  const themeOverride = {
    color: {
      font: {
        main: defFonts.main,
        timer: defFonts.timer,
        bottom: defFonts.bottom,
        right: defFonts.right,
        ...theme?.color?.font,
      },
      icon: {
        main: defIcons.main,
        right: defIcons.right,
        bottom: defIcons.bottom,
        ...theme?.color?.icon,
      },
    },
    bg: {
      main: defBg.main,
      right: defBg.right,
      bottom: defBg.bottom,
      ...theme?.bg,
    },
    spacing: {
      inner: defSpacing.inner,
      outer: defSpacing.outer,
      ...theme?.spacing,
    },
    borderRadius: {
      container: defRadius.container,
      element: defRadius.element,
      ...theme?.borderRadius,
    },
  };

  return (
    <Main
      theme={themeOverride}
      units={units}
      defaultLocation={defaultLocation}
      remember={remember}
    />
  );
}
