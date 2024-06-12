import { Link, useParams } from 'react-router-dom';
import { Button, Dropdown, Menu, Modal } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuInfo } from 'rc-menu/lib/interface';
import useAllUser from '@/hooks/useAllUser';
import Loader from '@/components/reusable/Loader';
import { TypeDataForm } from '@/types';

const UserTable = () => {
  const { category, status } = useParams();

  const { data, isLoading } = useAllUser();

  if (isLoading) {
    return <Loader />;
  }

  console.log(data);
  const handleMenuClick = (e: MenuInfo, record: number) => {
    const action = e.key;
    Modal.confirm({
      title: `Confirm ${action}`,
      content: `Are you sure you want to ${action} this user?`,
      onOk() {
        console.log('Action:', action, 'on record:', record);
      },
      onCancel() {
        console.log('Action canceled:', action);
      },
    });
  };
  const renderActions = (record: number) => (
    <Dropdown
      overlay={
        <Menu onClick={e => handleMenuClick(e, record)}>
          <Menu.Item key="approved">Approved</Menu.Item>
          <Menu.Item key="rejected">Rejected</Menu.Item>
          <Menu.Item key="delete">Delete</Menu.Item>
        </Menu>
      }
    >
      <Button>
        Actions <span className="anticon anticon-down"></span>
      </Button>
    </Dropdown>
  );

  return (
    <div className="">
      <h3 className="mb-4 text-capitalize">
        {' '}
        All {category} : <span className="text-success">{status}</span>
      </h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th className="d-none d-lg-table-cell">Phone</th>
              <th className="d-none d-lg-table-cell">Address</th>
              <th className="d-none d-lg-table-cell">Educational Details</th>
              <th>Total Income</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user: TypeDataForm) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td className="d-none d-lg-table-cell">{user.phone}</td>
                <td>{user.category}</td>
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
                <td> {renderActions(user.id as number)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
