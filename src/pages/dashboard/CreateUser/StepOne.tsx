/* eslint-disable @typescript-eslint/no-explicit-any */
import { callApi, generateMail } from '@/utilities/functions';
import { Input, Select, Button, message } from 'antd';
import { useState } from 'react';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const StepOne = () => {
  const [category, setCategory] = useState('student');

  const navigate = useNavigate();

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleSubmit = async (values: {
    name: string;
    category: string;
    phone: string;
  }) => {
    const email = generateMail();
    if (!email) {
      return message.error('Please try error');
    }
    const data = {
      name: values.name,
      category: values.category,
      email,
      password: '12345678',
      phone: values.phone,
    };
    const res = await callApi('Post', '/api/user/register', data);
    if (res.data.token) {
      console.log(res);
      navigate(`/dashboard/edit/${res.data.user.id}`);
    } else {
      console.log(res);
    }
  };

  return (
    <Form
      onFinish={handleSubmit}
      initialValues={{ category }}
      layout="vertical"
    >
      <div className="row mx-auto">
        <div className="col-md-6">
          <Form.Item
            label="Applicant Name *"
            name="name"
            rules={[{ required: true, message: 'Please enter applicant name' }]}
          >
            <Input
              placeholder="Applicant Name"
              className="input_bor_edit"
              style={{ height: 43, width: '100%', marginTop: '0' }}
            />
          </Form.Item>
        </div>
        {/* <div className="col-md-6">
          <Form.Item label="Phone Number" name="phone">
            <Input
              type="number"
              className="input_bor_edit"
              style={{ height: 43, width: '100%', marginTop: '0' }}
              placeholder="Enter phone number"
            />
          </Form.Item>
        </div> */}
        <div className="col-md-6">
          <Form.Item
            label="Category *"
            name="category"
            rules={[{ required: true, message: 'Please select category' }]}
          >
            <Select
              onChange={handleCategoryChange}
              className="input_bor_edit rounded-bottom-4"
              style={{ height: 43, width: '100%', marginTop: '0' }}
              placeholder="Select category"
            >
              <Option value="student">Student</Option>
              <Option value="senior">Senior</Option>
              <Option value="disable">Disable</Option>
              <Option value="orphan">Orphan</Option>
              <Option value="homeless">Homeless</Option>
              <Option value="refugee">Refugee</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        </div>
      </div>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StepOne;
