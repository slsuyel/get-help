import BackBtn from '@/components/reusable/BackBtn';

import { callApi } from '@/utilities/functions';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface UserData {
  [key: string]: string;
}

const UserData = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState<UserData>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await callApi('get', `/api/admin/get/user/${id}`);
        setUserData(res.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="font_amazon">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="align-items-center d-flex flex-wrap justify-content-between my-5">
            <BackBtn />
            <Link
              to={`/dashboard/applications/${userData.id}`}
              className="btn btn-primary p-1 px-3 rounded-3 text-white"
            >
              See All Decisions {userData.name}
            </Link>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <tbody>
                {Object.entries(userData).map(
                  ([key, value]) =>
                    key !== 'created_at' &&
                    key !== 'updated_at' &&
                    key !== 'decisions' &&
                    key !== 'status' &&
                    key !== 'email' &&
                    (typeof value === 'string' ||
                      typeof value === 'number') && (
                      <tr key={key}>
                        <th
                          className="text-capitalize fs-4 my-2 py-3 ps-3"
                          style={{ width: '30%' }}
                        >
                          {key.replace(/_/g, ' ')}
                        </th>
                        <td className="ps-3 fs-4 text-capitalize">
                          {typeof value === 'string' ? value : String(value)}
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserData;
