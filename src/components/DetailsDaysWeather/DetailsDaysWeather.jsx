import IconWeather from 'components/IconWeather';
import moment from 'moment';
import {
  List,
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
              {console.log(dailyData)}
              {console.log(dailyWeather)}
              {console.log(moment.unix(dailyWeather.dt).format('dddd'))}
              <Title>{moment.unix(dailyWeather.dt).format('dddd')}</Title>
              <TextMax>
                {moment.unix(dailyWeather.dt).format('MM.DD.YYYY')}
              </TextMax>
              <IconWeather icon="SNOW" color="#0A4E82" />
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
