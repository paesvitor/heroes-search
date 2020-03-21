import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import characterActions from 'store/modules/character/actions';
import Box from 'components/common/Box';
import Button from 'components/common/Button';

function CharacterListPaginate() {
  const dispatch = useDispatch();
  const characterList = useSelector(state => state.character.list);

  function handleLoadNextPage() {
    dispatch(
      characterActions.list({
        params: {offset: characterList.data?.offset + 20},
      }),
    );
  }

  function handleLoadPreviousPage() {
    dispatch(
      characterActions.list({
        params: {offset: characterList.data?.offset - 20},
      }),
    );
  }

  return (
    <Box flex justifyContent="center">
      <Button
        disabled={characterList.data.offset === 0}
        onClick={handleLoadPreviousPage}
        type="button">
        Página Anterior
      </Button>

      <Box mr={3} />

      <Button onClick={handleLoadNextPage} type="button">
        Próxima página
      </Button>
    </Box>
  );
}

export default CharacterListPaginate;
