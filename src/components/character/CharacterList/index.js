import React, {useEffect} from 'react';
import CharacterCard from 'components/character/CharacterCard';
import {useDispatch, useSelector} from 'react-redux';
import characterActions from 'store/modules/character/actions';
import Box from 'components/common/Box';

function CharacterList() {
  const dispatch = useDispatch();
  const characterList = useSelector(state => state.character.list);

  useEffect(() => {
    dispatch(characterActions.list());
  }, [dispatch]);

  if (characterList.loading) {
    return <section>Carregando</section>;
  }

  if (!characterList.data.results) {
    return null;
  }

  return (
    <Box grid>
      {characterList.data.results.map(character => (
        <Box gridItem col={3} textAlign="center">
          <Box p={5} mb={5}>
            <CharacterCard
              key={character.id}
              thumbnail={character.thumbnail}
              name={character.name}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default CharacterList;
