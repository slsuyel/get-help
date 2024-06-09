import { Form, Input, DatePicker, Select } from 'antd';

const { Option } = Select;

export const renderCommonFields = () => (
  <div className="row mx-auto">
    <div className="col-md-6">
      <Form.Item label="Full Name" name="fullName">
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item label="Date of Birth" name="dob">
        <DatePicker style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Gender" name="gender">
        <Select style={{ height: 45, width: '100%' }}>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item label="Nationality" name="nationality">
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Phone Number" name="mobile">
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
  </div>
);
