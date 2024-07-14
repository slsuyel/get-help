import { Form, Input, Select } from 'antd';
import { renderCommonFields } from '../Profile/Fields/renderCommonFields';
import { renderStudentFields } from '../Profile/Fields/renderStudentFields';
import { renderRefugeeFields } from '../Profile/Fields/renderRefugeeFields';
import { TypeDataForm } from '@/types';
import { useState } from 'react';
const { Option } = Select;
const CreateUser = () => {
  const [category, setCategory] = useState('student');
  const onFinish = async (values: TypeDataForm) => {
    console.log(values);
  };
  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  return (
    <div>
      <h3 className="mb-4 text-center">New Applicant Registration</h3>

      <Form
        layout="vertical"
        onFinish={onFinish}
        className="p-4 shadow rounded  edit_pro"
      >
        <div className="row mx-auto">
          <div className="col-md-6">
            <Form.Item label="Applicant Name *" name="name">
              <Input
                required
                placeholder="Applicant Name"
                className="input_bor_edit"
                style={{ height: 43, width: '100%', marginTop: '0' }}
              />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item label="Category *" name="category">
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
          {renderCommonFields()}{' '}
          {category === 'student' && renderStudentFields()}
          {category === 'refugee' && renderRefugeeFields()}
          <div className="col-md-6">
            <Form.Item label="Reference 1 Name" name="reference1_name">
              <Input
                className="input_bor_edit"
                placeholder="Enter reference 1 name"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item label="Reference 1 Address" name="reference1_address">
              <Input
                className="input_bor_edit"
                placeholder="Enter reference 1 address"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item label="Reference 1 Phone Number" name="reference1_phone">
              <Input
                type="number"
                className="input_bor_edit"
                placeholder="Enter reference 1 phone number"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item label="Reference 1 Email" name="reference1_email">
              <Input
                type="email"
                className="input_bor_edit"
                placeholder="Enter reference 1 email"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              label="Reference 1 Relationship"
              name="reference1_relationship"
            >
              <Input
                className="input_bor_edit"
                placeholder="Enter reference 1 relationship"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>
          {/* --- */}
          <div className="col-md-6">
            <Form.Item label="Reference 2 Name" name="reference2_name">
              <Input
                className="input_bor_edit"
                placeholder="Enter reference 2 name"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item label="Reference 2 Address" name="reference2_address">
              <Input
                className="input_bor_edit"
                placeholder="Enter reference 2 address"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item label="Reference 2 Phone Number" name="reference2_phone">
              <Input
                type="number"
                className="input_bor_edit"
                placeholder="Enter reference 2 phone number"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item label="Reference 2 Email" name="reference2_email">
              <Input
                type="email"
                className="input_bor_edit"
                placeholder="Enter reference 2 email"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              label="Reference 2 Relationship"
              name="reference2_relationship"
            >
              <Input
                className="input_bor_edit"
                placeholder="Enter reference 2 relationship"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              label="Describe your situation in minimum 200 hundred Words: "
              name="situation"
            >
              <Input.TextArea
                className="input_bor_edit"
                placeholder="Enter current situation"
                style={{ height: 100, width: '100%' }}
              />
            </Form.Item>
          </div>
          <Form.Item key="submit-button">
            <button
              type="submit"
              className="btn btn-get-started"
              style={{ width: '215px' }}
            >
              {' '}
              Submit
            </button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default CreateUser;