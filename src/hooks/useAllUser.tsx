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
  religion?: string,
  education?: string,
  text?: string,
  country?: string
): UseAllUserResult => {
  const [data, setData] = useState<TypeDataForm[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const baseUrl = '/api/all/users/list';
  const queryParams = [
    category && `category=${category}`,
    religion && `religion=${religion}`,
    education && `education=${education}`,
    text && `searchText=${text}`,
    country && `country=${country}`,
  ]
    .filter(Boolean)
    .join('&');

  const url = `${baseUrl}${queryParams ? '?' : ''}${queryParams}`;

  useEffect(() => {
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

    fetchData();
  }, [category, religion, education, text, url]);

  const refetch = () => {
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

    fetchData();
  };

  return { data, isLoading, isError, refetch };
};

export default useAllUser;
