import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Checkbox } from 'antd';
import logo from '../../assets/images/logo.png';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Log values after submission
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="row mx-auto pb-5 pt-1 ">
      <div className="col-md-4 mx-auto my-3">
        <div className="p-3 w-100 mx-auto border-0 rounded shadow ">
          <div className="text-center">
            <img style={{ height: 80 }} src={logo} alt="Logo" />
            <h3 className="control-label mt-3">Sign in </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label className="my-1" htmlFor="loginUsername">
                Mobile Or Email
              </label>
              <Input
                id="loginUsername"
                placeholder="Enter Mobile Or Email"
                style={{ height: 45 }}
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label className="my-1" htmlFor="loginPassword">
                Password
              </label>
              <Input.Password
                id="loginPassword"
                placeholder="Enter Password"
                style={{ height: 45 }}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="form-group ">
                <Checkbox id="rememberMe" className="text-color">
                  Remember me
                </Checkbox>
              </div>
              <div>
                <Link to={'reset'}> Reset password</Link>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="primary_btn py-2 rounded w-100">
                Login
              </button>
            </div>
          </form>
          <hr />
          <div className="text-center">
            New? <Link to="/register">Sign Up Free </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
