import { Link } from 'react-router-dom';
import banner from '../../assets/images/h-banner.png';
import About from './About';
import Feature from './Feature';
import './Home.css';
const NewHome = () => {
  return (
    <div>
      <div>
        <section className="hero pt-5 ">
          <div className="container pt-5 mt-md-5">
            <div className="section-content mt-md-5">
              <div className="hero-text">
                <h1 className="hero-title">
                  Empower. Support. Thrive. Connect.
                </h1>
                <p className="hero-desc">
                  Welcome to our supportive sanctuary. Seek advice, find
                  inspiration, join our community. Let's navigate life together.
                </p>
                <div className="hero-btn">
                  <Link
                    to={'https://mustafiz.org/donation/'}
                    className="btn btn-get-started"
                  >
                    {' '}
                    Donate here
                  </Link>
                  <Link to={'login'} className="btn btn-learn-more">
                    {' '}
                    Get Help
                  </Link>
                </div>
              </div>
              <div className="hero-img">
                <img src={banner} alt="" />
              </div>
            </div>
          </div>
        </section>

        <About />
        <Feature />

        {/* <section className="team-inbox">
          <div className="container">
            <div className="section-content">
              <div className="team-img">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/team-inbox.png"
                  alt=""
                />
                <p>Connect with customers and grow faster</p>
              </div>
              <div className="team-text">
                <h4 className="section-head-title team-head-title">
                  Team Inbox
                </h4>
                <h2 className="section-title">Manage conversations</h2>
                <p className="section-desc">
                  One place to manage and respond to all conversations with
                  leads and users. Receive messages from leads.
                </p>
                <div className="team-card">
                  <div className="team-card-head">
                    “Great widgets. Great selection. Great design and{' '}
                    <strong>easy to implement</strong>. Definitely a huge time
                    saver for a web developer!”
                  </div>
                  <div className="team-card-body">
                    <div className="team-card-img">
                      <img
                        src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/profile-image.png"
                        alt=""
                      />
                    </div>
                    <div className="team-card-text">
                      <h5>Viella Malkovich</h5>
                      <span>Creative Director at Johnson</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="communicate">
          <div className="container">
            <div className="section-content flex-column">
              <div className="communicate-body">
                <div className="communicate-body-item">
                  <h4 className="section-head-title communicate-head-title">
                    Enhance Communication
                  </h4>
                  <h2 className="section-title">
                    Tailored for effective collaboration
                  </h2>
                  <p className="section-desc">
                    Three solutions designed to streamline communication and
                    collaboration for your organization.
                  </p>
                  <a href="pricing.html" className="btn btn-get-started">
                    Get Started
                  </a>
                </div>
                <div className="communicate-body-item communicate-img">
                  <img
                    src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/communicate.png"
                    alt=""
                  />
                  <p>A better way to engage your community</p>
                </div>
              </div>
              <div className="communicate-footer">
                <div className="communicate-footer-item">
                  <p>
                    <span>Customizable Subscriptions:</span> Mustafiz Foundation
                    seamlessly integrates with your existing tools and services.
                  </p>
                  <a href="#">Learn more about subscriptions</a>
                </div>
                <div className="communicate-footer-item">
                  <p>
                    <span>Flexible Solutions:</span> Implement our solutions
                    effortlessly using simple integrations for various
                    platforms.
                  </p>
                  <a href="#">Get more info about flexibility</a>
                </div>
                <div className="communicate-footer-item">
                  <p>
                    <span>Secure Communication:</span> We prioritize data
                    security with measures like 2FA and SSO.
                  </p>
                  <a href="#">Communication guidelines</a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="visitors">
          <div className="container">
            <div className="section-content flex-column">
              <div className="visitors-header">
                <h4 className="section-head-title">Engage Visitors</h4>
                <h2 className="section-title">Understand your audience</h2>
                <p className="section-desc">
                  Early stage company? Eligible applicants get all of our
                  products for just $49 a month.
                </p>
                <div className="visitors-btn">
                  <a href="pricing.html" className="btn btn-get-started">
                    Get Started
                  </a>
                  <a href="#" className="btn btn-learn-more">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="visitors-body">
                <div className="visitor-item">
                  <img
                    src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/developers.png"
                    alt=""
                    className="visitor-img"
                  />
                  <h5 className="visitor-img-title">Developers</h5>
                </div>
                <div className="visitor-item active">
                  <img
                    src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/entertainment.png"
                    alt=""
                    className="visitor-img"
                  />
                  <h5 className="visitor-img-title">Entertainment</h5>
                </div>
                <div className="visitor-item">
                  <img
                    src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/athletes.png"
                    alt=""
                    className="visitor-img"
                  />
                  <h5 className="visitor-img-title">Athletes</h5>
                </div>
                <div className="visitor-item">
                  <img
                    src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/creators.png"
                    alt=""
                    className="visitor-img"
                  />
                  <h5 className="visitor-img-title">Creators</h5>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="organizations">
          <div className="container">
            <div className="section-content">
              <div className="organization">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/organizations/newyork-times.svg"
                  alt=""
                  className="organization-logo"
                />
              </div>
              <div className="organization">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/organizations/forbes.svg"
                  alt=""
                  className="organization-logo"
                />
              </div>
              <div className="organization">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/organizations/apple.svg"
                  alt=""
                  className="organization-logo"
                />
              </div>
              <div className="organization">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/organizations/mashable.svg"
                  alt=""
                  className="organization-logo"
                />
              </div>
              <div className="organization">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/organizations/wsj.svg"
                  alt=""
                  className="organization-logo"
                />
              </div>
              <div className="organization">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/organizations/google.svg"
                  alt=""
                  className="organization-logo"
                />
              </div>
            </div>
          </div>
        </section> */}
        <section className="testimonials">
          <div className="container">
            <div className="section-content flex-column">
              <h4 className="section-head-title testimonial-head-title">
                Trusted by the community for our impactful work
              </h4>
              <div className="testimonial-list">
                <div className="testimonial">
                  <p className="testimonial-desc">
                    "Mustafiz Foundation has been instrumental in uplifting
                    communities through its innovative projects. Their
                    dedication to making a difference is truly inspiring."
                  </p>
                  <h5 className="testimonial-author">Fahim Rahman</h5>
                  <span className="author-title">Community Leader</span>
                </div>
                <div className="testimonial">
                  <p className="testimonial-desc">
                    "I've witnessed firsthand the positive impact Mustafiz
                    Foundation has had on individuals' lives. Their commitment
                    to social change is unmatched."
                  </p>
                  <h5 className="testimonial-author">Sara Ahmed</h5>
                  <span className="author-title">Volunteer</span>
                </div>
                <div className="testimonial">
                  <p className="testimonial-desc">
                    "Mustafiz Foundation's projects have transformed
                    communities, providing hope and opportunities where there
                    were none. Proud to be associated with them."
                  </p>
                  <h5 className="testimonial-author">Rahat Khan</h5>
                  <span className="author-title">Beneficiary</span>
                </div>
              </div>
              <div className="testimonial-dots">
                <div className="testimonial-dot active" />
                <div className="testimonial-dot" />
                <div className="testimonial-dot" />
              </div>
              <img
                src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/testimonial.png"
                alt=""
                className="testimonial-img"
              />
            </div>
          </div>
        </section>

        <section className="free-trial">
          <div className="container">
            <div className="section-content">
              <div className="free-trial-img">
                <img
                  src="https://raw.githubusercontent.com/mustafadalga/foundation-website/master/assets/img/free-trial.png"
                  alt=""
                />
              </div>
              <div className="free-trial-text">
                <h2 className="section-title">
                  Join Mustafiz Foundation today.
                </h2>
                <p className="section-desc">
                  Stay informed about our latest initiatives, impact stories,
                  and events. No spam, just meaningful updates.
                </p>
                <div className="free-trial-form">
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit" className="btn btn-get-started">
                    Get Started
                  </button>
                </div>
                <p className="free-trial-desc">
                  Be part of the change · Stay connected · Unsubscribe anytime.{' '}
                  <a href="#">Read our Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewHome;
