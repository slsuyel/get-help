import { Form, Input, DatePicker, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
export const renderStudentFields = () => (
  <div className=" row mx-auto">
    <div className="col-md-6">
      <Form.Item
        label="Name of Current School/College/University"
        name="currentSchool"
      >
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item label="Grade/Level or Year of Study" name="grade">
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Major or Field of Study" name="major">
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item label="Expected Graduation Date" name="graduationDate">
        <DatePicker style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Academic Achievements" name="academicAchievements">
        <Input.TextArea style={{ height: 100, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Parent(s)/Guardian(s) Name(s)" name="parentNames">
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item
        label="Occupation of Parent(s)/Guardian(s)"
        name="parentOccupations"
      >
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Total Family Income" name="familyIncome">
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item
        label="Number of Siblings and their Education Status"
        name="siblingsEducationStatus"
      >
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Source of Funding for Education" name="fundingSource">
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item
        label="Financial Need Description"
        name="financialNeedDescription"
      >
        <Input.TextArea style={{ height: 100, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item
        label="Any Current Scholarships or Grants"
        name="currentScholarshipsGrants"
      >
        <Input.TextArea style={{ height: 100, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Type of Assistance Required" name="assistanceType">
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item
        label="Amount of Financial Assistance Needed"
        name="assistanceAmount"
      >
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item
        label="List of Academic Awards or Honors"
        name="academicAwards"
      >
        <Input.TextArea style={{ height: 100, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item
        label="Extracurricular Activities"
        name="extracurricularActivities"
      >
        <Input.TextArea style={{ height: 100, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Leadership Positions Held" name="leadershipPositions">
        <Input.TextArea style={{ height: 100, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item
        label="Name, Relationship, and Contact Information of Reference 1"
        name="reference1"
      >
        <Input.TextArea style={{ height: 100, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item
        label="Name, Relationship, and Contact Information of Reference 2"
        name="reference2"
      >
        <Input.TextArea style={{ height: 100, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Upload Academic Transcripts" name="transcripts">
        <Dragger>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item label="Upload Proof of Income" name="proofOfIncome">
        <Dragger>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item
        label="Upload Letters of Recommendation"
        name="recommendationLetters"
      >
        <Dragger>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Consent to Process Personal Information" name="consent">
        <Input.TextArea style={{ height: 100, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item
        label="Declaration that all Information Provided is True and Accurate"
        name="declaration"
      >
        <Input.TextArea style={{ height: 100, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Signature of the Applicant" name="applicantSignature">
        <Input style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item label="Date of Submission" name="submissionDate">
        <DatePicker style={{ height: 45, width: '100%' }} />
      </Form.Item>
    </div>

    <div className="col-md-12">
      <Form.Item
        label="Describe your educational and career goals"
        name="careerGoal"
      >
        <Input.TextArea rows={4} />
      </Form.Item>
    </div>
    <div className="col-md-12">
      <Form.Item
        label="Explain how this assistance will help you achieve your goals."
        name="howAssis"
      >
        <Input.TextArea rows={4} />
      </Form.Item>
    </div>
  </div>
);
