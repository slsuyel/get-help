import { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';

interface FormData {
  name: string;
  email: string;
  location: string;
  role: 'admin' | 'editor';
  password: string;
}

const NewAgent = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    location: '',
    role: 'editor',
    password: '',
  });

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="container col-8">
      <div className="card">
        <div className="card-body">
          <Form
            className="p-4"
            layout="vertical"
            form={form}
            onFinish={handleSubmit}
            initialValues={{ role: 'editor' }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please enter name' }]}
            >
              <Input
                style={{ height: 40 }}
                placeholder="Enter name"
                value={formData.name}
                onChange={e => handleChange('name', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please enter a valid email',
                },
              ]}
            >
              <Input
                style={{ height: 40 }}
                placeholder="Enter email"
                value={formData.email}
                onChange={e => handleChange('email', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: 'Please enter location' }]}
            >
              <Input
                style={{ height: 40 }}
                placeholder="Enter location"
                value={formData.location}
                onChange={e => handleChange('location', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: 'Please select role' }]}
            >
              <Select
                style={{ height: 40 }}
                onChange={(value: 'admin' | 'editor') =>
                  handleChange('role', value)
                }
              >
                <Select.Option value="admin">Admin</Select.Option>
                <Select.Option value="editor">Editor</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter password' }]}
            >
              <Input.Password
                style={{ height: 40 }}
                placeholder="Enter password"
                value={formData.password}
                onChange={e => handleChange('password', e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewAgent;
