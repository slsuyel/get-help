import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
} from 'antd';
const { Option } = Select;
import BackBtn from '@/components/reusable/BackBtn';
import Loader from '@/components/reusable/Loader';
import useSingleUser from '@/hooks/useSingleUser';
import { useLocation, useParams } from 'react-router-dom';
import { TDecision } from '@/types';
import { useState } from 'react';
import useAdminProfile from '@/hooks/useAdminProfile';

const data = [
  {
    applicant_id: 24,
    title: 'Books and Supplies',
    why: 'The student needs funds for essential books and supplies.',
    how_long: '1 month',
    how_much: 200,
    note: 'The student has managed expenses well but needs additional support for materials.',
    status: 'pending',
    approved_amount: 0,
    feedback: '',
  },
  {
    applicant_id: 24,
    title: 'Medical Expenses',
    why: 'The student requires funds for a necessary surgery.',
    how_long: 'Immediate',
    how_much: 3000,
    note: 'The surgery is urgent, and the student has no other means to cover the costs.',
    status: 'rejected',
    approved_amount: 0,
    feedback: 'Currently we cannot provided you, Try again letter',
  },
  {
    applicant_id: 24,
    title: 'Tuition Fees for Final Semester',
    why: 'The student needs to pay for the final semester to complete their degree.',
    how_long: '4 months',
    how_much: 1000,
    note: 'The student has maintained a strong academic record but is facing financial challenges due to family circumstances.',
    status: 'approved',
    approved_amount: 500,
    feedback: 'Here is admin feedback',
  },
];

const Decision = () => {
  const location = useLocation();
  const { id } = useParams();
  const { admin, loading: adminLoading } = useAdminProfile();

  const { user, loading } = useSingleUser(id);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  if (loading) {
    return <Loader />;
  }

  const handleFormSubmit = (values: TDecision) => {
    console.log(values);
    setModalVisible(false);
  };

  return (
    <div className="mx-auto">
      <div className="align-items-center border-bottom d-flex gap-5 pb-5">
        {!adminLoading &&
          admin?.role == 'Admin' &&
          location.pathname.includes('dashboard/applications') && (
            <div className="bg-success-subtle border p-2 pb-2 pe-3 ps-1 py-3 rounded-circle">
              <BackBtn />
            </div>
          )}
        <div>
          <button
            onClick={() => setModalVisible(true)}
            className="btn btn-success fw-normal p-2"
          >
            Create Applications of {user?.name}
          </button>
        </div>
      </div>

      <Row gutter={[16, 16]} className="mt-5">
        {data.map((donation, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              title={
                <div className="align-items-baseline d-flex flex-wrap justify-content-between">
                  <h1>{donation.title}</h1>
                  {admin?.role == 'admin' && (
                    <button
                      onClick={() => setModalVisible(true)}
                      className="btn btn-primary fs-3 fw-normal p-1 px-3"
                    >
                      Update
                    </button>
                  )}
                </div>
              }
              bordered={true}
              style={{ width: '100%' }}
            >
              <p className="text-body-secondary my-2">
                <span className="fs-4 text-dark">Why:</span> {donation.why}
              </p>
              <p className="text-body-secondary my-2">
                <span className="fs-4 text-dark">Duration:</span>{' '}
                {donation.how_long}
              </p>
              <p className="text-body-secondary my-2">
                <span className="fs-4 text-dark">Amount Needed:</span> $
                {donation.how_much}
              </p>
              <p className="text-body-secondary my-2">
                <span className="fs-4 text-dark">Applied Date:</span> 20/08/2024
              </p>

              <p className="text-body-secondary my-2">
                <span className="fs-4 text-dark">Note:</span> {donation.note}
              </p>
              <hr />

              {donation.status === 'approved' && (
                <>
                  <p className="text-body-secondary my-2">
                    <span className="fs-4 text-success">Approved Amount:</span>{' '}
                    {donation.approved_amount}
                  </p>
                  <p className="text-body-secondary my-2">
                    <span className="fs-4 text-success">Author Feedback:</span>{' '}
                    {donation.feedback}
                  </p>
                </>
              )}

              {donation.status === 'rejected' && (
                <>
                  <p className="text-body-secondary my-2">
                    <span className="fs-4 text-danger">Rejected:</span>{' '}
                    {donation.feedback}
                  </p>
                </>
              )}

              {donation.status === 'pending' && (
                <p className="btn btn-warning fs-3 fw-normal p-1 px-4 text-bg-danger mt-3">
                  Wait for Admin review
                </p>
              )}
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={` Application for ${user?.name}`}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <div className="mx-auto mt-5">
          <div className="p-4">
            <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
              {admin?.role == 'admin' && (
                <>
                  <Form.Item label="Status" name="status" className="my-2">
                    <Select
                      className=""
                      style={{ height: 45, width: '100%' }}
                      placeholder="Status"
                    >
                      <Option value="pending">Rejected</Option>
                      <Option value="pending">Pending</Option>
                      <Option value="approved">Approved</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    className="my-2"
                    name="approved_amount"
                    label="Approved Amount"
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    className="my-2"
                    name="feedback"
                    label="Admin Feedback"
                  >
                    <Input.TextArea rows={2} />
                  </Form.Item>
                </>
              )}

              <Form.Item
                className="my-2"
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please enter the title' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                className="my-2"
                name="why"
                label="Why"
                rules={[
                  { required: true, message: 'Please explain the reason' },
                ]}
              >
                <Input.TextArea rows={3} />
              </Form.Item>
              <Form.Item
                className="my-2"
                name="how_long"
                label="How Long"
                rules={[
                  { required: true, message: 'Please enter the duration' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                className="my-2"
                name="how_much"
                label="How Much"
                rules={[{ required: true, message: 'Please enter the amount' }]}
              >
                <InputNumber style={{ height: 45, width: '100%' }} />
              </Form.Item>
              <Form.Item className="my-2" name="note" label="Note">
                <Input.TextArea style={{ height: 80 }} />
              </Form.Item>

              <Form.Item className="my-2">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Decision;
