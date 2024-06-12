import Loader from '@/components/reusable/Loader';
import useAllUser from '@/hooks/useAllUser';
import { TypeDataForm } from '@/types';
import { Link } from 'react-router-dom';

const AllUsers = () => {
  const { data, isLoading } = useAllUser();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {' '}
              <th>S.L</th>
              <th>Name</th>
              <th className="d-none d-lg-table-cell">Phone</th>
              <th>Category</th>
              <th>Status</th>
              <th>Religion</th>
              <th className="d-none d-lg-table-cell">Permanent Address</th>
              <th className="d-none d-lg-table-cell">Highest Education</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user: TypeDataForm, index: number) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td className="d-none d-lg-table-cell">{user.phone}</td>
                <td>{user.category}</td>
                <td>{user.status}</td>
                <td>{user.religion}</td>
                <td className="d-none d-lg-table-cell">
                  {user.permanent_address}
                </td>
                <td className="d-none d-lg-table-cell">
                  {user.highest_education}
                </td>
                <td className="">
                  <Link
                    to={`/admin/user/${user.id}`}
                    className="btn btn-outline-success fw-normal p-1 px-2 rounded"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
