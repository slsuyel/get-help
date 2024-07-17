import { useState, useEffect } from 'react';
import { callApi } from '@/utilities/functions';
import { TAdmin } from '@/types';

const useAdminProfile = () => {
  const [admin, setAdmin] = useState<TAdmin>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await callApi('POST', '/api/admin/check/login', {
          token,
        });

        if (response.status == 200) {
          setAdmin(response.data.admin);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    checkUserAuthentication();
  }, []);

  return { admin, loading };
};

export default useAdminProfile;
