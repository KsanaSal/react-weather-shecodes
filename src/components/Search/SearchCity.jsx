import {
  CurrentButton,
  Input,
  SearchButton,
  Wrap,
  WrapInput,
} from './SearchCity.styled';

export const SearchCity = () => {
  return (
    <Wrap>
      <WrapInput>
        <Input type="search" placeholder="Enter a city" />
        <SearchButton type="submit">Search</SearchButton>
      </WrapInput>
      <CurrentButton type="button">Current</CurrentButton>
    </Wrap>
  );
};
