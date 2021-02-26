import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LoginForm } from '../pages/Form/Login';
import { RegisterForm } from '../pages/Form/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import theme from '../@ui/theme';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import AuthRoute from './components/AuthRoute';
import { SnackbarProvider } from 'notistack';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={3000}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
            <AuthRoute path="/" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
