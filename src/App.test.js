import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './redux/reducers/root';

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

test('renders main content on app', () => {
  renderWithRedux(<App />);

  const element = screen.getByTestId('main-page');
  expect(element).toBeInTheDocument();
});
