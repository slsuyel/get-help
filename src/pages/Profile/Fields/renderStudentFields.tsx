import { Form, Input } from 'antd';

export const renderStudentFields = () => (
  <>
    <div className="col-md-6">
      <Form.Item label="Current Institution Name" name="currentInstitution">
        <Input
          placeholder="Enter current institution name"
          style={{ height: 45, width: '100%' }}
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Address" name="institutionAddress">
        <Input
          placeholder="Enter institution address"
          style={{ height: 45, width: '100%' }}
        />
      </Form.Item>
    </div>
    <div className="col-md-6">
      <Form.Item label="Headmaster/Principal/Dean Name" name="headName">
        <Input
          placeholder="Enter headmaster/principal/dean name"
          style={{ height: 45, width: '100%' }}
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Phone Number" name="headPhone">
        <Input
          placeholder="Enter phone number"
          style={{ height: 45, width: '100%' }}
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Level of Education" name="educationLevel">
        <Input
          placeholder="Enter level of education"
          style={{ height: 45, width: '100%' }}
        />
      </Form.Item>
    </div>

    <div className="col-md-6">
      <Form.Item label="Most Recent Exam Grade" name="recentExamGrade">
        <Input
          placeholder="Enter most recent exam grade"
          style={{ height: 45, width: '100%' }}
        />
      </Form.Item>
    </div>
  </>
);
