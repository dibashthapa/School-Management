import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import publicRoutes from '../../Public/config/routes';
import PrivateRoute from '../components/PrivateRoute';
const Routes = () => (
  <BrowserRouter>
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact
          key={route.path}
        />
      ))}
      <Route path="/" component={PrivateRoute} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
