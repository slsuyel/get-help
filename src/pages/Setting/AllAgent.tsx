const AllAgent = () => {
  // Updated fake data array with email field added
  const agents = [
    {
      id: 1,
      name: 'John Doe',
      location: 'New York',
      role: 'admin',
      action: 'delete',
      email: 'john.doe@example.com', // New email field
    },
    {
      id: 2,
      name: 'Jane Smith',
      location: 'Los Angeles',
      role: 'editor',
      action: 'delete',
      email: 'jane.smith@example.com', // New email field
    },
    {
      id: 3,
      name: 'James Johnson',
      location: 'Chicago',
      role: 'admin',
      action: 'delete',
      email: 'james.johnson@example.com', // New email field
    },
    {
      id: 4,
      name: 'Emily Davis',
      location: 'San Francisco',
      role: 'editor',
      action: 'delete',
      email: 'emily.davis@example.com', // New email field
    },
  ];

  return (
    <div className="table-responsive container rounded">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Role</th>
            <th>Email</th> {/* New column for Email */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {agents?.map(agent => (
            <tr key={agent.id}>
              <td>{agent.id}</td>
              <td>{agent.name}</td>
              <td>{agent.location}</td>
              <td>{agent.role}</td>
              <td>{agent.email}</td> {/* Display email field */}
              <td>
                <button className="btn btn-danger fs-4 fw-normal p-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAgent;
