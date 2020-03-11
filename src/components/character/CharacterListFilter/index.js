import React, {useState} from 'react';
import Icon from 'components/common/Icon';
import toggleAlphabeticImage from 'resources/images/common/toggle_off.svg';
import toggleFavoriteImage from 'resources/images/common/toggle_on.svg';
import {
  Container,
  FilterOption,
  FilterOptionLabel,
  SwitchContainer,
  FilterOptionIcon,
} from './styles';

function CharacterListFilter() {
  const [activeFilter, setActiveFilter] = useState('alphabetic');

  return (
    <Container>
      <FilterOption onClick={() => setActiveFilter('alphabetic')}>
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

      <FilterOption onClick={() => setActiveFilter('favorites')}>
        <FilterOptionIcon>
          <Icon name="favorite" />
        </FilterOptionIcon>

        <FilterOptionLabel>Somente Favoritos</FilterOptionLabel>
      </FilterOption>
    </Container>
  );
}

export default CharacterListFilter;
