import React from 'react';
import { Redirect } from 'react-router-dom';

const AuthRoute = ({ component, ...rest }) => {
  const token = localStorage.getItem('token');
  const Component = component;

  return token ? <Component {...rest} /> : <Redirect to="/login" />;
};

export default AuthRoute;
