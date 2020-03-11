import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/common/Box';
import {useHistory} from 'react-router-dom';
import {Container, Thumbnail, Name} from './styles';

function CharacterCard({thumbnail, name, id}) {
  const history = useHistory();

  function navigateToCharacterScreen() {
    history.push(`/personagem/${id}`);
  }

  return (
    <Container onClick={navigateToCharacterScreen}>
      <Thumbnail
        src={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`}
      />
      <Box flex>
        <Name>{name}</Name>

        <section>F</section>
      </Box>
    </Container>
  );
}

CharacterCard.propTypes = {
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CharacterCard;
