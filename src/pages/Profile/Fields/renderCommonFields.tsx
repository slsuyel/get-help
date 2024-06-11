import { Form, Input, DatePicker, Select } from 'antd';

const { Option } = Select;

export const renderCommonFields = () => (
  <>
    <div className="col-md-6">
      <Form.Item label="Applicant Name" name="applicantName">
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter applicant's name"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Father's Name" name="fatherName">
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter father's name"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Mother's Name" name="motherName">
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter mother's name"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Nationality" name="nationality">
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter nationality"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Country of Birth" name="countryOfBirth">
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter country of birth"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Email" name="email">
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter email"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Phone Number" name="phone">
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter phone number"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Date of Birth" name="dob">
        <DatePicker
          style={{ height: 45, width: '100%' }}
          placeholder="Select date of birth"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item
        label="National ID or Last 4 digits of SSN"
        name="nationalIdOrSsn"
      >
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter National ID or last 4 digits of SSN"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Gender" name="gender">
        <Select
          style={{ height: 45, width: '100%' }}
          placeholder="Select gender"
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Race" name="race">
        <Input style={{ height: 45, width: '100%' }} placeholder="Enter race" />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Religion" name="religion">
        <Select
          style={{ height: 45, width: '100%' }}
          placeholder="Select religion"
        >
          <Option value="christianity">Christianity</Option>
          <Option value="islam">Islam</Option>
          <Option value="hinduism">Hinduism</Option>
          <Option value="buddhism">Buddhism</Option>
          <Option value="judaism">Judaism</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Marital Status" name="maritalStatus">
        <Select
          style={{ height: 45, width: '100%' }}
          placeholder="Select marital status"
        >
          <Option value="single">Single</Option>
          <Option value="married">Married</Option>
          <Option value="divorced">Divorced</Option>
          <Option value="widowed">Widowed</Option>
        </Select>
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Current Address" name="currentAddress">
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter current address"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Permanent Address" name="permanentAddress">
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter permanent address"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Highest Level of Education" name="highestEducation">
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter highest level of education"
        />
      </Form.Item>
    </div>
  </>
);
