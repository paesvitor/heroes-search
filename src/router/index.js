import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import HomeScreen from 'screens/Home';

// Components
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
