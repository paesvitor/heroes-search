import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/common/Box';
import {Container, Thumbnail, Name} from './styles';

function CharacterCard({thumbnail, name}) {
  return (
    <Container>
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
};

export default CharacterCard;
