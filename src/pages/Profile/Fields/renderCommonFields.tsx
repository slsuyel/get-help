import { TypeDataForm } from '@/types';
import { Form, Input, DatePicker, Select } from 'antd';

const { Option } = Select;

export const renderCommonFields = (user: TypeDataForm) => (
  <>
    <div className="col-md-6">
      <Form.Item initialValue={user.name} label="Applicant Name" name="name">
        <Input
          disabled
          style={{ height: 45, width: '100%' }}
          placeholder="Enter applicant's name"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item
        initialValue={user.father_name}
        label="Father's Name"
        name="father_name"
      >
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter father's name"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item
        initialValue={user.mother_name}
        label="Mother's Name"
        name="mother_name"
      >
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter mother's name"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item
        initialValue={user.nationality}
        label="Nationality"
        name="nationality"
      >
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter nationality"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item
        initialValue={user.country_of_birth}
        label="Country of Birth"
        name="country_of_birth"
      >
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter country of birth"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item initialValue={user.email} label="Email" name="email">
        <Input
          disabled
          style={{ height: 45, width: '100%' }}
          placeholder="Enter email"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item initialValue={user.phone} label="Phone Number" name="phone">
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter phone number"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Date of Birth" name="dob">
        <DatePicker
          required
          style={{ height: 45, width: '100%' }}
          placeholder="Select date of birth"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item
        initialValue={user.national_id_or_ssn}
        label="National ID or Last 4 digits of SSN"
        name="national_id_or_ssn"
      >
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter National ID or last 4 digits of SSN"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item initialValue={user.gender} label="Gender" name="gender">
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
      <Form.Item initialValue={user.race} label="Race" name="race">
        <Input style={{ height: 45, width: '100%' }} placeholder="Enter race" />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item initialValue={user.religion} label="Religion" name="religion">
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
      <Form.Item
        initialValue={user.marital_status}
        label="Marital Status"
        name="marital_status"
      >
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
      <Form.Item
        initialValue={user.current_address}
        label="Current Address"
        name="current_address"
      >
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter current address"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item
        initialValue={user.permanent_address}
        label="Permanent Address"
        name="permanent_address"
      >
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter permanent address"
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item
        initialValue={user.highest_education}
        label="Highest Level of Education"
        name="highest_education"
      >
        <Input
          style={{ height: 45, width: '100%' }}
          placeholder="Enter highest level of education"
        />
      </Form.Item>
    </div>
  </>
);
