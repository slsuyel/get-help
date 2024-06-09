import { SetStateAction, useState } from 'react';
import { Form, Select, Row, Col } from 'antd';
import { renderRefugeeFields } from './Fields/renderRefugeeFields';
import { renderStudentFields } from './Fields/renderStudentFields';
import { renderCommonFields } from './Fields/renderCommonFields';
import { TypeDataForm } from '@/types';

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
    <div className="container">
      <Form layout="vertical" onFinish={onFinish} className="p-4 shadow">
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
          {renderCommonFields()}
          {category === 'Student' && renderStudentFields()}
          {category === 'Refugee' && renderRefugeeFields()}

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
