import Dashboard from '../../pages/Dashboard';
import Student from '../pages/Students';

const routes = [
  {
    name: 'Admin Dashboard',
    path: '/admin',
    component: Dashboard,
  },
  {
    name: 'Users',
    path: '/admin/users/student',
    component: Student,
  },
];

export default routes;
