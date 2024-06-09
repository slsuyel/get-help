import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { SoundOutlined } from '@ant-design/icons';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [MobileMenu, setMobileMenu] = useState(false);

  const showDrawer = () => {
    setMobileMenu(true);
  };

  const onClose = () => {
    setMobileMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsFixed(offset > 0);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItems = [
    {
      id: 1,
      label: 'Login',
      link: '/login',
    },
    {
      id: 2,
      label: 'Register',
      link: '/register',
    },
    {
      id: 3,
      label: 'profile',
      link: '/profile',
    },
  ];

  return (
    <>
      <Navbar
        expand="lg"
        fixed={isFixed ? 'top' : undefined}
        className={`border-bottom p-0 py-3 bg-white ${
          isFixed ? 'header-bg-fix' : ''
        } ${isMobile ? 'd-none' : 'd-block'}`}
      >
        <Container>
          <Navbar.Brand href="/" className="p-0 ">
            <img src={logo} alt="" width={250} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="justify-content-end fs-5 fw-semibold gap-3"
          >
            {menuItems.map(item => (
              <NavLink key={item.id} to={item.link} className="nav-link fs-1">
                {item.label}
              </NavLink>
            ))}
            <Button
              className="shadow-none text-primary bg-transparent"
              type="primary"
              icon={<SoundOutlined className="fs-1" />}
              style={{ fontSize: '24px' }}
            ></Button>

            <NavLink
              target="_blank"
              to={'https://mustafiz.org/donation/'}
              className="btn btn-get-started p-2 px-3 rounded"
            >
              {' '}
              Donate here
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isMobile && (
        <>
          <div className="align-items-center d-flex justify-content-between p-2 ">
            <Navbar.Brand href="/" className="p-1 ">
              <img src={logo} alt="" width={220} />
            </Navbar.Brand>
            <Button type="primary" className="rounded-0 " onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </div>

          <Drawer
            style={{ backgroundColor: '#be93b6' }}
            placement="left"
            onClose={onClose}
            open={MobileMenu}
          >
            {menuItems.map(item => (
              <NavLink key={item.id} to={item.link} className="nav-link fs-1">
                {item.label}
              </NavLink>
            ))}
          </Drawer>
        </>
      )}
    </>
  );
};

export default Header;
