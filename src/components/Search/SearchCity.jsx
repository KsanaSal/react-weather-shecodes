import {
  CurrentButton,
  Input,
  SearchButton,
  Wrap,
  WrapInput,
} from './SearchCity.styled';

export const SearchCity = ({ changeCity, handleSubmit, currentPosition }) => {
  return (
    <Wrap>
      <form onSubmit={handleSubmit}>
        <WrapInput>
          <Input
            type="search"
            placeholder="Enter a city"
            onChange={changeCity}
          />
          <SearchButton type="submit">Search</SearchButton>
        </WrapInput>
      </form>
      <CurrentButton type="button" onClick={currentPosition}>
        Current
      </CurrentButton>
    </Wrap>
  );
};
