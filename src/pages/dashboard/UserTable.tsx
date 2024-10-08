import { Link, useParams } from 'react-router-dom';
import { Button, Dropdown, Menu, Modal, message } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuInfo } from 'rc-menu/lib/interface';
import useAllUser from '@/hooks/useAllUser';
import Loader from '@/components/reusable/Loader';
import { TypeDataForm } from '@/types';
import { callApi } from '@/utilities/functions';
import useAdminProfile from '@/hooks/useAdminProfile';

const UserTable = () => {
  const { category, status } = useParams();
  const { admin, loading } = useAdminProfile();
  const { data, isLoading, refetch } = useAllUser(category, status);

  if (isLoading || loading) {
    return <Loader />;
  }

  const handleMenuClick = async (e: MenuInfo, record: number) => {
    const action = e.key;
    Modal.confirm({
      title: `Confirm ${action}`,
      content: `Are you sure you want to ${action} this user?`,
      async onOk() {
        if (action == 'delete') {
          const res = await callApi(
            'delete',
            `/api/admin/users/delete/${record}`
          );
          if (res.status == 200) {
            refetch();

            message.success('Delete successfully');
          } else message.error('Delete function failed');
        } else if (action == 'approved') {
          const res = await callApi('Post', `/api/admin/users/status/update`, {
            id: record,
            status: 'approved',
          });
          if (res.status == 200) {
            refetch();

            message.success('approved  successfully');
          } else message.error('approved function failed');
        } else {
          const res = await callApi('Post', `/api/admin/users/status/update`, {
            id: record,
            status: 'rejected',
          });
          if (res.status == 200) {
            refetch();

            message.success('rejected  successfully');
          } else message.error('rejected function failed');
        }
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
        Actions <span className="anticon anticon-down font_amazon"></span>
      </Button>
    </Dropdown>
  );

  return (
    <div className="font_amazon">
      <h3 className="mb-4 text-capitalize">
        All {category} : <span className="text-success">{status}</span>
      </h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered fs-3">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th className="d-none d-lg-table-cell">Phone</th>
              <th>Category</th>
              <th>Status</th>

              <th>Religion</th>
              <th className="d-none d-lg-table-cell"> Address</th>
              <th className="d-none d-lg-table-cell">Education</th>
              <th>Details</th>
              <th className={`${admin?.role == 'editor' ? 'd-none' : ''}`}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user: TypeDataForm) => (
              <tr key={user.id}>
                <td>{user.id}</td>
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
                    to={`/dashboard/user/${user.id}`}
                    className="btn btn-outline-success fw-normal p-1 px-4 rounded"
                  >
                    View
                  </Link>
                </td>
                <td className={`${admin?.role == 'editor' ? 'd-none' : ''}`}>
                  {' '}
                  {renderActions(user.id as number)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
