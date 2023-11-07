import axios from "axios";
import { useEffect, useState } from "react";
import CitySelector from "./ui/CitySelector";

export default function Weather() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [data, setData] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Seoul");

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&lang=kr&appid=${apiKey}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const weatherData = res.data;
        setData(weatherData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedCity, apiKey]);

  if (data === null) {
    // 데이터가 도착하지 않았을 때
    return <div>Loading...</div>;
  }

  const {
    name,
    weather,
    main: { temp, feels_like, humidity },
    wind: { speed },
    clouds: { all },
  } = data;

  // 절대온도 -> 섭씨온도로 변경
  const celsiusTemp = Math.round(((temp - 273.15) * 10) / 10);

  // 날씨 아이콘 코드
  const weatherIconCode = data.weather[0].icon;

  // 아이콘 이미지 URL
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

  return (
    <section className="flex items-center justify-center list-none text-sm bg-slate-300 sm:flex-wrap sm:text-xs sm:p-1">
      <div className="flex">
        <div className="flex items-center">
          오늘의
          <CitySelector
            selectedCity={selectedCity}
            handleCityChange={handleCityChange}
          />
          날씨
        </div>
        <div className="flex items-center">
          <img src={weatherIconUrl} alt="Weather Icon" className="w-10" />
          <p>{weather[0].description}</p>
        </div>
      </div>
      <div className="flex ml-2 space-x-3 ">
        <li>온도 : {celsiusTemp}°C</li>
        <li>체감 온도 : {Math.round(feels_like - 273.15)}°C</li>
        <li>습도 : {humidity}%</li>
        <li>바람 : {speed} m/s</li>
        <li>구름 양 : {all}%</li>
      </div>
    </section>
  );
}
