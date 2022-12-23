import IconWeather from 'components/IconWeather';
import moment from 'moment';
import {
  Caption,
  Heading,
  Span,
  SpanText,
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
            <Span>°C</Span>
          </Wrapped>
          <div>
            <Heading>{mainWeather.weather[0].description}</Heading>
            <Text>
              Humidity: <SpanText>{mainWeather.main.humidity} %</SpanText>
            </Text>
            <Text>
              Wind:{' '}
              <SpanText>{Math.round(mainWeather.wind.speed)} m/c</SpanText>
            </Text>
          </div>
        </>
      )}
    </Wrap>
  );
};
