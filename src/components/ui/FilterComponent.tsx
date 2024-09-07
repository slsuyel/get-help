/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from 'antd';

const { Option } = Select;

interface FilterProps {
  onFilterChange: (filters: { [key: string]: any }) => void;
}

const categories = [
  'Student',
  'Senior',
  'Disable',
  'Orphan',
  'Homeless',
  'Refugee',
  'Other',
];

const religions = [
  'Islam',
  'Christianity',
  'Hinduism',
  'Buddhism',
  'Judaism',
  'Other',
];

const educations = [
  'N/A',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'SSC',
  'HSC',
  'Undergraduate',
  'Graduate',
  'Postgraduate',
  'PhD',
];

const FilterComponent = ({ onFilterChange }: FilterProps) => {
  const [form] = Form.useForm();

  // Handle form submission
  const handleFinish = (values: { [key: string]: any }) => {
    onFilterChange(values);
  };

  const handleReset = () => {
    form.resetFields();
  };

  const inputWidth = { width: '100px' };

  return (
    <div className="">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="d-flex flex-wrap gap-2 "
      >
        <Form.Item className="my-2 " name="country">
          <Select
            style={{ ...inputWidth, height: 40 }}
            placeholder="Country"
            allowClear
            popupMatchSelectWidth={false}
          >
            <Option value="Bangladesh">Bangladesh</Option>
            <Option value="USA">USA</Option>
          </Select>
        </Form.Item>

        <Form.Item className="my-2 " name="category">
          <Select
            style={{ ...inputWidth, height: 40 }}
            placeholder="Category"
            allowClear
            popupMatchSelectWidth={false}
          >
            {categories.map(category => (
              <Option key={category} value={category.toLowerCase()}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item className="my-2 " name="religion">
          <Select
            style={{ ...inputWidth, height: 40 }}
            placeholder="Religion"
            allowClear
            popupMatchSelectWidth={false}
          >
            {religions.map(religion => (
              <Option key={religion} value={religion.toLowerCase()}>
                {religion}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item className="my-2 " name="education">
          <Select
            placeholder="Education"
            style={{ ...inputWidth, height: 40 }}
            allowClear
            popupMatchSelectWidth={false}
          >
            {educations.map(education => (
              <Option key={education} value={education.toLowerCase()}>
                {education}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item className="my-2">
          <button
            type="submit"
            className="btn btn-success fw-semibold py-2 rounded-3"
            style={inputWidth}
          >
            Apply
          </button>
        </Form.Item>

        <Form.Item className="my-2">
          <button
            type="button"
            onClick={handleReset}
            className="btn btn-danger fw-semibold py-2 rounded-3"
            style={inputWidth}
          >
            Reset
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FilterComponent;
