import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import HomeScreen from 'screens/Home';
import CharacterScreen from 'screens/Character';

// Components
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/personagem/:id" component={CharacterScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
