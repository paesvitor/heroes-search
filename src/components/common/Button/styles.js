import styled from 'styled-components';
import {prop} from 'styled-tools';

export default styled.button`
  background: ${prop(`theme.palette.primary.main`)};
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  font-size: 16px;
  border: none;

  &:disabled {
    background: #d3d3d3;
  }
`;
