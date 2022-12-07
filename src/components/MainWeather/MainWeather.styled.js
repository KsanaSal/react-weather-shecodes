import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
`;

export const Caption = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 700;
  color: #75059f;
  text-shadow: 5px 3px 3px rgba(117, 5, 159, 0.4);
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 4px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(28, 28, 28, 0.7);
`;

export const Temperature = styled.span`
  font-size: 64px;
  font-weight: 500;
  color: #75059f;
  text-shadow: 5px 3px 3px rgba(117, 5, 159, 0.4);
`;

export const Span = styled.span`
  padding-top: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #1c1c1c;
`;

export const Wrapped = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Heading = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: rgba(28, 28, 28, 0.7);
`;

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgba(28, 28, 28, 0.7);
`;
