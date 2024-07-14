import useAllUser from '@/hooks/useAllUser';
import { TypeDataForm } from '@/types';
import { callApi } from '@/utilities/functions';
import { Button, Dropdown, Menu, Modal, message } from 'antd';
import { Link } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';
import { SetStateAction, useState } from 'react';
import { Spinner } from 'react-bootstrap';
const AllUsers = () => {
  const { data, isLoading, refetch } = useAllUser();
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle input change
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(searchTerm);
  };

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
      trigger={['click']}
    >
      <Button>
        Actions <span className="anticon anticon-down"></span>
      </Button>
    </Dropdown>
  );

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="align-items-baseline d-flex gap-3 mb-4"
        >
          <input
            type="text"
            className="py-2"
            placeholder="Name, Phone, Email, or ID"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="btn btn-success fw-semibold py-2 rounded-3"
          >
            Search
          </button>
        </form>
      </div>

      <div className="table-responsive font_amazon">
        <table className="table table-striped fs-3 table-bordered text-capitalize text-nowrap">
          <thead>
            <tr className="text-nowrap">
              <th>S.L</th>
              <th>Name</th>
              <th className="d-none d-lg-table-cell text-nowrap">Phone</th>
              <th>Category</th>
              <th>Status</th>
              <th>Email</th>
              <th>Religion</th>
              <th className="d-none d-lg-table-cell text-nowrap">Education</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <div className="w-100">
                <Spinner />
              </div>
            ) : (
              data.map((user: TypeDataForm, index: number) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td className="d-none d-lg-table-cell text-nowrap">
                    {user.phone}
                  </td>
                  <td>{user.category}</td>
                  <td
                    className={`${
                      user.status == 'rejected'
                        ? 'text-danger'
                        : user.status == 'approved'
                        ? 'text-success'
                        : user.status == 'pending'
                        ? 'text-warning'
                        : ''
                    } text-center `}
                  >
                    {user.status}
                  </td>

                  <td>{user.email}</td>
                  <td>{user.religion}</td>

                  <td className="d-none d-lg-table-cell ">
                    {user.highest_education}
                  </td>
                  <td className="">
                    <Link
                      to={`/admin/user/${user.id}`}
                      className="btn btn-outline-success fw-normal p-1 px-4 rounded"
                    >
                      View
                    </Link>
                  </td>
                  <td> {renderActions(user.id as number)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
