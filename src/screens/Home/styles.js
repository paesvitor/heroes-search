import styled from 'styled-components';

export const Title = styled.section`
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: ${({theme}) => theme.makeSpacing(3)};
`;

export const Text = styled.p`
  text-align: center;
`;
