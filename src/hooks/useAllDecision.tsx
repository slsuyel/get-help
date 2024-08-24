/* eslint-disable @typescript-eslint/no-explicit-any */
import { TDecision } from '@/types';
import { callApi } from '@/utilities/functions';
import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const useAllDecision = () => {
  const location = useLocation();
  const [data, setData] = useState<TDecision[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const determineEndpoint = (pathname: string): string => {
    switch (pathname) {
      case '/dashboard/application/approved':
        return '/api/decisions/status/approved';
      case '/dashboard/application/rejected':
        return '/api/decisions/status/reject';
      case '/dashboard/application/pending':
        return '/api/decisions/status/pending';
      case '/dashboard/application/all':
      default:
        return '/api/decisions';
    }
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await callApi(
        'GET',
        determineEndpoint(location.pathname)
      );
      setData(response.data);
    } catch (error: any) {
      console.error('Error fetching decision data:', error.message || error);
    } finally {
      setIsLoading(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, refetch };
};

export default useAllDecision;
