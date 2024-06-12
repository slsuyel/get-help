import { callApi } from '@/utilities/functions';
import { useQuery } from 'react-query';

const useAllUser = (category = '', status = '') => {
  async function fetchData() {
    try {
      const response = await callApi(
        'GET',
        `/api/all/users/list?category=${category}&status=${status}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Error fetching user data');
    }
  }

  const {
    data = [],
    isLoading,
    isError,
    refetch,
  } = useQuery(['data', category, status], fetchData);

  return { data, isLoading, isError, refetch };
};

export default useAllUser;
