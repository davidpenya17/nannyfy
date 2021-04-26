import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import theme from './styles/theme/index';
import Main from './pages/Main.page';
import GlobalStyles from './styles/globalStyles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
