import React, {useEffect} from 'react';
import CharacterCard from 'components/character/CharacterCard';
import {useDispatch, useSelector} from 'react-redux';
import characterActions from 'store/modules/character/actions';
import {Row, Col} from 'react-flexbox-grid';
import CharacterListSummary from 'components/character/CharacterListSummary';
import CharacterListPaginate from 'components/character/CharacterListPaginate';

function CharacterList() {
  const dispatch = useDispatch();
  const characterList = useSelector(state => state.character.list);

  useEffect(() => {
    if (!characterList.data?.results) {
      dispatch(characterActions.list());
    }
  }, [dispatch]);

  if (characterList.loading) {
    return <section>Carregando</section>;
  }

  if (!characterList.data.results) {
    return null;
  }

  return (
    <>
      <CharacterListSummary />

      <Row>
        {characterList.data.results.map(character => (
          <Col md={3} sm={6} key={character.id}>
            <CharacterCard
              id={character.id}
              thumbnail={character.thumbnail}
              name={character.name}
            />
          </Col>
        ))}
      </Row>

      <CharacterListPaginate />
    </>
  );
}

export default CharacterList;
