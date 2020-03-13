import React from 'react';
import Logo from 'components/common/Logo';
import SearchBox from 'components/common/SearchBox';
import {Container} from './styles';

function Header() {
  return (
    <Container>
      <Logo variant="small" />

      <SearchBox />
    </Container>
  );
}

export default Header;
