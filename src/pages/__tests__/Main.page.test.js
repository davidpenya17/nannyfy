import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers/root';
import Main from '../Main.page';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

describe('Main Page Tests', () => {
  let renderWithRedux;

  beforeEach(() => {
    renderWithRedux = (
      component,
      { initialState, store = createStore(rootReducer, initialState) } = {}
    ) => ({
      ...render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>{component}</ThemeProvider>
        </Provider>
      ),
      store,
    });
  });

  it('should render main page', () => {
    renderWithRedux(<Main />);

    const element = screen.getByTestId('main-page');
    expect(element).toBeInTheDocument();
  });
});
