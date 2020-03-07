import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import Router from 'router';
import {ThemeProvider} from 'styled-components';
import theme from 'resources/theme';
import store from './store';
import GlobalStyles from './resources/globalStyles';

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
