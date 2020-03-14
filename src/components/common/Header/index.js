import React from 'react';
import Logo from 'components/common/Logo';
import SearchBox from 'components/common/SearchBox';
import Box from 'components/common/Box';

function Header() {
  return (
    <Box Container flex alignItems="center">
      <Logo variant="small" />

      <SearchBox />
    </Box>
  );
}

export default Header;
