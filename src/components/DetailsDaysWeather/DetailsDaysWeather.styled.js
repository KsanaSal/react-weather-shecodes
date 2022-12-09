import styled from 'styled-components';

export const Wrap = styled.div`
  /* display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between; */
  padding: 24px;
  margin: 0 auto 24px;
  max-width: 700px;
  background: rgba(3, 253, 221, 0.1);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 24px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  text-align: center;
  list-style-type: none;
  padding: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;
  color: #75059f;
`;
export const TextMin = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgba(28, 28, 28, 0.7);
`;

export const TextMax = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: rgba(28, 28, 28, 0.7);
`;
