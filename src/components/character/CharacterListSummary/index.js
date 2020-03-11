import React from 'react';
import {useSelector} from 'react-redux';
import CharacterListFilter from 'components/character/CharacterListFilter';
import {Container, SearchTotal} from './styles';

function CharacterListSummary() {
  const searchTotal = useSelector(state => state.character.list.data.total);

  return (
    <Container>
      <SearchTotal>{`Encontrado ${searchTotal} heróis`}</SearchTotal>

      <CharacterListFilter />
    </Container>
  );
}

export default CharacterListSummary;
