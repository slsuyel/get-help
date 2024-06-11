const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-top">
            <div className="footer-info">
              <a href="#" className="footer-logo">
                <div className="footer-img">
                  <img
                    width={100}
                    src="https://mustafiz.org/wp-content/uploads/2023/05/5-4-copy-1.png"
                    alt=""
                  />
                </div>
                <div className="footer-logo-text">
                  <h4>Mustafiz Foundation Inc</h4>
                  <span>Frontiers for Humanity</span>
                </div>
              </a>
              <p className="footer-desc">
                Mustafiz Foundation is a not-for-profit organization and EIN
                Number: 87-2173874
              </p>
              {/* <div className="mobile-app">
                    <img
                      src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/app-store.png"
                      alt=""
                      className="app-store"
                    />
                    <img
                      src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/google-play.png"
                      alt=""
                      className="google-play"
                    />
                  </div> */}
            </div>

            <div className="footer-menu">
              <div className="footer-menu-item">
                <h4 className="footer-menu-title">Initiatives</h4>
                <ul className="footer-menu-list">
                  <li className="footer-menu-item">
                    <a href="#" className="footer-item-link">
                      Community Outreach
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <a
                      href="https://mustafiz.org/education/"
                      target="_blank"
                      className="footer-item-link"
                    >
                      Education Programs
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <a
                      href="https://mustafiz.org/health/"
                      target="_blank"
                      className="footer-item-link"
                    >
                      Healthcare Services
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <a
                      href="https://mustafiz.org/women-girls-right/"
                      target="_blank"
                      className="footer-item-link"
                    >
                      Women & Girls Right
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <a
                      href="https://mustafiz.org/financial-freedom/"
                      target="_blank"
                      className="footer-item-link"
                    >
                      Financial Freedom
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-menu-item">
                <h4 className="footer-menu-title">About Us</h4>
                <ul className="footer-menu-list">
                  <li className="footer-menu-item">
                    <a
                      target="_blank"
                      href="https://mustafiz.org/who-we-are/"
                      className="footer-item-link"
                    >
                      Who We Are
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <a
                      target="_blank"
                      href="https://mustafiz.org/what-is-our-goal/"
                      className="footer-item-link"
                    >
                      Mission & Vision
                    </a>
                  </li>

                  <li className="footer-menu-item">
                    <a
                      href="https://mustafiz.org/where-we-work/"
                      target="_blank"
                      className="footer-item-link"
                    >
                      Where We Work
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <a
                      href="https://mustafiz.org/we-follow/"
                      target="_blank"
                      className="footer-item-link"
                    >
                      We Follow
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <a
                      target="_blank"
                      href="https://mustafiz.org/contact/"
                      className="footer-item-link"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-rights">
              <div className="footer-rights">
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
                <a href="#">License</a>
              </div>
            </div>
            <div className="social-media">
              <a href="#" className="social-item">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/social-media/twitter.png"
                  alt="Twitter"
                />
              </a>
              <a href="#" className="social-item">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/social-media/fb.png"
                  alt="Facebook"
                />
              </a>
              <a href="#" className="social-item">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/social-media/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
