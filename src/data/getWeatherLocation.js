import axios from 'axios';
import API_KEY from './apiKey';

let url = `https://api.openweathermap.org/data/2.5/weather`;

async function getWeatherLocation(latitude, longitude) {
  try {
    const response = await axios.get(
      `${url}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getWeatherLocation;
