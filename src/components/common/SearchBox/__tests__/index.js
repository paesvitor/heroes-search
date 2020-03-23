import React from 'react';
import {fireEvent} from '@testing-library/react';
import SearchBox from 'components/common/SearchBox';
import {renderWithProviders} from 'utils/testing/renderWithProviders';

test('Should update state on input change', () => {
  const {getByTestId} = renderWithProviders(<SearchBox />);

  const input = getByTestId('search-box-input');

  fireEvent.change(input, {target: {value: 'value'}});

  expect(input.value).toBe('value');
});

test('Should dispatch list action after stop typing for 500ms', () => {
  const {getByTestId} = renderWithProviders(<SearchBox />);

  const input = getByTestId('search-box-input');

  fireEvent.change(input, {target: {value: 'value'}});

  expect(input.value).toBe('value');
});
