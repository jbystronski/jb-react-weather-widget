import { useState, useEffect } from "react";
import { geocodingApiUrl } from "../constants/geocodingApi";

export const useGpsApi = () => {
  const [gpsData, setGpsData] = useState(null);

  const [gpsInputData, setGpsInputData] = useState(null);

  useEffect(() => {
    if (gpsInputData === null) return;

    new Promise((resolve) =>
      resolve(fetch(geocodingApiUrl + new URLSearchParams(gpsInputData)))
    )
      .then((result) => result.json())
      .then((result) => {
        const data = result.results.map((res) => ({
          longitude: res.longitude,
          latitude: res.latitude,
          timezone: res.timezone,
          location: res.name,
          country: res.country,
          admin1: res.admin1,
          admin2: res.admin2,
        }));

        setGpsData(data);
      })
      .catch(console.error);
  }, [gpsInputData]);

  return { gpsData, setGpsInputData };
};
