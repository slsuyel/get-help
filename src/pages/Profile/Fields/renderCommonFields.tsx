import { TUser } from '@/types';
import { Form, Input, DatePicker, Select } from 'antd';

const { Option } = Select;

export const renderCommonFields = (user?: TUser | null) => (
  <>
    <div className="col-md-4">
      <Form.Item
        initialValue={user?.name}
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
    <div className="col-md-4">
      <Form.Item
        initialValue={user?.category}
        label="Category*"
        name="category"
      >
        <Input
          disabled
          className="input_bor_edit text-capitalize"
          style={{ height: 43, width: '100%', marginTop: '0' }}
        />
      </Form.Item>
    </div>
    <div className="col-md-4">
      <Form.Item initialValue={user?.phone} label="Phone Number" name="phone">
        <Input
          type="number"
          className="input_bor_edit"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Enter phone number"
        />
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.father_name}
        label="Father's Name"
        name="father_name"
      >
        <Input
          className="input_bor_edit"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Enter father's name"
        />
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.mother_name}
        label="Mother's Name"
        name="mother_name"
      >
        <Input
          className="input_bor_edit"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Enter mother's name"
        />
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.nationality}
        label="Nationality"
        name="nationality"
      >
        <Input
          className="input_bor_edit"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Enter nationality"
        />
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.country_of_birth}
        label="Country of Birth"
        name="country_of_birth"
      >
        <Input
          className="input_bor_edit"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Enter country of birth"
        />
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item label="Date of Birth" name="dob">
        <DatePicker
          required
          className="input_bor_edit"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Select date of birth"
        />
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.national_id_or_ssn}
        label="National ID or Last 4 digits of SSN"
        name="national_id_or_ssn"
      >
        <Input
          className="input_bor_edit"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Enter National ID or last 4 digits of SSN"
        />
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item initialValue={user?.gender} label="Gender" name="gender">
        <Select
          className="input_bor_edit rounded-bottom-4"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Select gender"
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item initialValue={user?.race} label="Race" name="race">
        <Select
          className="input_bor_edit"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Select race"
        >
          <Option value="white">White</Option>
          <Option value="black_or_african_american">
            Black or African American
          </Option>
          <Option value="american_indian_or_alaska_native">
            American Indian or Alaska Native
          </Option>
          <Option value="asian">Asian</Option>
          <Option value="native_hawaiian_or_other_pacific_islander">
            Native Hawaiian or Other Pacific Islander
          </Option>
        </Select>
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item initialValue={user?.religion} label="Religion" name="religion">
        <Select
          className="input_bor_edit rounded-bottom-4"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Select religion"
        >
          <Option value="islam">Islam</Option>
          <Option value="christianity">Christianity</Option>
          <Option value="hinduism">Hinduism</Option>
          <Option value="buddhism">Buddhism</Option>
          <Option value="judaism">Judaism</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.marital_status}
        label="Marital Status"
        name="marital_status"
      >
        <Select
          className="input_bor_edit rounded-bottom-4"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Select marital status"
        >
          <Option value="single">Single</Option>
          <Option value="married">Married</Option>
          <Option value="divorced">Divorced</Option>
          <Option value="widowed">Widowed</Option>
        </Select>
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.current_address}
        label="Current Address"
        name="current_address"
      >
        <Input
          className="input_bor_edit"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Enter current address"
        />
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.permanent_address}
        label="Permanent Address"
        name="permanent_address"
      >
        <Input
          className="input_bor_edit"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Enter permanent address"
        />
      </Form.Item>
    </div>

    {/* <div className="col-md-4">
      <Form.Item
        initialValue={user?.education_level}
        label="Level of Education"
        name="education_level"
      >
        <Input
          className="input_bor_edit"
          placeholder="Enter level of education"
          style={{ height: 43, width: '100%' }}
        />
      </Form.Item>
    </div> */}

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.education_level}
        label="Level of Education"
        name="education_level"
      >
        <Select
          className="input_bor_edit rounded-bottom-4"
          style={{ height: 43, width: '100%', marginTop: '0' }}
          placeholder="Level of Education"
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
    </div>
  </>
);
