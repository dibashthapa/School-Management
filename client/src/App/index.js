import React from 'react';
import { ThemeProvider } from 'styled-components';
import store from './store';
import theme from '../@ui/theme';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import AuthProvider from './auth';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AuthProvider>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            autoHideDuration={3000}
          >
            <Routes />
          </SnackbarProvider>
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
