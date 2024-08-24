/* eslint-disable @typescript-eslint/no-explicit-any */
import { TDecision } from '@/types';
import { callApi } from '@/utilities/functions';
import { useEffect, useState } from 'react';

const useAllDecision = () => {
  const [data, setData] = useState<TDecision[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await callApi('GET', '/api/decisions');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching decision data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, refetch };
};

export default useAllDecision;
