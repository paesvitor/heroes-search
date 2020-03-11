import React from 'react';
import CharacterList from 'components/character/CharacterList';
import Box from 'components/common/Box';
import Logo from 'components/common/Logo';
import SearchBox from 'components/common/SearchBox';
import {Title, Text} from './styles';

function Home() {
  return (
    <Box container align="center">
      <Box mb={10} flex justifyContent="center">
        <Logo />
      </Box>

      <Box mb={10}>
        <Title>Explore o universo</Title>
        <Text>
          Mergulhe no dominio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que descobrirá em breve!
        </Text>
      </Box>

      <Box mb={10}>
        <SearchBox />
      </Box>

      <CharacterList />
    </Box>
  );
}

export default Home;
