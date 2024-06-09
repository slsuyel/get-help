import { Form, Input, Select, DatePicker, Checkbox } from 'antd';

const { Option } = Select;

export const renderRefugeeFields = () => (
  <div className="row mx-auto">
    <div className="col-md-6" key="family-info-col-1">
      <Form.Item
        label="Names and Ages of Family Members"
        name="familyMembers"
        key="familyMembers"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
    </div>
    <div className="col-md-6" key="family-info-col-2">
      <Form.Item
        label="Family Members' Current Location and Status"
        name="familyMembersStatus"
        key="familyMembersStatus"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
    </div>

    <div className="col-md-6" key="legal-status-col-1">
      <Form.Item
        label="Refugee ID or Asylum Seeker Registration Number"
        name="refugeeId"
        key="refugeeId"
      >
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Passport or Other National ID"
        name="nationalId"
        key="nationalId"
      >
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6" key="legal-status-col-2">
      <Form.Item
        label="Legal Representation"
        name="legalRepresentation"
        key="legalRepresentation"
      >
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6" key="background-info-col-1">
      <Form.Item
        label="Reason for Seeking Refugee Status"
        name="reasonForRefugeeStatus"
        key="reasonForRefugeeStatus"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
      <Form.Item
        label="Date of Arrival in Current Country"
        name="arrivalDate"
        key="arrivalDate"
      >
        <DatePicker style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6" key="background-info-col-2">
      <Form.Item
        label="Previous Countries of Residence"
        name="previousCountries"
        key="previousCountries"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
    </div>

    <div className="col-md-6" key="health-info-col-1">
      <Form.Item
        label="General Health Condition"
        name="generalHealthCondition"
        key="generalHealthCondition"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
      <Form.Item
        label="Access to Medical Care"
        name="medicalCareAccess"
        key="medicalCareAccess"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
    </div>
    <div className="col-md-6" key="health-info-col-2">
      <Form.Item
        label="Specific Medical Needs or Disabilities"
        name="medicalNeeds"
        key="medicalNeeds"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
    </div>

    <div className="col-md-6" key="education-employment-col-1">
      <Form.Item
        label="Highest Level of Education Completed"
        name="highestEducationLevel"
        key="highestEducationLevel"
      >
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Current Employment Status"
        name="employmentStatus"
        key="employmentStatus"
      >
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6" key="education-employment-col-2">
      <Form.Item
        label="Employment History"
        name="employmentHistory"
        key="employmentHistory"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
    </div>

    <div className="col-md-6" key="assistance-needed-col-1">
      <Form.Item
        label="Type of Assistance Required"
        name="assistanceType"
        key="assistanceType"
      >
        <Select mode="multiple" style={{ height: 45, width: '100%' }}>
          <Option value="housing">Housing</Option>
          <Option value="legal">Legal</Option>
          <Option value="medical">Medical</Option>
          <Option value="financial">Financial</Option>
          <Option value="educational">Educational</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Plans and Goals for the Future"
        name="futurePlans"
        key="futurePlans"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
    </div>
    <div className="col-md-6" key="assistance-needed-col-2">
      <Form.Item
        label="Description of Immediate Needs"
        name="immediateNeeds"
        key="immediateNeeds"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
    </div>

    <div className="col-md-6" key="support-system-col-1">
      <Form.Item
        label="Any Organizations Currently Assisting"
        name="assistingOrganizations"
        key="assistingOrganizations"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
      <Form.Item
        label="Community Connections"
        name="communityConnections"
        key="communityConnections"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
    </div>

    <div className="col-md-6" key="references-col-1">
      <Form.Item
        label="Name, Relationship, and Contact Information of References"
        name="references"
        key="references"
      >
        <Input.TextArea style={{ width: '100%' }} rows={4} />
      </Form.Item>
    </div>

    <div className="col-md-6" key="consent-declaration-col-1">
      <Form.Item
        label="Consent to Process Personal Information"
        name="consent"
        key="consent"
        valuePropName="checked"
      >
        <Checkbox>
          {' '}
          I consent to the processing of my personal information
        </Checkbox>
      </Form.Item>
      <Form.Item
        label="Declaration"
        name="declaration"
        key="declaration"
        valuePropName="checked"
      >
        <Checkbox>
          {' '}
          I declare that all information provided is true and accurate
        </Checkbox>
      </Form.Item>
    </div>

    <div className="col-md-6" key="signature-date-col-1">
      <Form.Item
        label="Signature of the Applicant or Legal Guardian"
        name="applicantSignature"
        key="applicantSignature"
      >
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Date of Submission"
        name="submissionDate"
        key="submissionDate"
      >
        <DatePicker style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
  </div>
);
