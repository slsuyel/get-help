import { TypeDataForm } from '@/types';
import { callApi } from '@/utilities/functions';
import { useState, useEffect } from 'react';

const useSingleUser = (id: unknown) => {
  const [user, setUser] = useState<TypeDataForm | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await callApi('get', `/api/admin/get/user/${id}`);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);

        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return { user, loading };
};

export default useSingleUser;
