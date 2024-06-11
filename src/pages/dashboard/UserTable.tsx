import { Link, useParams } from 'react-router-dom';
import { Button, Dropdown, Menu, Modal } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuInfo } from 'rc-menu/lib/interface';
const mockData = [
  {
    id: 1,
    name: 'John Doe',
    phone: '123-456-7890',
    address: '123 Main St',
    education: "Bachelor's Degree",
    totalIncome: '$50,000',
  },
  {
    id: 2,
    name: 'Jane Smith',
    phone: '987-654-3210',
    address: '456 Elm St',
    education: "Master's Degree",
    totalIncome: '$70,000',
  },
];
const UserTable = () => {
  const { category, status } = useParams();

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
            {mockData.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td className="d-none d-lg-table-cell">{user.phone}</td>
                <td className="d-none d-lg-table-cell">{user.address}</td>
                <td className="d-none d-lg-table-cell">{user.education}</td>
                <td>{user.totalIncome}</td>
                <td className="">
                  <Link
                    to={`/admin/user/${user.id}`}
                    className="btn btn-outline-success fw-normal p-1 px-2 rounded"
                  >
                    View
                  </Link>
                </td>
                <td> {renderActions(user.id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
