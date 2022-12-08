import { WeatherLayout } from './WeatherLayout/WeatherLayout';
import { MainWeather } from './MainWeather/MainWeather';
import { DetailsDaysWeather } from './DetailsDaysWeather/DetailsDaysWeather';

export const App = () => {
  return (
    <div>
      <WeatherLayout />
      <MainWeather />
      <DetailsDaysWeather />
    </div>
  );
};
