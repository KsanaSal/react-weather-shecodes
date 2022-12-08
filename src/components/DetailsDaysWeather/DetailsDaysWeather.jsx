import IconWeather from 'components/IconWeather';
import {
  List,
  TextMax,
  TextMin,
  Title,
  Wrap,
} from './DetailsDaysWeather.styled';

export const DetailsDaysWeather = () => {
  return (
    <Wrap>
      <List>
        <li>
          <Title>Friday</Title>
          <IconWeather icon="SNOW" color="#0A4E82" />
          <TextMax>
            max: <span>0</span> ℃
          </TextMax>
          <TextMin>
            min: <span>-2</span> ℃
          </TextMin>
        </li>
      </List>
    </Wrap>
  );
};
