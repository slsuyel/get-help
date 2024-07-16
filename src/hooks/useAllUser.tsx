/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';
import { callApi } from '@/utilities/functions';

const useAllUser = (category: string, status: string, text: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const baseUrl = '/api/all/users/list';
  const queryParams = [
    category && `category=${category}`,
    status && `status=${status}`,
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
