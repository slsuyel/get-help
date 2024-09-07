import { callApi } from '@/utilities/functions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CreatorsData = () => {
  const id = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await callApi('GET', `/api/users/creator/${id}`);
        // Handle the response data here
        console.log(response);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [id]); // Include `id` in the dependency array

  return (
    <div>
      <h1>This is creatorsData page</h1>
    </div>
  );
};

export default CreatorsData;
