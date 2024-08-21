import { Button, Card, Col, Form, Input, InputNumber, Modal, Row } from 'antd';
import BackBtn from '@/components/reusable/BackBtn';
import Loader from '@/components/reusable/Loader';
import useSingleUser from '@/hooks/useSingleUser';
import { useLocation, useParams } from 'react-router-dom';
import { TDecision } from '@/types';
import { useState } from 'react';

const data = [
  {
    applicant_id: 24,
    title: 'Books and Supplies',
    why: 'The student needs funds for essential books and supplies.',
    howLong: '1 month',
    howMuch: 200,
    note: 'The student has managed expenses well but needs additional support for materials.',
    status: 'pending',
    approved_amount: 0,
    feedback: '',
  },
  {
    applicant_id: 24,
    title: 'Medical Expenses',
    why: 'The student requires funds for a necessary surgery.',
    howLong: 'Immediate',
    howMuch: 3000,
    note: 'The surgery is urgent, and the student has no other means to cover the costs.',
    status: 'rejected',
    approved_amount: 0,
    feedback: 'Currently we cannot provided you, Try again letter',
  },
  {
    applicant_id: 24,
    title: 'Tuition Fees for Final Semester',
    why: 'The student needs to pay for the final semester to complete their degree.',
    howLong: '4 months',
    howMuch: 1000,
    note: 'The student has maintained a strong academic record but is facing financial challenges due to family circumstances.',
    status: 'approved',
    approved_amount: 500,
    feedback: 'Here is admin feedback',
  },
];

const Decision = () => {
  const location = useLocation();
  console.log(location);
  const { id } = useParams();
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
        {location.pathname.includes('dashboard/applications') && (
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
              title={donation.title}
              bordered={true}
              style={{ width: '100%' }}
            >
              <p className="text-body-secondary mb-1">
                <span className="fs-4 text-dark">Why:</span> {donation.why}
              </p>
              <p className="text-body-secondary mb-1">
                <span className="fs-4 text-dark">Duration:</span>{' '}
                {donation.howLong}
              </p>
              <p className="text-body-secondary mb-1">
                <span className="fs-4 text-dark">Amount Needed:</span> $
                {donation.howMuch}
              </p>
              <p className="text-body-secondary mb-1">
                <span className="fs-4 text-dark">Applied Date:</span> 20/08/2024
              </p>

              <p className="text-body-secondary mb-1">
                <span className="fs-4 text-dark">Note:</span> {donation.note}
              </p>
              <hr />

              {donation.status === 'approved' && (
                <>
                  <p className="text-body-secondary mb-1">
                    <span className="fs-4 text-success">Approved Amount:</span>{' '}
                    {donation.approved_amount}
                  </p>
                  <p className="text-body-secondary mb-1">
                    <span className="fs-4 text-success">Author Feedback:</span>{' '}
                    {donation.feedback}
                  </p>
                </>
              )}

              {donation.status === 'rejected' && (
                <>
                  <p className="text-body-secondary mb-1">
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
        title={`Create an Application for ${user?.name}`}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <div className="mx-auto mt-5">
          <div className="p-4">
            <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
              <Form.Item
                className="mb-1"
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please enter the title' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                className="mb-1"
                name="why"
                label="Why"
                rules={[
                  { required: true, message: 'Please explain the reason' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                className="mb-1"
                name="howLong"
                label="How Long"
                rules={[
                  { required: true, message: 'Please enter the duration' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                className="mb-1"
                name="howMuch"
                label="How Much"
                rules={[{ required: true, message: 'Please enter the amount' }]}
              >
                <InputNumber style={{ height: 45, width: '100%' }} />
              </Form.Item>
              <Form.Item className="mb-1" name="note" label="Note">
                <Input.TextArea style={{ height: 80 }} />
              </Form.Item>
              <Form.Item className="mb-1">
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
