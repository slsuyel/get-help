import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, message, Select } from 'antd';
import logo from '../../assets/images/logo.png';
import { callApi } from '@/utilities/functions';
import { Spinner } from 'react-bootstrap';

const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [category, setCategory] = useState('Student');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoader(true);
    event.preventDefault();
    if (password !== confirmPassword) {
      message.error('Passwords do not match!');
      return;
    }
    const data = { name, email, password, category };
    const res = await callApi('Post', '/api/students', data);
    if (res.success) {
      setLoader(false);
      message.success('Signup successfully!');
      navigate('/student/signin');
    } else {
      message.error('Something went wrong !! ');
      setLoader(false);
    }
  };

  return (
    <>
      <div
        className="row mx-auto py-5 bg-second"
        style={{ background: '#f4f5f7' }}
      >
        <div className="col-md-4 mx-auto my-3">
          <div className="p-3 w-100 mx-auto border-0 rounded shadow py-5">
            <div className="text-center">
              <img style={{ height: 80 }} src={logo} alt="Logo" />
              <h3 className="control-label mt-3">Sign Up</h3>
            </div>
            <form onSubmit={handleSubmit} className="px-3">
              <div className="form-group mb-2">
                <label
                  className="fs-3 my-1 text-secondary"
                  htmlFor="registerName"
                >
                  Name
                </label>
                <Input
                  id="registerName"
                  placeholder="Enter Name"
                  style={{ height: 45 }}
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label
                  className="fs-3 my-1 text-secondary"
                  htmlFor="registerEmail"
                >
                  Email
                </label>
                <Input
                  id="registerEmail"
                  placeholder="Enter Email"
                  style={{ height: 45 }}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="fs-3 my-1 text-secondary" htmlFor="category">
                  Category
                </label>
                <Select
                  style={{ height: 45, width: '100%' }}
                  id="category"
                  placeholder="Select Category"
                  value={category}
                  onChange={value => setCategory(value)}
                >
                  <Option value="Student">Student</Option>
                  <Option value="Senior">Senior</Option>
                  <Option value="Disable">Disable</Option>
                  <Option value="Orphan">Orphan</Option>
                  <Option value="Homeless">Homeless</Option>
                  <Option value="Refugee">Refugee</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </div>
              <div className="form-group mb-2">
                <label
                  className="fs-3 my-1 text-secondary"
                  htmlFor="registerPassword"
                >
                  Password
                </label>
                <Input.Password
                  id="registerPassword"
                  placeholder="Enter Password"
                  style={{ height: 45 }}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label
                  className="fs-3 my-1 text-secondary"
                  htmlFor="confirmPassword"
                >
                  Retype Password
                </label>
                <Input.Password
                  id="confirmPassword"
                  placeholder="Retype Password"
                  style={{ height: 45 }}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <button
                  disabled={loader}
                  type="submit"
                  className="primary_btn py-3 rounded w-100"
                >
                  {loader ? <Spinner /> : 'Register'}
                </button>
              </div>
            </form>
            <hr />
            <div className="text-center fs-2">
              Already have an account?{' '}
              <Link className="text-primary" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
