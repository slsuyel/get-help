import MainLayout from '@/components/layouts/MainLayout';
import AdminLayout from '@/components/layouts/admin/AdminLayout';
import ErrorPage from '@/components/reusable/ErrorPage';

import AdminCheck from '@/hooks/AdminCheck';

// import UserCheck from '@/hooks/UserCheck';
// import Profile from '@/pages/Profile/Profile';

// import Home from '@/pages/Home/Home';
import NewHome from '@/pages/Home/NewHome';
import EditProfile from '@/pages/Profile/EditProfile';
import AllAgent from '@/pages/Setting/AllAgent';
import CreatorsData from '@/pages/Setting/CreatorsData';
import NewAgent from '@/pages/Setting/NewAgent';

// import Student from '@/pages/Student/Student';
// import PhoneVerify from '@/pages/Verify/PhoneVerify';
import AdminLogin from '@/pages/auth/AdminLogin';
// import Login from '@/pages/auth/Login';
// import Register from '@/pages/auth/Register';
import ResetPassword from '@/pages/auth/ResetPassword';
import AllApplications from '@/pages/dashboard/AllApplications/AllApplications';
import AllUsers from '@/pages/dashboard/AllUsers';
import CreateUser from '@/pages/dashboard/CreateUser/CreateUser';
import Decision from '@/pages/dashboard/Decision/Decision';
import SingleDecision from '@/pages/dashboard/Decision/SingleDecision';

import Dhome from '@/pages/dashboard/Dhome';
import MyApplicants from '@/pages/dashboard/MyApplicants/MyApplicants';
import Transaction from '@/pages/dashboard/Transaction/Transaction';
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
      // {
      //   path: '/students',
      //   element: <Student />,
      // },

      {
        path: '/login',
        element: <AdminLogin />,
      },
      {
        path: '/reset-pass',
        element: <ResetPassword />,
      },
      // {
      //   path: '/register',
      //   element: <Register />,
      // },
      // {
      //   path: '/verify',
      //   element: <PhoneVerify />,
      // },
      // {
      //   path: '/profile',
      //   element: (
      //     <UserCheck>
      //       {' '}
      //       <Profile />
      //     </UserCheck>
      //   ),
      // },
      // {
      //   path: '/edit-profile/:id',
      //   element: (
      //     <UserCheck>
      //       <EditProfile />
      //     </UserCheck>
      //   ),
      // },
    ],
  },

  {
    path: 'dashboard',
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
        path: 'my-users',
        element: <MyApplicants />,
      },
      {
        path: 'all-applications',
        element: <AllApplications />,
      },
      {
        path: 'create',
        element: <CreateUser />,
      },
      {
        path: 'application/view/:id',
        element: <SingleDecision />,
      },

      {
        path: ':category/:status',
        element: <UserTable />,
      },
      {
        path: 'application/:status',
        element: <AllApplications />,
      },
      {
        path: 'user/:id',
        element: <UserData />,
      },
      {
        path: 'edit/:id',
        element: <EditProfile />,
      },
      {
        path: 'applications/:id',
        element: <Decision />,
      },
      {
        path: 'transaction/:id',
        element: <Transaction />,
      },
      {
        path: 'setting/agents',
        element: <AllAgent />,
      },
      {
        path: 'setting/new-agent',
        element: <NewAgent />,
      },
      {
        path: 'data/creator/1',
        element: <CreatorsData />,
      },
    ],
  },
]);

export default router;
