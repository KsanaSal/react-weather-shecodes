import axios from 'axios';
import API_KEY from './apiKey';

async function getWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getWeather;
