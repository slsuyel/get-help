import BackBtn from '@/components/reusable/BackBtn';
import { callApi } from '@/utilities/functions';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
  // console.log(userData);
  return (
    <div className="font_amazon">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <BackBtn />
          <h1 className="text-center">Details of {userData.name} </h1>

          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <tbody>
                {Object.entries(userData).map(
                  ([key, value]: [string, string]) =>
                    key !== 'created_at' &&
                    key !== 'updated_at' &&
                    value && (
                      <tr key={key}>
                        <th
                          className="text-capitalize fs-4 my-2 py-3 ps-3"
                          style={{ width: '30%' }}
                        >
                          {key.replace(/_/g, ' ')}
                        </th>
                        <td className="ps-3 fs-4 text-capitalize">{value}</td>
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
