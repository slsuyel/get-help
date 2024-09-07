import { useState, useEffect } from 'react';
import { callApi } from '@/utilities/functions';
import { TAgent } from '@/types';

const AllAgent = () => {
  const [agents, setAgents] = useState<TAgent[]>([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await callApi('get', '/api/admins');
        setAgents(res.data);
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="table-responsive rounded">
      <table className="table table-striped fs-3 table-bordered text-capitalize text-nowrap">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Role</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {agents?.map(agent => (
            <tr key={agent.id}>
              <td>{agent.id}</td>
              <td>{agent.name}</td>
              <td>{agent.location ?? 'N/A'}</td>
              <td>{agent.role}</td>
              <td>{agent.email}</td>
              <td>
                <button className="btn btn-danger fs-4 fw-normal p-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAgent;
