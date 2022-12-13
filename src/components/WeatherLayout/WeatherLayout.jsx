import { SearchCity } from 'components/Search/SearchCity';

import { Container } from './WeatherLayout.styled';

export const WeatherLayout = ({
  changeCity,
  handleSubmit,
  currentPosition,
}) => {
  return (
    <Container>
      <SearchCity
        changeCity={changeCity}
        handleSubmit={handleSubmit}
        currentPosition={currentPosition}
      />
    </Container>
  );
};
