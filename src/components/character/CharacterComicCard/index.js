import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/common/Box';
import Typography from 'components/common/Typography';

function CharacterComicCard({title, thumbnail}) {
  return (
    <Box Container mb={5}>
      <Box ImageContainer>
        <img
          src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
          alt={title}
          style={{width: '100%'}}
        />
      </Box>

      <Typography variant="label">{title}</Typography>
    </Box>
  );
}

CharacterComicCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterComicCard;
