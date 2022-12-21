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
  WrappedCaption,
} from './MainWeather.styled';

export const MainWeather = ({ mainWeather }) => {
  return (
    <Wrap>
      {mainWeather && (
        <>
          <WrappedCaption>
            <Caption>{mainWeather.name}</Caption>
            <Title>{moment().utc(mainWeather.dt).format('MM.DD.YYYY')}</Title>
            <Title>
              {moment().utc(mainWeather.dt).format('dddd')}{' '}
              <span>{moment().utc(mainWeather.dt).format('kk:mm')}</span>
            </Title>
          </WrappedCaption>
          <Wrapped>
            <IconWeather color="#0A4E82" code={mainWeather.weather[0].icon} />
            <Temperature>{Math.round(mainWeather.main.temp)}</Temperature>
            <Span>℃</Span>
          </Wrapped>
          <div>
            <Heading>{mainWeather.weather[0].description}</Heading>
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
