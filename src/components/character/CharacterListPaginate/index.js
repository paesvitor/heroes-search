import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import characterActions from 'store/modules/character/actions';
import Box from 'components/common/Box';

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
      <button
        disabled={characterList.data.offset === 0}
        onClick={handleLoadPreviousPage}
        type="button">
        Página Anterior
      </button>

      <button onClick={handleLoadNextPage} type="button">
        Próxima página
      </button>
    </Box>
  );
}

export default CharacterListPaginate;
