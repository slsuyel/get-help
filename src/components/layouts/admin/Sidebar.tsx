import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const sidebarItems = [
  { key: '1', title: 'Dashboard' },
  { key: '2', title: 'Profile' },
  { key: '3', title: 'Settings' },
  { key: '4', title: 'Logout' },
];

const theme = false;
const Sidebar = () => (
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
        height: '4rem',
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
      theme={theme ? 'light' : 'dark'}
      mode="vertical"
      defaultSelectedKeys={['4']}
    >
      {sidebarItems.map(item => (
        <Menu.Item key={item.key}>{item.title}</Menu.Item>
      ))}
    </Menu>
  </Sider>
);

export default Sidebar;
