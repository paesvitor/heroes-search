import {prop} from 'styled-tools';
import styled from 'styled-components';

export const Container = styled.section``;

export const Thumbnail = styled.img`
  border-bottom: 5px solid ${prop('theme.palette.primary.dark')};
  margin-bottom: ${({theme}) => theme.makeSpacing(3)};
  min-width: 100%;
`;

export const Name = styled.section`
  font-weight: bold;
  color: #404040;
  flex: 1;
  text-align: left;
`;
