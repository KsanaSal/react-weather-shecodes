import IconWeather from 'components/IconWeather';
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

export const MainWeather = () => {
  return (
    <Wrap>
      <div>
        <Caption>Kyiv</Caption>
        <Title>12.08.2022</Title>
        <Title>
          Wednesday <span>16:33</span>
        </Title>
      </div>
      <Wrapped>
        <IconWeather icon="SNOW" color="#0A4E82" />
        <Temperature>-1</Temperature>
        <Span>℃</Span>
      </Wrapped>
      <div>
        <Heading>Snowy</Heading>
        <Text>
          Precipitation: <span>16</span> %
        </Text>
        <Text>
          Wind: <span>4</span> m/c
        </Text>
      </div>
    </Wrap>
  );
};
