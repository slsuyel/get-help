import { Button, Form, Input, InputNumber } from 'antd';
import BackBtn from '@/components/reusable/BackBtn';
import Loader from '@/components/reusable/Loader';
import useSingleUser from '@/hooks/useSingleUser';
import { useParams } from 'react-router-dom';
import { TDecision } from '@/types';

const Decision = () => {
  const { id } = useParams();
  const { user, loading } = useSingleUser(id);

  const [form] = Form.useForm();

  const decisionHistory = [
    {
      no: 1,
      why: 'Increase productivity',
      howLong: '3 months',
      howMuch: 5000,
      note: 'Focused on implementing new tools',
    },
    {
      no: 2,
      why: 'Improve customer satisfaction',
      howLong: '6 weeks',
      howMuch: 2500,
      note: 'Hiring additional support staff',
    },
    {
      no: 3,
      why: 'Reduce operational costs',
      howLong: '1 year',
      howMuch: 15000,
      note: 'Streamlining supply chain management',
    },
    {
      no: 4,
      why: 'Expand market reach',
      howLong: '2 months',
      howMuch: 7000,
      note: 'Launching a new marketing campaign',
    },
    {
      no: 5,
      why: 'Enhance product quality',
      howLong: '4 months',
      howMuch: 8000,
      note: 'Investing in R&D and testing',
    },
  ];

  const totalAmount = decisionHistory.reduce(
    (total, item) => total + item.howMuch,
    0
  );

  if (loading) {
    return <Loader />;
  }

  const handleFormSubmit = (values: TDecision) => {
    console.log(values);
  };

  return (
    <div className="mx-auto">
      <div className="align-items-center border-bottom d-flex gap-5 pb-5">
        <div className="bg-success-subtle border p-2 pb-2 pe-3 ps-1 py-3 rounded-circle">
          <BackBtn />
        </div>
      </div>
      <div className="card col-md-8 mx-auto mt-5">
        <h3 className="text-center my-4">Make a Decision for {user?.name}</h3>

        <div className="p-4">
          <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
            <Form.Item
              name="why"
              label="Why"
              rules={[{ required: true, message: 'Please enter the reason' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="howLong"
              label="How Long"
              rules={[{ required: true, message: 'Please enter the duration' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="howMuch"
              label="How Much"
              rules={[{ required: true, message: 'Please enter the amount' }]}
            >
              <InputNumber style={{ height: 45, width: '100%' }} />
            </Form.Item>
            <Form.Item name="note" label="Note">
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div className="table-responsive col-md-9 mx-auto">
        <h4 className="fs-2 my-5 text-primary-emphasis">
          Decision History of{' '}
          <strong className="text-primary">{user?.name}</strong>
        </h4>
        <div>
          {' '}
          <h5 className="fs-2 text-end">
            <span className="border p-2 px-4 border-bottom-0">
              Total Amount ${totalAmount.toLocaleString()}
            </span>
          </h5>
        </div>
        <table className="table table-bordered table-striped fs-3">
          <thead>
            <tr className="text-nowrap">
              <th>No</th>
              <th>Why</th>
              <th>How Long</th>
              <th>How Much</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {decisionHistory.map(decision => (
              <tr key={decision.no}>
                <td>{decision.no}</td>
                <td>{decision.why}</td>
                <td>{decision.howLong}</td>
                <td>${decision.howMuch.toLocaleString()}</td>
                <td>{decision.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Decision;
