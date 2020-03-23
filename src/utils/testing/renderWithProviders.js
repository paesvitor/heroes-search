import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import reducer from 'store/rootReducer';
import theme from 'resources/theme';
import {ThemeProvider} from 'styled-components';

export function renderWithProviders(
  ui,
  {initialState, store = createStore(reducer, initialState)} = {},
) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>{ui}</Provider>
      </ThemeProvider>,
    ),
    store,
  };
}
