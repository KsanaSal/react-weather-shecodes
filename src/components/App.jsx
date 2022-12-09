import { WeatherLayout } from './WeatherLayout/WeatherLayout';
import { MainWeather } from './MainWeather/MainWeather';
import { DetailsDaysWeather } from './DetailsDaysWeather/DetailsDaysWeather';
import { useEffect, useState } from 'react';
import getWeatherLocation from 'data/getWeatherLocation';
import getWeatherByDays from 'data/getWeatherDays';
import { Caption, Link, Text } from './App.styled';

export const App = () => {
  const [latitude, setLatitude] = useState(50.4501);
  const [longitude, setLongitude] = useState(30.5234);
  const [mainWeather, setMainWeather] = useState();
  const [dailyData, setDailyData] = useState();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query') ?? '';
  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    function showPosition(pos) {
      console.log(pos);
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
      getWeatherLocation(latitude, longitude).then(data => {
        getWeatherByDays(data.coord.lat, data.coord.lon).then(dailyData => {
          setDailyData(dailyData.daily);
          // listDays(coordData.daily, 'current-style');
        });
        setMainWeather(data);
      });
    }

    function getCurrentPosition() {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    getCurrentPosition();
    // const searchMovies = async () => {
    //   try {
    //     const fetchMovies = await getWeatherLocation(query);
    //     setMovies(fetchMovies.results);
    //   } catch {
    //     console.log('first');
    //   }
    // };
    // if (query) {
    //   searchMovies();
    // }
  }, [latitude, longitude]);

  console.log(mainWeather);
  console.log(dailyData);
  // function getCurrentPosition() {
  //   navigator.geolocation.getCurrentPosition(showPosition);
  // }
  // getCurrentPosition();

  return (
    <div>
      <Caption>Weather forecast</Caption>
      <WeatherLayout />
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
        <Link href="https://github.com/KsanaSal/react-weather-shecodes">
          Netlify
        </Link>
      </Text>
    </div>
  );
};
