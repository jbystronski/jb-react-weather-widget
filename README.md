[![NPM](https://img.shields.io/npm/v/jb-react-weather-widget.svg)](https://www.npmjs.com/package/jb-react-weather-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# jb-react-weather-widget

Weather widget to use with a React app

<a href="https://jb-weather-widget.surge.sh">Demo</a>

#### Installation

```bash
npm i jb-react-weather-widget

or

yarn add jb-react-weather-widget
```

#### Usage

```jsx
import { WeatherWidget } from "jb-react-weather-widget";
```

#### Version 2.\*

This versions use openMeteo api, so no tokens neccessary. It also improves on functionality, You should probably use this version.

##### Props

<ul>
     <li><span style="font-weight: bold;">units</span><br/><span>mesurement units, temperature (celsius - default, fahrenheit), speed (kmh - default, mph, kn, ms)</span></li>
       <li><span style="font-weight: bold;">remember</span><br/><span>stores current choice inside local storage, default is false</span></li>
        <li><span style="font-weight: bold;">refresh</span><br/><span>weather data refetch time in minutes, default is 60</span></li>
         <li><span style="font-weight: bold;">defaultLocation</span><br/><span>a default place existing on Earth to take measurments from, if not provided a random place gets selected</span></li>
          <li><span style="font-weight: bold;">theme</span><br/><span>custom theme to override the default one</span></li>
</ul>

#### Versions 1.\* (deprecated)

This versions rely on openWeather api. You have to obtain a personal id token from https://openweathermap.org/api

##### Props

<ul>
     <li><span style="font-weight: bold;">apiKey (required)</span><br/><span>individual access token required by the api</span></li>
      <li><span style="font-weight: bold;">longitude (required)</span><br/><span>any valid longitude value</span></li>
         <li><span style="font-weight: bold;">latitude (required)</span><br/><span>any valid latidute value</span></li>
       <li><span style="font-weight: bold;">units</span><br/><span>measurment units systtem (metric, imperial), default is metric</span></li>
         <li><span style="font-weight: bold;">theme</span><br/><span>custom theme to override the default one</span></li>
      
</ul>

#### Styling

Pass a theme object with your preferred values

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

#### License

MIT © [jbystronski](https://github.com/jbystronski)
