import { callApi } from '@/utilities/functions';
import { useQuery } from 'react-query';

const useAllUser = () => {
  const {
    data: data = [],
    isLoading,
    isError,
    refetch,
  } = useQuery('data', fetchData);

  async function fetchData() {
    try {
      const response = await callApi('GET', `/api/all/users/list`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching news data');
    }
  }

  return { data, isLoading, isError, refetch };
};

export default useAllUser;
