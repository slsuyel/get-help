import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ height: '70vh' }}>
      <div className="all-btns">
        <div className="cntnt">
          <h2>
            Dedicated to improving <br /> the care of older adults
          </h2>
        </div>
        <h2 className="feature-title tablet" style={{ textAlign: 'center' }}>
          Get Help Now »
        </h2>
        <div className="btn-container">
          <div className="circle-contain-st">
            <Link to="/students" className="btn-student">
              {' '}
              <h3>student</h3>
            </Link>
          </div>
          <div className="circle-contain-rf">
            {' '}
            <a href="./refugee.html" className="btn-refugee">
              <h3>Refugee</h3>
            </a>
          </div>
          <div className="circle-contain-ot">
            {' '}
            <a href="./others.html" className="btn-other">
              <h3>Other</h3>
            </a>{' '}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
