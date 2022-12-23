import { WeatherLayout } from './WeatherLayout/WeatherLayout';
import { MainWeather } from './MainWeather/MainWeather';
import { DetailsDaysWeather } from './DetailsDaysWeather/DetailsDaysWeather';
import { useEffect, useState } from 'react';
import getWeatherLocation from 'data/getWeatherLocation';
import getWeatherDays from 'data/getWeatherDays';
import getWeather from 'data/getWeather';
import { Caption, Link, Text, VortexWrapper } from './App.styled';
import { Vortex } from 'react-loader-spinner';

export const App = () => {
  const [latitude, setLatitude] = useState(50.4501);
  const [longitude, setLongitude] = useState(30.5234);
  const [mainWeather, setMainWeather] = useState();
  const [dailyData, setDailyData] = useState();
  const [city, setCity] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function showPosition(pos) {
    setIsLoading(true);
    setLatitude(pos.coords.latitude);
    setLongitude(pos.coords.longitude);
    getWeatherLocation(latitude, longitude).then(data => {
      getWeatherDays(data.coord.lat, data.coord.lon).then(dailyData => {
        setIsLoading(false);
        setDailyData(dailyData.daily);
      });
      setMainWeather(data);
    });
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  useEffect(() => {
    getCurrentPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getWeather(city).then(data => {
      setMainWeather(data);
      getWeatherDays(data.coord.lat, data.coord.lon).then(dailyData => {
        setDailyData(dailyData.daily);
      });
    });
  }
  console.log(city);
  return (
    <div>
      <Caption>Weather forecast</Caption>
      {isLoading ? (
        <VortexWrapper>
          <Vortex
            visible={true}
            height="200"
            width="200"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />
        </VortexWrapper>
      ) : (
        <>
          <WeatherLayout
            changeCity={changeCity}
            handleSubmit={handleSubmit}
            currentPosition={getCurrentPosition}
          />
          <MainWeather mainWeather={mainWeather} />
          <DetailsDaysWeather dailyData={dailyData} />
          <Text>
            This project was coded by Oksana Salivon of<span>&nbsp;</span>
            <Link href="https://www.shecodes.io/graduates/51349-oksana-salivon">
              SheCodes
            </Link>
            <span>&nbsp;</span>
            and is open-sourced on<span>&nbsp;</span>
            <Link href="https://github.com/KsanaSal/react-weather-shecodes">
              GitHub
            </Link>
            <span>&nbsp;</span>
            and hosted on<span>&nbsp;</span>
            <Link href="https://ksanasal-react-weather.netlify.app/">
              Netlify
            </Link>
          </Text>
        </>
      )}
    </div>
  );
};
