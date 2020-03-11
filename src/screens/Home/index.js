import React from 'react';
import CharacterList from 'components/character/CharacterList';
import Box from 'components/common/Box';
import Logo from 'components/common/Logo';
import SearchBox from 'components/common/SearchBox';

function Home() {
  return (
    <Box container align="center">
      <Box mb={10}>
        <Logo />
      </Box>

      <Box mb={10}>
        <SearchBox />
      </Box>

      <CharacterList />
    </Box>
  );
}

export default Home;
