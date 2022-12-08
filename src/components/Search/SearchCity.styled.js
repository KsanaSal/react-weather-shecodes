import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
`;

export const Input = styled.input`
  color: #010101;
  padding: 4px;
  outline: none;
  border: 2px solid #75059f;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  min-height: 30px;
  width: 250px;
  font-size: 18px;

  &:focus {
    outline: none;
    border-color: #80a3f9;
    box-shadow: 0 0 10px #80a3f9;
    background-color: #fff;
  }
`;

export const SearchButton = styled.button`
  min-width: 70px;
  padding: 8px;
  font-size: 20px;
  border: 2px solid #75059f;
  border-radius: 4px;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.4);
  background-color: #fdebde;
  cursor: pointer;
  color: #1c1c1c;

  &:hover {
    color: #e4fdfb;
    background-color: #75059f;
  }
`;

export const CurrentButton = styled.button`
  min-width: 70px;
  padding: 8px;
  font-size: 20px;
  border: 2px solid #d45e09;
  border-radius: 4px;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.4);
  background-color: #f8effd;
  cursor: pointer;
  color: #1c1c1c;

  &:hover {
    color: #e4fdfb;
    background-color: #d45e09;
  }
`;
