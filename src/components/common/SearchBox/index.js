import React, {useState, useEffect, useRef} from 'react';
import Icon from 'components/common/Icon';
import Box from 'components/common/Box';
import {useDispatch, useSelector} from 'react-redux';
import characterActions from 'store/modules/character/actions';
import {useHistory} from 'react-router-dom';
import {Container, Input} from './styles';

function SearchBox() {
  const activeQuery = useSelector(state => state.character.filter.query);
  const isInitialMount = useRef(true);
  const dispatch = useDispatch();
  const [query, setQuery] = useState(activeQuery || '');
  const history = useHistory();

  function redirectToResults() {
    if (history.location.pathname !== '/') {
      history.push('/');
    }
  }

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (query.length > 0) {
      const timeout = setTimeout(() => {
        dispatch(characterActions.list({params: {nameStartsWith: query}}));
        redirectToResults();
      }, 500);

      return () => clearTimeout(timeout);
    } else {
      dispatch(characterActions.list());
    }
  }, [query]);

  return (
    <Container>
      <Box mr={3} mt={2} ml={2}>
        <Icon name="search" />
      </Box>

      <Input
        data-testid="search-box-input"
        placeholder="Procure por Heróis"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </Container>
  );
}

export default SearchBox;
