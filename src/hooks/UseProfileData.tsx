import { useState, useEffect } from 'react';
import { callApi } from '../utilities/functions';

const UseProfileData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await callApi('GET', `/api/user-access`);

        setData(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading };
};

export default UseProfileData;
