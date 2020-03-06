import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import characterActions from 'store/modules/character/actions';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(characterActions.list());
  }, []);

  return <section>Home</section>;
}

export default Home;
