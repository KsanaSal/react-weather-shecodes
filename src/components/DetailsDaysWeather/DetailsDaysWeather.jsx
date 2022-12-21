import IconWeather from 'components/IconWeather';
import moment from 'moment';
import {
  List,
  Text,
  TextMax,
  TextMin,
  Title,
  Wrap,
} from './DetailsDaysWeather.styled';

export const DetailsDaysWeather = ({ dailyData }) => {
  return (
    <Wrap>
      <List>
        {dailyData &&
          dailyData.slice(1, 6).map(dailyWeather => (
            <li key={dailyWeather.sunset}>
              <Title>{moment.unix(dailyWeather.dt).format('dddd')}</Title>
              <Text>{moment.unix(dailyWeather.dt).format('MM.DD.YYYY')}</Text>
              <IconWeather
                color="#0A4E82"
                code={dailyWeather.weather[0].icon}
              />
              <Text>{dailyWeather.weather[0].description}</Text>
              <TextMax>
                max: <span>{Math.round(dailyWeather.temp.max)}</span> ℃
              </TextMax>
              <TextMin>
                min: <span>{Math.round(dailyWeather.temp.min)}</span> ℃
              </TextMin>
            </li>
          ))}
      </List>
    </Wrap>
  );
};
