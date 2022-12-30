import { useState, useEffect } from "react";
import { apiProviders } from "./apiProviders";

export const useWeatherApi = (providerName) => {
  const [weatherInputData, setWeatherInputData] = useState(null);
  const [weatherResultData, setWeatherResultData] = useState(null);

  useEffect(() => {
    if (weatherInputData === null) return;

    let api = apiProviders[providerName];

    if (!api || !api["url"] || typeof api["responseParser"] !== "function")
      return;

    new Promise((resolve) =>
      resolve(
        fetch(
          api["url"] +
            Object.keys(weatherInputData)
              .map((key) => `${key}=${weatherInputData[key]}`)
              .join("&")
        )
      )
    )
      .then((result) => result.json())
      .then((result) => {
        setWeatherResultData(api["responseParser"].call(null, result));
      })
      .catch(console.error);
  }, [weatherInputData, apiProviders, providerName]);

  return { weatherResultData, setWeatherInputData };
};
