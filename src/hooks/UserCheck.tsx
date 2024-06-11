import { callApi } from '@/utilities/functions';
import { ReactNode, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router';

const UserCheck = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkUserAuthentication = async () => {
      const token = localStorage.getItem('token')!;

      if (!token) {
        setAuthenticated(false);
        setLoading(false);
        return;
      }
      try {
        const response = await callApi('POST', '/api/user/check/login', {
          token,
        });

        if (response.message == 'Token is valid') {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (error) {
        setAuthenticated(false);
      }
      setLoading(false);
    };

    checkUserAuthentication();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return authenticated ? children : <Navigate to="/login" />;
};

export default UserCheck;
