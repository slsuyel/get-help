import useAdminProfile from '@/hooks/useAdminProfile';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const theme = false;

const Sidebar = () => {
  const { admin } = useAdminProfile();

  const sidebarItems = [
    { key: '1', title: 'Dashboard', slug: '/dashboard' },
    {
      key: '00',
      title: 'New Applicant ',
      slug: '/dashboard/create',
    },
    {
      key: '09',
      title: admin?.role === 'editor' ? 'My Applications' : 'All Applications',
      submenu: [
        { key: '2-1', title: 'All', slug: '/dashboard/application/all' },
        {
          key: '2-2',
          title: 'Approved',
          slug: '/dashboard/application/approved',
        },
        {
          key: '2-3',
          title: 'Pending',
          slug: '/dashboard/application/pending',
        },
        {
          key: '2-4',
          title: 'Rejected',
          slug: '/dashboard/application/rejected',
        },
      ],
    },
    {
      key: '0',
      title: admin?.role === 'editor' ? 'My Applicants' : 'All Applicants',
      slug: '/dashboard/all-users',
    },
  ];

  if (admin?.role === 'super') {
    sidebarItems.push({
      key: '5',
      title: 'Settings',
      submenu: [
        { key: '5-1', title: 'Users', slug: '/dashboard/setting/agents' },
        {
          key: '5-2',
          title: 'New User',
          slug: '/dashboard/setting/new-agent',
        },
      ],
    });
  }

  return (
    <Sider
      theme={theme ? 'light' : 'dark'}
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        height: '100vh',
        position: 'sticky',
        top: '0',
        left: '0',
      }}
    >
      <div
        className="border-bottom "
        style={{
          height: '65px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={'https://school-suyel.netlify.app/assets/dblogo-ixqnXm-n.png'}
          alt=""
          width={150}
        />
      </div>
      <Menu
        className="font_amazon"
        theme={theme ? 'light' : 'dark'}
        mode="inline"
        defaultSelectedKeys={['4']}
      >
        {sidebarItems.map(item =>
          item.submenu ? (
            <SubMenu key={item.key} title={item.title}>
              {item.submenu.map(subItem => (
                <Menu.Item key={subItem.key}>
                  <Link to={subItem.slug}>{subItem.title}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={item.key}>
              <Link to={item.slug}>{item.title}</Link>
            </Menu.Item>
          )
        )}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
