import { SetStateAction, useState } from 'react';
import { Form, Select, Row, Col, Input, Checkbox } from 'antd';
import { renderRefugeeFields } from './Fields/renderRefugeeFields';
import { renderStudentFields } from './Fields/renderStudentFields';

import { TypeDataForm } from '@/types';
import { renderCommonFields } from './Fields/renderCommonFields';
import { EvidenceFields } from './Fields/EvidenceFields';

const { Option } = Select;

const EditProfile = () => {
  const [category, setCategory] = useState('Student');

  const handleCategoryChange = (value: SetStateAction<string>) => {
    setCategory(value);
  };

  const onFinish = (values: TypeDataForm) => {
    console.log('Form Values:', values);
  };

  return (
    <div className=" py-5 " style={{ background: '#f4f5f7' }}>
      <Form
        layout="vertical"
        onFinish={onFinish}
        className="p-4 shadow rounded container"
      >
        <Row gutter={16} key="category-row">
          <Col span={12} key="category-col">
            <Form.Item label="Category" name="category" key="category">
              <Select onChange={handleCategoryChange}>
                <Option value="Student" key="student-option">
                  Student
                </Option>
                <Option value="Refugee" key="refugee-option">
                  Refugee
                </Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <hr />
        <div className="row mx-auto">
          {/* {renderCommonFields()} */}
          {/* {category === 'Student' && renderStudentFields()}
          {category === 'Refugee' && renderRefugeeFields()} */}
          <EvidenceFields />

          <div className="col-md-6">
            <Form.Item label="Reference 1 Name" name="reference1Name">
              <Input
                placeholder="Enter reference 1 name"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item label="Reference 1 Address" name="reference1Address">
              <Input
                placeholder="Enter reference 1 address"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item label="Reference 1 Phone Number" name="reference1Phone">
              <Input
                placeholder="Enter reference 1 phone number"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item label="Reference 1 Email" name="reference1Email">
              <Input
                placeholder="Enter reference 1 email"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item
              label="Reference 1 Relationship"
              name="reference1Relationship"
            >
              <Input
                placeholder="Enter reference 1 relationship"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item label="Reference 2 Name" name="reference2Name">
              <Input
                placeholder="Enter reference 2 name"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item label="Reference 2 Address" name="reference2Address">
              <Input
                placeholder="Enter reference 2 address"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item label="Reference 2 Phone Number" name="reference2Phone">
              <Input
                placeholder="Enter reference 2 phone number"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item label="Reference 2 Email" name="reference2Email">
              <Input
                placeholder="Enter reference 2 email"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item
              label="Reference 2 Relationship"
              name="reference2Relationship"
            >
              <Input
                placeholder="Enter reference 2 relationship"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item
              label="Describe your situation in minimum 200 hundred Words: "
              name="situation"
            >
              <Input.TextArea
                placeholder="Enter current situation"
                style={{ height: 100, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item
              label="Application Preparer Name"
              name="applicationPreparerName"
            >
              <Input
                placeholder="Enter application preparer name"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item label="Address" name="preparerAddress">
              <Input
                placeholder="Enter preparer address"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item label="Email" name="preparerEmail">
              <Input
                placeholder="Enter preparer email"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item label="Phone Number" name="preparerPhone">
              <Input
                placeholder="Enter preparer phone number"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item name="perjuryDeclaration" valuePropName="checked">
              <Checkbox>
                You swear under penalty of perjury that the above information is
                true and accurate.
              </Checkbox>
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item name="termsAgreement" valuePropName="checked">
              <Checkbox>
                You agree with the terms and conditions and privacy policy of
                Mustafiz Foundation Inc.
              </Checkbox>
            </Form.Item>
          </div>

          <div className="col-md-6">
            <Form.Item label="Sign Your Name" name="applicantSignature">
              <Input
                placeholder="Enter your name"
                style={{ height: 45, width: '100%' }}
              />
            </Form.Item>
          </div>

          <Form.Item key="submit-button">
            <button type="submit" className="btn btn-get-started">
              {' '}
              Submit & Apply
            </button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default EditProfile;
