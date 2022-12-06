import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-width: 700px;
  margin: 50px auto 0;
  background: rgba(3, 253, 221, 0.1);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 24px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const List = styled.div`
  display: flex;
  gap: 24px;
  list-style-type: none;
`;
