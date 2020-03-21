import React from 'react';
import PropTypes from 'prop-types';
import iconFavorite from 'resources/icons/favorito_01.svg';
import characterActions from 'store/modules/character/actions';
import {useDispatch} from 'react-redux';
import {Button} from './styles';

function CharacterFavoriteAction({id}) {
  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(characterActions.favorite({id}));
  }

  return (
    <Button onClick={handleFavorite}>
      <img src={iconFavorite} alt="favorite action" />
    </Button>
  );
}

CharacterFavoriteAction.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CharacterFavoriteAction;
