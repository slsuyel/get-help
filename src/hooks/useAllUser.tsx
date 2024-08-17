/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';
import { callApi } from '@/utilities/functions';
import { TypeDataForm } from '@/types';

interface UseAllUserResult {
  data: TypeDataForm[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}

const useAllUser = (
  category?: string,
  status?: string,
  religion?: string,
  education?: string,
  text?: string
): UseAllUserResult => {
  const [data, setData] = useState<TypeDataForm[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const baseUrl = '/api/all/users/list';
  const queryParams = [
    category && `category=${category}`,
    status && `status=${status}`,
    religion && `religion=${religion}`,
    education && `education=${education}`,
    text && `searchText=${text}`,
  ]
    .filter(Boolean)
    .join('&');

  const url = `${baseUrl}${queryParams ? '?' : ''}${queryParams}`;
  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await callApi('GET', url);
      setData(response.data);
    } catch (error) {
      setIsError(true);
      console.error('Error fetching user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, status]);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, isError, refetch };
};

export default useAllUser;
