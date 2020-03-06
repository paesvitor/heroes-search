import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import Router from 'router';
import {ThemeProvider} from 'styled-components';
import theme from 'resources/theme';
import store from './store';

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
