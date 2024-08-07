import useAdminProfile from '@/hooks/useAdminProfile';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const theme = false;

const Sidebar = () => {
  const { admin } = useAdminProfile();

  const sidebarItems = [
    { key: '1', title: 'Dashboard', slug: '/admin' },
    {
      key: '0',
      title: 'All Applications',
      slug: '/admin/all-users',
    },
    {
      key: '00',
      title: 'New Application ',
      slug: '/admin/create',
    },
    {
      key: '2',
      title: 'Students',
      submenu: [
        { key: '2-1', title: 'Pending', slug: '/admin/Student/pending' },
        { key: '2-2', title: 'Approved', slug: '/admin/Student/approved' },
        { key: '2-3', title: 'Rejected', slug: '/admin/Student/rejected' },
      ],
    },
    {
      key: '3',
      title: 'Refuges',
      submenu: [
        { key: '3-1', title: 'Pending', slug: '/admin/refugee/pending' },
        { key: '3-2', title: 'Approved', slug: '/admin/refugee/approved' },
        { key: '3-3', title: 'Rejected', slug: '/admin/refugee/rejected' },
      ],
    },
  ];

  if (admin?.role !== 'editor' && admin?.role !== 'admin') {
    sidebarItems.push({
      key: '5',
      title: 'Settings',
      submenu: [
        { key: '5-1', title: 'Agents', slug: '/admin/setting/agents' },
        { key: '5-2', title: 'New Agent', slug: '/admin/setting/new-agent' },
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
