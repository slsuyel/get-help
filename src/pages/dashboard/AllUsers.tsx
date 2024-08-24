/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import useAllUser from '@/hooks/useAllUser';
import { Button, Dropdown, Input, Menu, message, Modal } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import FilterComponent from '@/components/ui/FilterComponent';

import { Spinner } from 'react-bootstrap';
import { TypeDataForm } from '@/types';
import { callApi } from '@/utilities/functions';
import useAdminProfile from '@/hooks/useAdminProfile';

const AllUsers = () => {
  const { admin, loading } = useAdminProfile();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<{ [key: string]: any }>({});
  const { data, isLoading, refetch } = useAllUser(
    filters.category,
    filters.status,
    filters.religion,
    filters.education,
    filters.searchText
  );

  const handleFilterChange = (newFilters: { [key: string]: any }) => {
    setFilters(newFilters);
    refetch();
  };

  const handleMenuClick = async (e: any, record: number) => {
    const action = e.key;

    if (action == 'Decision') {
      navigate(`/dashboard/decision/${record}`);

      return;
    }

    Modal.confirm({
      title: `Confirm ${action}`,
      content: `Are you sure you want to ${action} this user?`,
      async onOk() {
        if (action === 'delete') {
          const res = await callApi(
            'delete',
            `/api/admin/users/delete/${record}`
          );
          if (res.status === 200) {
            refetch();
            message.success('Delete successfully');
          } else message.error('Delete function failed');
        } else {
          const status = action === 'approved' ? 'approved' : 'rejected';
          const res = await callApi('Post', `/api/admin/users/status/update`, {
            id: record,
            status,
          });
          if (res.status === 200) {
            refetch();
            message.success(`${status} successfully`);
          } else message.error(`${status} function failed`);
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
          {admin?.role == 'admin' ? (
            <>
              <Menu.Item key="delete">Delete</Menu.Item>{' '}
              {/* <Menu.Item key="rejected">Rejected</Menu.Item>
              <Menu.Item key="Decision">Decision</Menu.Item> */}
            </>
          ) : (
            <>
              {' '}
              {/* <Menu.Item key="approved">Approved</Menu.Item>
              <Menu.Item key="Decision">Decision</Menu.Item>
              <Menu.Item key="rejected">Rejected</Menu.Item> */}
              <Menu.Item key="delete">Delete</Menu.Item>{' '}
            </>
          )}
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
      <div className="align-item-center d-flex flex-wrap gap-3 my-3 justify-content-between">
        <div>
          <form
            onSubmit={e => e.preventDefault()}
            className="align-item-center d-flex gap-3"
          >
            <Input
              allowClear
              required
              type="text"
              style={{ height: 40, width: '100%' }}
              placeholder="Enter Name or Phone"
              onChange={e =>
                setFilters({ ...filters, searchText: e.target.value })
              }
            />
            <button
              onClick={() => refetch()}
              type="submit"
              className="btn btn-success fw-semibold py-2 rounded-3"
            >
              Search
            </button>
          </form>
        </div>
        <FilterComponent onFilterChange={handleFilterChange} />
      </div>

      <div className="table-responsive font_amazon">
        <table className="table table-striped fs-3 table-bordered text-capitalize text-nowrap">
          <thead>
            <tr className="text-nowrap">
              <th>Id</th>
              <th>Name</th>
              <th className="d-none d-lg-table-cell text-nowrap">Phone</th>
              <th>Category</th>
              {/* <th>Status</th> */}
              <th>Religion</th>
              <th className="d-none d-lg-table-cell text-nowrap">Education</th>
              <th className="text-center">Details</th>
              <th
                className={`${
                  admin?.role == 'editor' || admin?.role == 'user'
                    ? 'd-none'
                    : ''
                }`}
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading || loading ? (
              <div className="w-100">
                <Spinner />
              </div>
            ) : (
              data &&
              data.map((user: TypeDataForm) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td className="d-none d-lg-table-cell text-nowrap">
                    {user.phone}
                  </td>
                  <td>{user.category}</td>
                  {/* <td
                    className={`${
                      user.status === 'rejected'
                        ? 'text-danger'
                        : user.status === 'approved'
                        ? 'text-success'
                        : user.status === 'pending'
                        ? 'text-warning'
                        : ''
                    } text-center `}
                  >
                    {user.status}
                  </td> */}
                  <td>{user.religion}</td>
                  <td className="d-none d-lg-table-cell ">
                    {user.highest_education || user.education_level}
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

                  <td
                    className={`${
                      admin?.role == 'editor' || admin?.role == 'user'
                        ? 'd-none'
                        : ''
                    }`}
                  >
                    {renderActions(user.id as number)}
                  </td>
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
