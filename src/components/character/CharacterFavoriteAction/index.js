import React from 'react';
import PropTypes from 'prop-types';
import iconFavorited from 'resources/icons/favorito_01.svg';
import iconFavorite from 'resources/icons/favorito_02.svg';
import characterActions from 'store/modules/character/actions';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from './styles';

function CharacterFavoriteAction({id}) {
  const dispatch = useDispatch();
  const isFavorited = useSelector(state =>
    state.character.favorites.data.find(character => character.id === id),
  );

  function handleFavorite() {
    dispatch(characterActions.favorite({id}));
  }

  return (
    <Button onClick={handleFavorite}>
      <img
        src={isFavorited ? iconFavorited : iconFavorite}
        alt="favorite action"
      />
    </Button>
  );
}

CharacterFavoriteAction.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CharacterFavoriteAction;
