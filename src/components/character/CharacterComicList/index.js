import React from 'react';
import {useSelector} from 'react-redux';
import {Row, Col} from 'react-flexbox-grid';
import Box from 'components/common/Box';
import Typography from 'components/common/Typography';
import CharacterComicCard from 'components/character/CharacterComicCard';

function CharacterComicList() {
  const comics = useSelector(state => state.character.comics.data?.results);

  if (!comics) {
    return null;
  }

  function renderList() {
    if (comics.length === 0) {
      return <Box>Nenhum</Box>;
    }
    return (
      <Row>
        {comics.map(comic => (
          <Col md={2} xs={6} key={comic.id}>
            <CharacterComicCard
              title={comic.title}
              thumbnail={comic.thumbnail}
            />
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <>
      <Box TitleContainer mb={5}>
        <Typography variant="sectionTitle">Últimos Lançamentos</Typography>
      </Box>

      {renderList()}
    </>
  );
}

export default CharacterComicList;
