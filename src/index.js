import React from 'react'
import Main from './components/Main'
import { defaultTheme } from './utils/defaultTheme'

export function WeatherWidget({
  theme,
  apiKey,
  longitude,
  latitude,
  units = 'metric'
}) {
  const {
    color: { font: defFonts, icon: defIcons },
    bg: defBg,
    spacing: defSpacing,
    borderRadius: defRadius
  } = defaultTheme

  const themeOverride = {
    color: {
      font: {
        main: theme?.color?.font.main || defFonts.main,
        timer: theme?.color?.font.timer || defFonts.timer,
        bottom: theme?.color?.font.bottom || defFonts.bottom,
        right: theme?.color?.font.right || defFonts.right
      },
      icon: {
        main: theme?.color?.icon.main || defIcons.main,
        right: theme?.color?.icon.right || defIcons.right,
        bottom: theme?.color?.icon.bottom || defIcons.bottom
      }
    },
    bg: {
      main: theme?.bg?.main || defBg.main,
      right: theme?.bg?.right || defBg.right,
      bottom: theme?.bg?.bottom || defBg.bottom
    },
    spacing: {
      inner: theme?.spacing?.inner || defSpacing.inner,
      outer: theme?.spacing?.outer || defSpacing.outer
    },
    borderRadius: {
      container: theme?.borderRadius?.container || defRadius.container,
      element: theme?.borderRadius?.element || defRadius.element
    }
  }

  return (
    <Main
      apiKey={apiKey}
      longitude={longitude}
      latitude={latitude}
      theme={themeOverride}
      units={units}
    />
  )
}
