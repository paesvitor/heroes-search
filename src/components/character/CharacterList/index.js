import React, {useEffect} from 'react';
import CharacterCard from 'components/character/CharacterCard';
import {useDispatch, useSelector} from 'react-redux';
import characterActions from 'store/modules/character/actions';
import {Row, Col} from 'react-flexbox-grid';
import CharacterListPaginate from 'components/character/CharacterListPaginate';
import CharacterListFilter from 'components/character/CharacterListFilter';
import Box from 'components/common/Box';
import Typography from 'components/common/Typography';
import EmptyState from './EmptyState';

function CharacterList() {
  const dispatch = useDispatch();
  const activeFilter = useSelector(
    state => state.character.filter.activeFilter,
  );
  const searchTotal = useSelector(state => state.character.list.data.total);
  const characterListData = useSelector(state => state.character.list.data);
  const characterListResults = useSelector(
    state => state.character.list.data?.results,
  );
  const characterFavoriteList = useSelector(
    state => state.character.favorites.data,
  );
  const loading = useSelector(state => state.character.list.loading);
  const activeList =
    activeFilter === 'alphabetic'
      ? characterListResults
      : characterFavoriteList;

  useEffect(() => {
    if (!characterListResults) {
      dispatch(characterActions.list());
    }
  }, [dispatch]);

  if (loading) {
    return <section>Carregando</section>;
  }

  function renderPaginate() {
    if (characterListData.total > 20 && activeFilter === 'alphabetic') {
      return <CharacterListPaginate />;
    }

    return null;
  }

  function renderList() {
    if (activeList.length === 0) {
      return <EmptyState />;
    }
    return activeList.map(character => (
      <Col md={3} sm={6} key={character.id}>
        <CharacterCard
          id={character.id}
          thumbnail={character.thumbnail}
          name={character.name}
        />
      </Col>
    ));
  }

  return (
    <>
      <Box display="flex" alignItems="center" mb={5}>
        <Box flex={1}>
          <Typography>{`${searchTotal} Heróis encontrados`}</Typography>
        </Box>

        <Box>
          <CharacterListFilter />
        </Box>
      </Box>

      <Row>{renderList()}</Row>

      {renderPaginate()}
    </>
  );
}

export default CharacterList;
