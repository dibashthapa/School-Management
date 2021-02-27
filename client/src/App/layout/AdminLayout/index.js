import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../auth';

class AdminLayout extends Component {
  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

AdminLayout.contextType = AuthContext;

export default withRouter(AdminLayout);
