import {prop} from 'styled-tools';
import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  display: flex;
`;

export const FilterOption = styled.section`
  display: flex;
  align-items: center;
`;

export const SwitchContainer = styled.section`
  margin: 0px ${({theme}) => theme.makeSpacing(4)};
`;

export const FilterOptionIcon = styled.section`
  margin-right: ${({theme}) => theme.makeSpacing(2)};
`;

export const FilterOptionLabel = styled.section`
  color: ${prop('theme.palette.primary.main')};

  ${media.lessThan('medium')`
    display: none;
  `}
`;
