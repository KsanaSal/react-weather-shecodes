import { CurrentButton, Input, SearchButton, Wrap } from './SearchCity.styled';

export const SearchCity = () => {
  return (
    <Wrap>
      <Input type="text" placeholder="Enter a city" />
      <SearchButton type="submit">Search</SearchButton>
      <CurrentButton type="button">Current</CurrentButton>
    </Wrap>
  );
};
