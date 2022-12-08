import { CurrentButton, Input, SearchButton, Wrap } from './SearchCity.styled';

export const SearchCity = () => {
  return (
    <Wrap>
      <div>
        <Input type="text" placeholder="Enter a city" />
        <SearchButton type="submit">Search</SearchButton>
      </div>
      <CurrentButton type="button">Current</CurrentButton>
    </Wrap>
  );
};
