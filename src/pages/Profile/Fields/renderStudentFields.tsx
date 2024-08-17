import { TypeDataForm } from '@/types';
import { Form, Input } from 'antd';

export const renderStudentFields = (user?: TypeDataForm) => (
  <>
    <div className="col-md-4">
      <Form.Item
        initialValue={user?.current_institution}
        label="Current Institution Name"
        name="current_institution"
      >
        <Input
          className="input_bor_edit"
          placeholder="Enter current institution name"
          style={{ height: 43, width: '100%' }}
        />
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.institution_address}
        label="Address"
        name="institution_address"
      >
        <Input
          className="input_bor_edit"
          placeholder="Enter institution address"
          style={{ height: 43, width: '100%' }}
        />
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.head_name}
        label="Headmaster/Principal/Dean Name"
        name="head_name"
      >
        <Input
          className="input_bor_edit"
          placeholder="Enter headmaster/principal/dean name"
          style={{ height: 43, width: '100%' }}
        />
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.head_phone}
        label="Phone Number"
        name="head_phone"
      >
        <Input
          className="input_bor_edit"
          placeholder="Enter phone number"
          style={{ height: 43, width: '100%' }}
        />
      </Form.Item>
    </div>

    <div className="col-md-4">
      <Form.Item
        initialValue={user?.recent_exam_grade}
        label="Most Recent Exam Grade"
        name="recent_exam_grade"
      >
        <Input
          className="input_bor_edit"
          placeholder="Enter most recent exam grade"
          style={{ height: 43, width: '100%' }}
        />
      </Form.Item>
    </div>
  </>
);
