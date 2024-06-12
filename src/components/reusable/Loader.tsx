import { Spinner } from 'react-bootstrap';
import logo from '../../assets/images/logo-icon.webp';
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <Spinner animation="border" role="status" variant="primary" />

        <div>
          <img src={logo} width={100} alt="" />
        </div>
        <h1 className="fs-1 fw-bold" style={{ color: '#f89509' }}>
          Mustafiz Foundation Inc.
        </h1>
        <h5 className="mt-3 text-muted">Frontiers for Humanity</h5>
      </div>
    </div>
  );
};

export default Loader;
