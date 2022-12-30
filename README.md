# jb-react-weather-widget

> Weather widget to use with your react app.

[![NPM](https://img.shields.io/npm/v/jb-react-weather-widget.svg)](https://www.npmjs.com/package/jb-react-weather-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Install

```bash
npm i jb-react-weather-widget

or

yarn add jb-react-weather-widget
```

### version 2.\*

This versions use openMeteo api, so no tokens neccessary. It also improves on functionality, You should probably use this version.

<a style="font-size: 18px; font-weight: bold;" href="https://jbystronski.github.io/jb-react-weather-widget/">Demo</a>

#### props

##### units (object)

###### temperature (string): celsius (default) or fahrenheit

###### speed (string): kmh (default), mph, kn or ms

##### theme (object)

###### Theme values to override default ones

##### defaultLocation (string)

###### A default place existing on Earth to take measurments from

##### remember (boolean)

###### Remember the next selected location as default (save to local storage). Default is false.

### versions 1.\*

This versions rely on openWeather api. You have to obtain a personal id token from https://openweathermap.org/api

#### props

##### apiKey (string)

###### Neccessary for the app to work

##### longitude (number)

###### Any valid longitude

##### latitude (number)

###### Any valid latitude

##### units (string: metric (default), imperial)

###### Measurement units based on your area's preferred system

##### theme (object)

###### Theme values to override default ones

### Usage

```jsx
import { WeatherWidget } from "jb-react-weather-widget";
```

### Styling

```jsx
const theme = {
  color: {
    font: {
      main: "#fff",
      timer: "#fff",
      bottom: "#fff",
      right: "#fff",
      list: {
        main: "#000",
        hover: "#fff",
      },
    },
    icon: {
      main: "#e040fb",
      right: "#e040fb",
      bottom: "#e040fb",
    },
  },
  bg: {
    main: "#512da8",
    right: "rgba(0,0,0,0.1)",
    bottom: "rgba(0,0,0,0.1)",
    list: {
      main: "#FFF",
      hover: "transparent",
      border: "#ccc",
    },
  },
  spacing: {
    inner: "16px", // The width, height of gaps between inner elements
    outer: "16px", // padding of the container's element
  },
  borderRadius: {
    container: "8px", // you want 0 radius you have to put it explicitly, same below
    element: "8px",
  },
};
```

### License

MIT © [jbystronski](https://github.com/jbystronski)
