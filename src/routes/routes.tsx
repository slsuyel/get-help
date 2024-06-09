import MainLayout from '@/components/layouts/MainLayout';
import AdminLayout from '@/components/layouts/admin/AdminLayout';
import ErrorPage from '@/components/reusable/ErrorPage';

// import Home from '@/pages/Home/Home';
import NewHome from '@/pages/Home/NewHome';
import EditProfile from '@/pages/Profile/EditProfile';
import Profile from '@/pages/Profile/Profile';
import Student from '@/pages/Student/Student';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
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
        path: '/register',
        element: <Register />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/edit-profile',
        element: <EditProfile />,
      },
    ],
  },
  // {
  //   path: 'profile',
  //   element: <AdminLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: '',
  //       element: <Login />,
  //     },
  //     {
  //       path: 'register',
  //       element: <Register />,
  //     },
  //   ],
  // },
  {
    path: 'admin',
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
