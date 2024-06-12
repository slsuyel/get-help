import { useState, useEffect } from 'react';
import { callApi } from '@/utilities/functions';

const useLoggedIn = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setAuthenticated(false);
        setLoading(false);
        return;
      }
      try {
        /* /api/user/check/login */
        const response = await callApi('POST', '/api/user/check/login', {
          token,
        });
        /* data
: 
{message: 'Token is valid', user: {…}} */
        console.log(response);

        if (response.data.message === 'Token is valid') {
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

  return { authenticated, loading };
};

export default useLoggedIn;
