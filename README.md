# jb-react-weather-widget

> Weather widget to use with your react app.

[![NPM](https://img.shields.io/npm/v/jb-react-weather-widget.svg)](https://www.npmjs.com/package/jb-react-weather-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save jb-react-weather-widget

or

yarn add jb-react-weather-widget
```

## Demo

"https://jbystronski.github.io/jb-react-weather-widget/"

## Prerequisites

In order for this to work properly you have to allow location tracking in the browser.

Sign up with https://openweathermap.org/api to obtain an appId.

## Usage

```jsx
import { WeatherWidget } from "jb-react-weather-widget";
```

## Props

All props are optional. Follow the descriptions

As a default, provided you have geolocation enabled in you browser settings and have passed a valid appId, the application will display information from your area but you can pass any valid longitude and latitude values.

| Name      | type   | Options          | Default        | Description                                                                    |
| --------- | ------ | ---------------- | -------------- | ------------------------------------------------------------------------------ |
| apiKey    | string | -                | -              | Get from https://openweathermap.org, otherwise fallback data will be displayed |
| longitude | int    | -                | fallback value | Any valid longitude                                                            |
| latitude  | int    | -                | fallback value | Any valid latitude                                                             |
| units     | string | metric, imperial | metric         | Measurement units based on your area preferred system                          |
| theme     | object | -                | app theme      | You can pass your own theme object, see below                                  |

## Styling

```jsx
const theme = {
  color: {
    font: {
      main: '#fff',
      timer: '#fff',
      bottom: '#fff',
      right: '#fff'
    },
    icon: {
      main: '#e040fb',
      right: '#e040fb',
      bottom: '#e040fb'
    }
  },
  bg: {
    main: '#512da8',
    right: 'rgba(0,0,0,0.1)',
    bottom: 'rgba(0,0,0,0.1)'
  },
  spacing: {
    inner: '16px', // The width, height of gaps between inner elements
    outer: '16px' // padding of the container's element
  },
  borderRadius: {
    container: '8px', // you want 0 radius you have to put it explicitly, same below
    element: '8px
  }
}
```

## License

MIT © [jbystronski](https://github.com/jbystronski)
