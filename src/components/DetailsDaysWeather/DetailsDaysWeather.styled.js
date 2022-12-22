import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 24px;
  margin: 0 auto 10px;
  max-width: 750px;
  background: rgba(3, 253, 221, 0.5);
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
  font-family: 'Unbounded';
  font-size: 24px;
  font-weight: 500;
  color: #75059f;
`;

export const TextMin = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgba(28, 28, 28, 0.9);
`;

export const TextMax = styled.p`
  margin: 0;
  margin-bottom: 4px;
  /* font-family: 'Unbounded'; */
  font-size: 18px;
  font-weight: 500;
  color: rgba(28, 28, 28, 0.8);
`;
export const Text = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-family: 'Unbounded';
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  color: rgba(28, 28, 28, 0.8);
`;
