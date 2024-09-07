import { Form, Input, /* Checkbox,  */ message } from 'antd';
import { renderRefugeeFields } from './Fields/renderRefugeeFields';
import { renderStudentFields } from './Fields/renderStudentFields';

import { TypeDataForm } from '@/types';
import { renderCommonFields } from './Fields/renderCommonFields';
import { callApi } from '@/utilities/functions';

import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useSingleUser from '@/hooks/useSingleUser';
import BackBtn from '@/components/reusable/BackBtn';

const EditProfile = (): JSX.Element | null => {
  const { id } = useParams();
  const { user, loading } = useSingleUser(id);

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values: TypeDataForm) => {
    setLoader(true);
    if (values) {
      const updatedValues = {
        ...values,
      };

      console.log(updatedValues);
      const res = await callApi(
        'POST',
        `/api/user/update/${id}`,
        updatedValues
      );
      if (res.status == 200) {
        setLoader(false);
        navigate('/dashboard/all-users');
        message.success('Data  Update / Create Successfully');
      } else {
        message.error('User Update failed');
        setLoader(false);
      }
    } else {
      message.error('User Update failed');
      console.log('error');
      setLoader(false);
    }
  };
  if (loading) {
    return <>Loading . . .</>;
  }

  return (
    <div className="" style={{ background: '#f4f5f7' }}>
      <BackBtn />
      <hr />
      <br />
      <Form
        layout="vertical"
        onFinish={onFinish}
        className="p-4 shadow rounded  edit_pro"
      >
        <div className="row mx-auto">
          {renderCommonFields(user)}
          {user?.category === 'student' && renderStudentFields(user)}
          {user?.category === 'refugee' && renderRefugeeFields()}

          <div className="col-md-4">
            <Form.Item
              initialValue={user?.reference1_name}
              label="Reference 1 Name"
              name="reference1_name"
            >
              <Input
                className="input_bor_edit"
                placeholder="Enter reference 1 name"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-4">
            <Form.Item
              initialValue={user?.reference1_address}
              label="Reference 1 Address"
              name="reference1_address"
            >
              <Input
                className="input_bor_edit"
                placeholder="Enter reference 1 address"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-4">
            <Form.Item
              initialValue={user?.reference1_phone}
              label="Reference 1 Phone Number"
              name="reference1_phone"
            >
              <Input
                type="number"
                className="input_bor_edit"
                placeholder="Enter reference 1 phone number"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-4">
            <Form.Item
              initialValue={user?.reference1_email}
              label="Reference 1 Email"
              name="reference1_email"
            >
              <Input
                type="email"
                className="input_bor_edit"
                placeholder="Enter reference 1 email"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-4">
            <Form.Item
              initialValue={user?.reference1_relationship}
              label="Reference 1 Relationship"
              name="reference1_relationship"
            >
              <Input
                className="input_bor_edit"
                placeholder="Enter reference 1 relationship"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-4">
            <Form.Item
              initialValue={user?.reference2_name}
              label="Reference 2 Name"
              name="reference2_name"
            >
              <Input
                className="input_bor_edit"
                placeholder="Enter reference 2 name"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-4">
            <Form.Item
              label="Reference 2 Address"
              initialValue={user?.reference2_address}
              name="reference2_address"
            >
              <Input
                className="input_bor_edit"
                placeholder="Enter reference 2 address"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-4">
            <Form.Item
              initialValue={user?.reference2_phone}
              label="Reference 2 Phone Number"
              name="reference2_phone"
            >
              <Input
                type="number"
                className="input_bor_edit"
                placeholder="Enter reference 2 phone number"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-4">
            <Form.Item
              initialValue={user?.reference2_email}
              label="Reference 2 Email"
              name="reference2_email"
            >
              <Input
                type="email"
                className="input_bor_edit"
                placeholder="Enter reference 2 email"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-4">
            <Form.Item
              initialValue={user?.reference2_relationship}
              label="Reference 2 Relationship"
              name="reference2_relationship"
            >
              <Input
                className="input_bor_edit"
                placeholder="Enter reference 2 relationship"
                style={{ height: 43, width: '100%' }}
              />
            </Form.Item>
          </div>

          <div className="col-md-4">
            <Form.Item
              initialValue={user?.situation}
              label="Describe your situation in minimum 200 hundred Words: "
              name="situation"
            >
              <Input.TextArea
                className="input_bor_edit"
                placeholder="Enter current situation"
                style={{ height: 100, width: '100%' }}
              />
            </Form.Item>
          </div>

          <Form.Item key="submit-button">
            <div className="d-flex flex-wrap gap-2 jus justify-content-between">
              <button
                type="submit"
                className="btn btn-get-started"
                style={{ width: '215px' }}
              >
                {' '}
                {loader ? <Spinner /> : ' Submit & Apply'}
              </button>

              <div></div>
            </div>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default EditProfile;
