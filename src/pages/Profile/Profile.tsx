import { notification } from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import DocUpdate from './DocUpdate/DocUpdate';

const Profile = () => {
  useEffect(() => {
    notification.open({
      message: 'Important Notification',
      description: (
        <span className="text-danger">
          Please fill out all the required information in your profile and
          submit it. This is necessary to complete the process.
        </span>
      ),
      icon: <ExclamationCircleOutlined style={{ color: '#faad14' }} />,
    });
  }, []);

  return (
    <div style={{ background: '#f4f5f7' }}>
      <div className="student-profile py-4">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-lg-4">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent text-center">
                  <img
                    className="profile_img"
                    src="https://placeimg.com/640/480/arch/any"
                    alt=""
                  />
                  <h3>Ishmam Ahasan Samin</h3>
                  <button className="btn btn-outline-success fw-bold" disabled>
                    Status : Pending
                  </button>
                </div>
                <div className="card-body ">
                  <p className="mb-0">
                    <strong className="pe-1">Phone Number:</strong> 01700000000
                  </p>
                  <hr />
                  <p className="mb-0">
                    <strong className="pe-1">Email Address:</strong>{' '}
                    example@gmail.com
                  </p>
                  <hr />

                  <p className="mb-0">
                    <strong className="pe-1">Permanent Address:</strong>
                    Nikunjo-02, Khilkhet, Dhaka-1229, Bangladesh
                  </p>
                  <hr />
                </div>
                <div className="d-flex gap-4 justify-content-center mb-4">
                  <Link
                    to={'/edit-profile'}
                    className="btn btn-outline-primary"
                  >
                    <span>
                      <i className="fas fa-user-edit"></i> Update Profile
                    </span>
                  </Link>
                  <button className="btn btn-danger">
                    <span>
                      <i className="fas fa-sign-out-alt"></i> Log Out
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                  <h3 className="mb-0">
                    <i className="far fa-clone pe-1" />
                    General Information
                  </h3>
                </div>
                <div className="card-body pt-0">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th>Date of Birth</th>
                        <td width="2%">:</td>
                        <td>05/20/1998</td>
                      </tr>
                      <tr>
                        <th>Gender</th>
                        <td width="2%">:</td>
                        <td>Male</td>
                      </tr>
                      <tr>
                        <th>Nationality</th>
                        <td width="2%">:</td>
                        <td>US Citizen</td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td width="2%">:</td>
                        <td>123-456-7890</td>
                      </tr>
                      <tr>
                        <th>Email Address</th>
                        <td width="2%">:</td>
                        <td>john.doe@example.com</td>
                      </tr>
                      <tr>
                        <th>Address Details</th>
                        <td width="2%">:</td>
                        <td>123 Main St, City, State, Zip</td>
                      </tr>
                      <tr>
                        <th>Educational Background</th>
                        <td width="2%">:</td>
                        <td>XYZ University</td>
                      </tr>
                      <tr>
                        <th>Family Information</th>
                        <td width="2%">:</td>
                        <td>
                          Parents: Jane Doe, John Doe Sr. Total Family Income:
                          $50,000. Siblings: 2, both in high school.
                        </td>
                      </tr>
                      <tr>
                        <th>Financial Information</th>
                        <td width="2%">:</td>
                        <td>Self-funded. No current scholarships or grants.</td>
                      </tr>
                      <tr>
                        <th>Academic and Extracurricular Activities</th>
                        <td width="2%">:</td>
                        <td>
                          Award for Excellence in Mathematics, Chess Club
                          President.
                        </td>
                      </tr>
                      <tr>
                        <th>Essay Questions</th>
                        <td width="2%">:</td>
                        <td>
                          Educational and career goals: To become a software
                          engineer. Assistance: Will help cover tuition fees,
                          textbooks, and living expenses. Challenges: Overcame
                          financial difficulties and managed to excel
                          academically.
                        </td>
                      </tr>
                      <tr>
                        <th>References</th>
                        <td width="2%">:</td>
                        <td>Jane Doe, Mother, jane.doe@example.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <hr className="mt-4" />
            <DocUpdate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
