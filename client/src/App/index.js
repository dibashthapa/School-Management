import React from 'react';
import { ThemeProvider } from 'styled-components';
import store from './store';
import theme from '../@ui/theme';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import AuthProvider from './auth';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
