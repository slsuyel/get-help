import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, message, Select } from 'antd';
import logo from '../../assets/images/logo.png';

const { Option } = Select;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [category, setCategory] = useState('Student');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      message.error('Passwords do not match!');
      return;
    }
    console.log({ name, email, password, category });
  };

  return (
    <>
      {/* <Breadcrumbs items={[{ name: 'Home', path: '/' }]} current="Register" /> */}

      <div className="row mx-auto pb-5 pt-1 bg-second">
        <div className="col-md-4 mx-auto my-3">
          <div className="p-3 w-100 mx-auto border-0 rounded shadow ">
            <div className="text-center">
              <img style={{ height: 80 }} src={logo} alt="Logo" />
              <h3 className="control-label mt-3">Sign Up</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label className="my-1" htmlFor="registerName">
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
                <label className="my-1" htmlFor="registerEmail">
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
                <label className="my-1" htmlFor="category">
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
                  <Option value="Refugee">Refugee</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </div>
              <div className="form-group mb-2">
                <label className="my-1" htmlFor="registerPassword">
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
                <label className="my-1" htmlFor="confirmPassword">
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
                  type="submit"
                  className="primary_btn py-2 rounded w-100"
                >
                  Register
                </button>
              </div>
            </form>
            <hr />
            <div className="text-center">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
