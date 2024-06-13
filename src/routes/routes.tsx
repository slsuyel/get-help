import MainLayout from '@/components/layouts/MainLayout';
import AdminLayout from '@/components/layouts/admin/AdminLayout';
import ErrorPage from '@/components/reusable/ErrorPage';
import UnderConstruction from '@/components/reusable/UnderConstruction';
import AdminCheck from '@/hooks/AdminCheck';

import UserCheck from '@/hooks/UserCheck';

// import Home from '@/pages/Home/Home';
import NewHome from '@/pages/Home/NewHome';
import EditProfile from '@/pages/Profile/EditProfile';
import Profile from '@/pages/Profile/Profile';
import Student from '@/pages/Student/Student';
import PhoneVerify from '@/pages/Verify/PhoneVerify';
import AdminLogin from '@/pages/auth/AdminLogin';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import ResetPassword from '@/pages/auth/ResetPassword';
import AllUsers from '@/pages/dashboard/AllUsers';
import Dhome from '@/pages/dashboard/Dhome';
import UserData from '@/pages/dashboard/UserData';
import UserTable from '@/pages/dashboard/UserTable';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <NewHome />,
      },
      {
        path: '/students',
        element: <Student />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/admin-login',
        element: <AdminLogin />,
      },
      {
        path: '/reset-pass',
        element: <ResetPassword />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/verify',
        element: <PhoneVerify />,
      },
      {
        path: '/profile',
        element: (
          <UserCheck>
            {' '}
            <Profile />
          </UserCheck>
        ),
      },
      {
        path: '/edit-profile/:id',
        element: (
          <UserCheck>
            <EditProfile />
          </UserCheck>
        ),
      },
    ],
  },

  {
    path: 'admin',
    element: (
      <AdminCheck>
        <AdminLayout />
      </AdminCheck>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Dhome />,
      },
      {
        path: 'all-users',
        element: <AllUsers />,
      },

      {
        path: ':category/:status',
        element: <UserTable />,
      },
      {
        path: 'user/:id',
        element: <UserData />,
      },
      {
        path: 'settings',
        element: <UnderConstruction />,
      },
    ],
  },
]);

export default router;
