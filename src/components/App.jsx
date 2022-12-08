import { WeatherLayout } from './WeatherLayout/WeatherLayout';
import { MainWeather } from './MainWeather/MainWeather';
import { DetailsDaysWeather } from './DetailsDaysWeather/DetailsDaysWeather';
import { useEffect, useState } from 'react';
import getWeatherLocation from 'data/getWeatherLocation';
import getWeatherByDays from 'data/getWeatherDays';

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
      <WeatherLayout />
      <MainWeather mainWeather={mainWeather} />
      <DetailsDaysWeather />
    </div>
  );
};
