import {prop} from 'styled-tools';
import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  background-color: ${prop('theme.palette.primary.light')};
  border-radius: 999px;
  padding: 0px ${({theme}) => theme.makeSpacing(5)};
  display: flex;
  align-items: center;
  margin: 0 auto;

  ${media.greaterThan('medium')`
    width: 80%;
  `}
`;

export const Input = styled.input`
  flex: 1;
  padding: ${({theme}) => theme.makeSpacing(6)};
  background: none;
  border: none;
  font-size: 15px;
  &:focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    color: ${prop('theme.palette.primary.main')};
  }
`;
