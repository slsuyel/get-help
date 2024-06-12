import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, message, Select } from 'antd';
import logo from '../../assets/images/logo-icon.webp';
import { callApi } from '@/utilities/functions';
import { Spinner } from 'react-bootstrap';
import useLoggedIn from '@/hooks/useLoggedIn';
import Loader from '@/components/reusable/Loader';

const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [category, setCategory] = useState('Student');
  const { authenticated, loading } = useLoggedIn();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoader(true);
    event.preventDefault();

    if (password !== confirmPassword) {
      message.error('Passwords do not match!');
      setLoader(false);
      return;
    }

    const data = { name, email, password, mobile: '01722597565', category };
    const res = await callApi('Post', '/api/user/register', data);

    if (res.status === 400 && res.data && res.data.errors) {
      if (res.data.errors.email) {
        message.error(res.data.errors.email[0]);
      } else {
        message.error('Something went wrong!');
      }
    } else if (res.status === 201) {
      message.success('Wow !! Sign up successfully , Login now');
      navigate('/login');
    } else {
      message.error('Something went wrong!');
    }

    setLoader(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!authenticated ? (
        <div
          className="row mx-auto py-5 bg-second"
          style={{ background: '#f4f5f7' }}
        >
          <div className="col-md-4 mx-auto my-3">
            <div className="p-3 w-100 mx-auto border-0 rounded shadow py-5">
              <div className="align-items-center d-flex gap-3 justify-content-center">
                <img src={logo} alt="Logo" width={50} />
                <div>
                  <h2 className="fs-1 fw-bold" style={{ color: '#f89509' }}>
                    Mustafiz Foundation Inc.
                  </h2>
                  <h5>Frontiers for Humanity</h5>
                </div>
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
                    required
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
                    required
                    id="registerEmail"
                    placeholder="Enter Email"
                    style={{ height: 45 }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label
                    className="fs-3 my-1 text-secondary"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <Select
                    style={{ height: 45, width: '100%' }}
                    id="category"
                    placeholder="Select Category"
                    value={category}
                    onChange={value => setCategory(value)}
                  >
                    <Option value="student">Student</Option>
                    <Option value="senior">Senior</Option>
                    <Option value="disable">Disable</Option>
                    <Option value="orphan">Orphan</Option>
                    <Option value="homeless">Homeless</Option>
                    <Option value="refugee">Refugee</Option>
                    <Option value="other">Other</Option>
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
                    required
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
                    required
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
      ) : (
        navigate('/profile')
      )}
    </>
  );
};

export default Register;
