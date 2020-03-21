import React, {useEffect, useState} from 'react';
import CharacterCard from 'components/character/CharacterCard';
import {useDispatch, useSelector} from 'react-redux';
import characterActions from 'store/modules/character/actions';
import {Row, Col} from 'react-flexbox-grid';
import CharacterListSummary from 'components/character/CharacterListSummary';
import CharacterListPaginate from 'components/character/CharacterListPaginate';

function CharacterList() {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState('alphabetic');
  const characterList = useSelector(
    state => state.character.list.data?.results,
  );
  const characterFavoriteList = useSelector(state => state.character.favorites);
  const loading = useSelector(state => state.character.list.loading);
  const activeList =
    activeFilter === 'alphabetic' ? characterList : characterFavoriteList;

  useEffect(() => {
    if (!characterList) {
      dispatch(characterActions.list());
    }
  }, [dispatch]);

  if (loading) {
    return <section>Carregando</section>;
  }

  return (
    <>
      <CharacterListSummary />

      <Row>
        {activeList.map(character => (
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
