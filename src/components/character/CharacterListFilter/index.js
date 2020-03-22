import React from 'react';
import Icon from 'components/common/Icon';
import toggleAlphabeticImage from 'resources/images/common/toggle_off.svg';
import toggleFavoriteImage from 'resources/images/common/toggle_on.svg';
import characterActions from 'store/modules/character/actions';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  FilterOption,
  FilterOptionLabel,
  SwitchContainer,
  FilterOptionIcon,
} from './styles';

function CharacterListFilter() {
  const disptach = useDispatch();
  const activeFilter = useSelector(
    state => state.character.filter.activeFilter,
  );

  function handleHandleFilter(filter) {
    disptach(characterActions.filter(filter));
  }

  return (
    <Container>
      <FilterOption onClick={() => handleHandleFilter('alphabetic')}>
        <FilterOptionIcon>
          <Icon name="hero" />
        </FilterOptionIcon>

        <FilterOptionLabel>Ordenar por nome - A/Z</FilterOptionLabel>
      </FilterOption>

      <SwitchContainer>
        <img
          src={
            activeFilter === 'alphabetic'
              ? toggleAlphabeticImage
              : toggleFavoriteImage
          }
          alt="Switch"
        />
      </SwitchContainer>

      <FilterOption onClick={() => handleHandleFilter('favorites')}>
        <FilterOptionIcon>
          <Icon name="favorite" />
        </FilterOptionIcon>

        <FilterOptionLabel>Somente Favoritos</FilterOptionLabel>
      </FilterOption>
    </Container>
  );
}

export default CharacterListFilter;
