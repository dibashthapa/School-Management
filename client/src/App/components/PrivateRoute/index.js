import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { AuthConsumer, AuthContext } from '../../auth';
import AdminLayout from '../../layout/AdminLayout';
import dashboardRoutes from '../../../Admin/config/routes';

class PrivateRoute extends Component {
  render() {
    return (
      <AuthConsumer>
        {(authContext) =>
          authContext?.isUserLoggedIn ? (
            <AdminLayout>
              <Switch>
                {dashboardRoutes.map((route) => (
                  <Route
                    key={route.name}
                    path={route.path}
                    exact={true}
                    component={route.component}
                  />
                ))}
              </Switch>
            </AdminLayout>
          ) : (
            <Redirect to="/login" />
          )
        }
      </AuthConsumer>
    );
  }
}
PrivateRoute.contextType = AuthContext;
export default PrivateRoute;
