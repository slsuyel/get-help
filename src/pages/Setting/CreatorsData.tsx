import Loader from '@/components/reusable/Loader';
import { TUser } from '@/types';
import { callApi } from '@/utilities/functions';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const CreatorsData = () => {
  const { id } = useParams();
  const [creatorData, setCreatorData] = useState<TUser[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const response = await callApi('GET', `/api/users/creator/${id}`);
        setCreatorData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch data'); // Set error state on failure
      } finally {
        setLoading(false); // Set loading to false when fetching ends
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="container mt-5">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  if (creatorData.length === 0) {
    return (
      <div className=" mt-5">
        <p>No creator data available.</p>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <h1 className="mb-4">Creator Data</h1>
      <div className="table-responsive font_amazon">
        <table className="table table-striped fs-3 table-bordered text-capitalize text-nowrap">
          <thead>
            <tr className="text-nowrap">
              <th>Id</th>
              <th>Name</th>
              <th className="d-none d-lg-table-cell text-nowrap">Phone</th>
              <th>Category</th>
              <th>Religion</th>
              <th className="d-none d-lg-table-cell text-nowrap">Education</th>
              <th className="d-none d-lg-table-cell text-nowrap">Address</th>
              <th className="text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="text-center">
                  <Spinner animation="border" />
                </td>
              </tr>
            ) : creatorData ? (
              creatorData.map((user: TUser) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td className="d-none d-lg-table-cell text-nowrap">
                    {user.phone}
                  </td>
                  <td>{user.category}</td>
                  <td>{user.religion}</td>
                  <td className="d-none d-lg-table-cell ">
                    {user.highest_education || user.education_level}
                  </td>
                  <td className="d-none d-lg-table-cell ">
                    {user.current_address}
                  </td>
                  <td className="d-flex gap-2 justify-content-center">
                    <Link
                      to={`/dashboard/user/${user.id}`}
                      className="btn btn-info p-1 px-3 rounded-3 text-white"
                    >
                      <i className="fa-solid fa-eye"></i>
                    </Link>
                    <Link
                      to={`/dashboard/edit/${user.id}`}
                      className="btn btn-success p-1 px-3 rounded-3 text-white"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <Link
                      to={`/dashboard/applications/${user.id}`}
                      className="btn btn-primary p-1 px-3 rounded-3 text-white"
                    >
                      <i className="fa-regular fa-rectangle-list"></i>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatorsData;
