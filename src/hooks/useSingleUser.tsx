// import { TUser } from '@/types';
// import { callApi } from '@/utilities/functions';
// import { useState, useEffect } from 'react';

// const useSingleUser = (id: unknown) => {
//   const [user, setUser] = useState<TUser | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await callApi('get', `/api/admin/get/user/${id}`);
//         setUser(res.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching user data:', error);

//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchData();
//     }
//   }, [id]);

//   return { user, loading };
// };

// export default useSingleUser;
import { TUser } from '@/types';
import { callApi } from '@/utilities/functions';
import { useState, useEffect, useCallback } from 'react';

const useSingleUser = (id: unknown) => {
  const [user, setUser] = useState<TUser >();
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    if (!id) return;

    setLoading(true);
    try {
      const res = await callApi('get', `/api/admin/get/user/${id}`);
      setUser(res.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { user, loading, refetch: fetchData };
};

export default useSingleUser;
