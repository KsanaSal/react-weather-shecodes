import axios from 'axios';
import API_KEY from './apiKey';

// const apiKey = '55670bb2efaf12adf423f24ce8ac3e30';
let url = `https://api.openweathermap.org/data/2.5/onecall`;

async function getWeatherByDays(lat, long) {
  try {
    const response = await axios.get(
      `${url}?&lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getWeatherByDays;
