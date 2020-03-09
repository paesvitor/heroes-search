import React, {useEffect} from 'react';
import CharacterCard from 'components/character/CharacterCard';
import {useDispatch, useSelector} from 'react-redux';
import characterActions from 'store/modules/character/actions';
import {Row, Col} from 'react-flexbox-grid';
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
    <Row>
      {characterList.data.results.map(character => (
        <Col md={3} sm={6}>
          <Box mb={5} p={5}>
            <CharacterCard
              key={character.id}
              thumbnail={character.thumbnail}
              name={character.name}
            />
          </Box>
        </Col>
      ))}
    </Row>
  );
}

export default CharacterList;
