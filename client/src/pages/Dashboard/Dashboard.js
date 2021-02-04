import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { DashboardWrapper, DashboardBody } from './Dashboard.style';
import { Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Home from '../Home/Home';
import Teacher from '../Teachers/Teachers';
import Assignments from '../Assignments/Assignments';
import Routine from '../Routine/Routine';
import NotFound from '../../components/NotFound';
import Student from '../Students/Students';
import AuthRoute from '../../components/AuthRoute';
const Dashboard = () => {
  const role = localStorage.getItem('role');
  return (
    <React.Fragment>
      <Navbar />
      <DashboardWrapper>
        <Sidebar />
        <DashboardBody>
          {role === 'Admin' ? (
            <Switch>
              <AuthRoute path="/admin/dashboard" component={Home} />
              <AuthRoute path="/admin/users/teacher" component={Teacher} />
              <AuthRoute path="/admin/users/student" component={Student} />
              <AuthRoute path="/admin/assignments" component={Assignments} />
              <AuthRoute path="/admin/routine" component={Routine} />

              <AuthRoute component={NotFound} />
            </Switch>
          ) : (
            <Switch>
              <AuthRoute path="/dashboard/home" component={Home} />
              <AuthRoute path="/dashboard/users/teacher" component={Teacher} />
              <AuthRoute
                path="/dashboard/assignments"
                component={Assignments}
              />
              <AuthRoute path="/dashboard/routine" component={Routine} />
              <AuthRoute path="/dashboard/users/student" component={Student} />
              <AuthRoute component={NotFound} />
            </Switch>
          )}
        </DashboardBody>
      </DashboardWrapper>
    </React.Fragment>
  );
};

export default Dashboard;
