import { useState, useEffect } from "react";
import { apiProviders } from "./apiProviders";

export const useWeatherApi = (providerName) => {
  const [weatherInputData, setWeatherInputData] = useState(null);
  const [weatherResultData, setWeatherResultData] = useState(null);

  useEffect(() => {
    if (weatherInputData === null) return;

    let { url, responseParser } = apiProviders[providerName];

    fetch(
      url +
        Object.keys(weatherInputData)
          .map((key) => `${key}=${weatherInputData[key]}`)
          .join("&")
    )
      .then((result) => result.json())
      .then((result) => {
        setWeatherResultData(responseParser(result));
      })
      .catch(console.error);
  }, [weatherInputData, apiProviders, providerName]);

  return { weatherResultData, setWeatherInputData };
};
