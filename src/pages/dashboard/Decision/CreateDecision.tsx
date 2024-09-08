import useAdminProfile from '@/hooks/useAdminProfile';
import { TDonationRequest, TUser } from '@/types';
import { callApi } from '@/utilities/functions';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Select,
} from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;

interface CreateDecisionProps {
  user?: TUser;
  currentD?: TDonationRequest;
  refetch: () => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const CreateDecision = ({
  user,
  currentD,
  refetch,
  modalVisible,
  setModalVisible,
}: CreateDecisionProps) => {
  const [form] = Form.useForm();
  const { admin } = useAdminProfile();
  const handleFormSubmit = async (values: TDonationRequest) => {
    try {
      const data = {
        user_id: user?.id,
        approved_amount: values.approved_amount,
        status: values.status || 'pending',
        how_long: values.duration,
        how_much: values.how_much,
        note: values.note,
        currency: values.currency,
        title: values.title,
        why: values.title,
        feedback: values.feedback,
      };

      const res = await callApi(
        'POST',
        currentD ? `/api/decisions/${currentD.id}` : '/api/decisions',
        data
      );

      if (res.status === 200 || res.status === 201) {
        message.success('Application Submitted');
        refetch();
        setModalVisible(false);
      }
    } catch (error) {
      console.error('Error submitting decision:', error);
      setModalVisible(false);
    }
  };

  return (
    <>
      <Modal
        title={`Application for ${user?.name}`}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <div className="mx-auto mt-5">
          <div className="p-4">
            <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
              {(admin?.role === 'admin' || admin?.role === 'super') && (
                <>
                  <Form.Item
                    initialValue={currentD?.status}
                    label="Status"
                    name="status"
                    className="my-2"
                  >
                    <Select
                      style={{ height: 45, width: '100%' }}
                      placeholder="Status"
                    >
                      <Option value="pending">Pending</Option>
                      <Option value="approved">Approved</Option>
                      <Option value="reject">Rejected</Option>
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
                className="my-2 mt-3"
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

              <Form.Item label="Duration" name="duration">
                <RangePicker style={{ height: 45, width: '100%' }} />
              </Form.Item>

              <div className="row my-2">
                <Form.Item
                  initialValue={currentD?.currency}
                  label="Select Currency"
                  className="col-md-4"
                  name="currency"
                >
                  <Select
                    style={{ height: 45, width: '100%' }}
                    placeholder="Select a currency"
                  >
                    <Option value="USD">USD</Option>
                    <Option value="BDT">BDT</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  className="col-md-8"
                  initialValue={currentD?.how_much}
                  name="how_much"
                  label="How Much"
                  rules={[
                    { required: true, message: 'Please enter the amount' },
                  ]}
                >
                  <InputNumber style={{ height: 45, width: '100%' }} />
                </Form.Item>
              </div>

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
    </>
  );
};

export default CreateDecision;
