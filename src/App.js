import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import store from './store';

function App() {
  return (
    <StoreProvider store={store}>
      <div>App base</div>
    </StoreProvider>
  );
}

export default App;
