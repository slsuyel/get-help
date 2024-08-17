/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from 'antd';

const { Option } = Select;

interface FilterProps {
  onFilterChange: (filters: { [key: string]: any }) => void;
}

const FilterComponent = ({ onFilterChange }: FilterProps) => {
  const [form] = Form.useForm();

  // Handle form submission
  const handleFinish = (values: { [key: string]: any }) => {
    onFilterChange(values);
  };
  const handleReset = () => {
    form.resetFields();
  };

  const inputWidth = { width: '100%' };

  return (
    <div className="">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="row mx-auto justify-content-end"
      >
        <Form.Item className="my-2 col-md-2" name="category" label="">
          <Select
            style={{ ...inputWidth, height: 40 }}
            placeholder="Category"
            allowClear
            popupMatchSelectWidth={false}
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

        <Form.Item className="my-2 col-md-2" name="status" label="">
          <Select
            style={{ ...inputWidth, height: 40 }}
            placeholder="Status"
            allowClear
            popupMatchSelectWidth={false}
          >
            <Option value="pending">pending</Option>
            <Option value=" pending approval">pending approval</Option>
            <Option value="approved">approved</Option>
            <Option value="rejected">rejected</Option>
          </Select>
        </Form.Item>

        <Form.Item className="my-2 col-md-2" name="religion" label="">
          <Select
            style={{ ...inputWidth, height: 40 }}
            placeholder="Religion"
            allowClear
            popupMatchSelectWidth={false}
          >
            <Option value="islam">Islam</Option>
            <Option value="christianity">Christianity</Option>
            <Option value="hinduism">Hinduism</Option>
            <Option value="buddhism">Buddhism</Option>
            <Option value="judaism">Judaism</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item className="my-2 col-md-2" name="education" label="">
          <Select
            placeholder="Education"
            style={{ ...inputWidth, height: 40 }}
            allowClear
            popupMatchSelectWidth={false}
          >
            <Option value="n/a">N/A</Option>
            <Option value="class 1">Class 1</Option>
            <Option value="class 2">Class 2</Option>
            <Option value="class 3">Class 3</Option>
            <Option value="class 4">Class 4</Option>
            <Option value="class 5">Class 5</Option>
            <Option value="class 6">Class 6</Option>
            <Option value="class 7">Class 7</Option>
            <Option value="class 8">Class 8</Option>
            <Option value="class 9">Class 9</Option>
            <Option value="class 10">Class 10</Option>
            <Option value="ssc">SSC</Option>
            <Option value="hsc">HSC</Option>
            <Option value="undergraduate">Undergraduate</Option>
            <Option value="graduate">Graduate</Option>
            <Option value="postgraduate">Postgraduate</Option>
            <Option value="phd">PhD</Option>
          </Select>
        </Form.Item>

        <Form.Item className="my-2 col-md-2">
          <button
            type="submit"
            className="btn btn-success fw-semibold py-2 rounded-3"
            style={inputWidth}
          >
            Apply
          </button>
        </Form.Item>

        <Form.Item className="my-2 col-md-2">
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
