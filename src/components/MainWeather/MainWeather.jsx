import IconWeather from 'components/IconWeather';
import moment from 'moment';
import {
  Caption,
  Heading,
  Span,
  Temperature,
  Text,
  Title,
  Wrap,
  Wrapped,
} from './MainWeather.styled';

export const MainWeather = ({ mainWeather }) => {
  console.log(mainWeather ? moment().utc(mainWeather.dt).format('kk:mm') : '');
  return (
    <Wrap>
      {mainWeather && (
        <>
          <div>
            <Caption>{mainWeather.name}</Caption>
            <Title>{moment().utc(mainWeather.dt).format('MM.DD.YYYY')}</Title>
            <Title>
              {moment().utc(mainWeather.dt).format('dddd')}{' '}
              <span>{moment().utc(mainWeather.dt).format('kk:mm')}</span>
            </Title>
          </div>
          <Wrapped>
            <IconWeather icon="SNOW" color="#0A4E82" />
            <Temperature>{Math.round(mainWeather.main.temp)}</Temperature>
            <Span>℃</Span>
          </Wrapped>
          <div>
            <Heading>{mainWeather.weather[0].main}</Heading>
            <Text>
              Humidity: <span>{mainWeather.main.humidity}</span> %
            </Text>
            <Text>
              Wind: <span>{Math.round(mainWeather.wind.speed)}</span> m/c
            </Text>
          </div>
        </>
      )}
    </Wrap>
  );
};
