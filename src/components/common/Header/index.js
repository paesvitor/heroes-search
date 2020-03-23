import React from 'react';
import Logo from 'components/common/Logo';
import SearchBox from 'components/common/SearchBox';
import Box from 'components/common/Box';

function Header() {
  return (
    <Box
      Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap">
      <Logo variant="small" />

      <Box flex={1}>
        <SearchBox />
      </Box>
    </Box>
  );
}

export default Header;
