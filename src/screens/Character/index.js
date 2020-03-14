import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import characterActions from 'store/modules/character/actions';
import Box from 'components/common/Box';
import Header from 'components/common/Header';
import {useParams} from 'react-router-dom';
import CharacterSummary from 'components/character/CharacterSummary';
import CharacterComicList from 'components/character/CharacterComicList';

function CharacterScreen() {
  const dispatch = useDispatch();
  const loadingShow = useSelector(state => state.character.show.loading);
  const params = useParams();

  useEffect(() => {
    dispatch(characterActions.show({id: params.id}));
    dispatch(characterActions.show({id: params.id, action: 'comics'}));
  }, [dispatch]);

  if (loadingShow) {
    return <section>Carregando...</section>;
  }

  return (
    <Box container>
      <Box HeaderContainer mb={10}>
        <Header />
      </Box>
      <CharacterSummary />
      <CharacterComicList />
    </Box>
  );
}

export default CharacterScreen;
