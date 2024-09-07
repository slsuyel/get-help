/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import useAllUser from '@/hooks/useAllUser';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import FilterComponent from '@/components/ui/FilterComponent';
import { Spinner } from 'react-bootstrap';
import { TypeDataForm } from '@/types';

const AllUsers = () => {
  const [filters, setFilters] = useState<{ [key: string]: any }>({});
  const { data, isLoading, refetch } = useAllUser(
    filters.category,
    filters.religion,
    filters.education,
    filters.searchText,
    filters.country
  );

  useEffect(() => {
    refetch();
  }, [filters]);

  const handleFilterChange = (newFilters: { [key: string]: any }) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

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
                setFilters(prevFilters => ({
                  ...prevFilters,
                  searchText: e.target.value,
                }))
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
              <th>Religion</th>
              <th className="d-none d-lg-table-cell text-nowrap">Education</th>
              <th className="text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={7} className="text-center">
                  <Spinner animation="border" />
                </td>
              </tr>
            ) : data && data.length > 0 ? (
              data.map((user: TypeDataForm) => (
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

export default AllUsers;
