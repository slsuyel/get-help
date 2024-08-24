import { TDecision } from '@/types';
import { callApi } from '@/utilities/functions';
import { useState, useEffect, useCallback } from 'react';

const useSingleDecision = (id: number) => {
  const [decision, setDecision] = useState<TDecision | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    if (!id) return;

    setLoading(true);
    try {
      const res = await callApi('get', `/api/decisions/${id}`);
      setDecision(res.data);
    } catch (error) {
      console.error('Error fetching decision data:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { decision, loading, refetch: fetchData };
};

export default useSingleDecision;
