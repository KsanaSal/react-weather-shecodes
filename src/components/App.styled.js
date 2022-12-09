import styled from 'styled-components';

export const Caption = styled.h1`
  margin: 0;
  margin-top: 20px;
  text-align: center;
  font-size: 80px;
  font-weight: 700;
  color: #75059f;
  text-shadow: 5px 3px 3px rgba(117, 5, 159, 0.4);
`;
export const Text = styled.span`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: rgba(28, 28, 28, 0.7);
`;
export const Link = styled.a`
  text-decoration: none;
  color: #d45e09;
  text-shadow: 3px 3px 2px rgba(212, 94, 9, 0.3);

  &:hover {
    text-decoration: underline;
    color: #75059f;
    text-shadow: 3px 3px 2px rgba(117, 5, 159, 0.3);
  }
`;
