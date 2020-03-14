import React from 'react';
import Box from 'components/common/Box';
import Typography from 'components/common/Typography';
import Icon from 'components/common/Icon';
import {useSelector} from 'react-redux';

function CharacterSummary() {
  const characterResult = useSelector(
    state => state.character.show?.data?.results || [],
  );
  const character = characterResult[0];

  if (!character) {
    return null;
  }

  const {description, name} = character;

  return (
    <Box Container flex flexWrap="wrap">
      <Box ContentContainer flex={1} flexDirection="column" mr={5}>
        {/* Header */}
        <Box HeaderContainer flex mb={5}>
          <Box TitleContainer flex={1}>
            <Typography variant="mainTitle" textTransform="uppercase">
              {name}
            </Typography>
          </Box>

          <Box IconContainer>
            <Icon name="favorite" />
          </Box>
        </Box>

        <Box Description mb={5}>
          {description || 'Nenhuma descrição'}
        </Box>

        <Box StatisticsContainer flex>
          <Box Statistic mr={5}>
            <Box LabelContainer mb={3}>
              <Typography variant="label">Quadrinhos</Typography>
            </Box>
            <Box Text flex>
              <Box IconContainer mr={3}>
                <Icon name="comics" />
              </Box>
              <Typography>{character.comics.available}</Typography>
            </Box>
          </Box>

          <Box Statistic>
            <Box LabelContainer mb={3}>
              <Typography variant="label">Filmes</Typography>
            </Box>
            <Box Text flex>
              <Box IconContainer mr={3}>
                <Icon name="trailer" />
              </Box>
              <Typography>{character.series.available}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box ImageContainer flex={1} justifyContent="center">
        <img
          src={`${character.thumbnail.path}/detail.${character.thumbnail.extension}`}
          alt={character.name}
          style={{minWidth: '100%'}}
        />
      </Box>
    </Box>
  );
}

export default CharacterSummary;
