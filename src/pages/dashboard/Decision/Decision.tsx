/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  message,
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
import { callApi } from '@/utilities/functions';

const Decision = () => {
  const location = useLocation();
  const { id } = useParams();
  const [currentD, setCurrentD] = useState<TDecision>();
  const { admin, loading: adminLoading } = useAdminProfile();

  const { user, loading, refetch } = useSingleUser(id);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  if (loading) {
    return <Loader />;
  }

  const handleFormSubmit = async (values: TDecision) => {
    try {
      const data = {
        user_id: id,
        approved_amount: values.approved_amount,
        status: values.status || 'pending',
        how_long: values.how_long,
        how_much: values.how_much,
        note: values.note,
        title: values.title,
        why: values.title,
        feedback: values.feedback,
      };

      const res = await callApi(
        'POST',
        currentD ? `/api/decisions/${currentD.id}` : '/api/decisions',
        data
      );
      // console.log(res);
      if (res.status == 200 || res.status == 201) {
        message.success('Application Submitted');
        refetch();
        setModalVisible(false);
      }
    } catch (error) {
      console.error('Error submitting decision:', error);
      setModalVisible(false);
    }
  };

  const handleUpdate = (d: TDecision) => {
    setCurrentD(d);
    setModalVisible(true);
    // console.log(d);
  };

  return (
    <div className="mx-auto">
      <div className="align-items-center d-flex flex-wrap justify-content-between my-5">
        <BackBtn />
        <button
          onClick={() => setModalVisible(true)}
          className="btn btn-success fw-normal p-2"
        >
          Create Applications of {user?.name}
        </button>
      </div>

      <Row gutter={[16, 16]} className="mt-5">
        {user?.decisions?.map((donation, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              title={
                <div className="align-items-baseline d-flex flex-wrap justify-content-between">
                  <h1>{donation.title}</h1>
                  {admin?.role == 'admin' && (
                    <button
                      onClick={() => {
                        handleUpdate(donation);
                      }}
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
                <p className="btn  btn-warning fs-3 fw-normal p-1 px-4 text-bg-danger mt-3">
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
                  <Form.Item
                    initialValue={currentD?.status}
                    label="Status"
                    name="status"
                    className="my-2"
                  >
                    <Select
                      className=""
                      style={{ height: 45, width: '100%' }}
                      placeholder="Status"
                    >
                      <Option value="approved">Approved</Option>
                      <Option value="rejected">Rejected</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    initialValue={
                      currentD?.how_much || currentD?.approved_amount
                    }
                    className="my-2"
                    name="approved_amount"
                    label="Approved Amount"
                  >
                    <InputNumber style={{ height: 45, width: '100%' }} />
                  </Form.Item>

                  <Form.Item
                    initialValue={currentD?.feedback}
                    className="my-2"
                    name="feedback"
                    label="Admin Feedback"
                  >
                    <Input.TextArea rows={2} />
                  </Form.Item>
                </>
              )}

              <Form.Item
                initialValue={currentD?.title}
                className="my-2"
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please enter the title' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                initialValue={currentD?.why}
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
                initialValue={currentD?.how_long}
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
                initialValue={currentD?.how_much}
                className="my-2"
                name="how_much"
                label="How Much"
                rules={[{ required: true, message: 'Please enter the amount' }]}
              >
                <InputNumber style={{ height: 45, width: '100%' }} />
              </Form.Item>
              <Form.Item
                initialValue={currentD?.note}
                className="my-2"
                name="note"
                label="Note"
              >
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
