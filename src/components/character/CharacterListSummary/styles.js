import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  padding: 0px ${({theme}) => theme.makeSpacing(5)};
  margin-bottom: ${({theme}) => theme.makeSpacing(5)};
  align-items: center;
`;

export const SearchTotal = styled.p`
  flex: 1;
  color: #c4c4c4;
`;
