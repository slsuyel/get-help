/* eslint-disable @typescript-eslint/no-explicit-any */

import Loader from '@/components/reusable/Loader';
import useAllDecision from '@/hooks/useAllDecision';
import { Input } from 'antd';
import { Form, Select } from 'antd';

const { Option } = Select;

const AllApplications = () => {
  const { data, isLoading } = useAllDecision();
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log('Form Data:', values);
  };

  const handleReset = () => {
    form.resetFields();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-4">
      <div className="align-item-center d-flex flex-wrap gap-3 my-3 justify-content-between">
        <div>
          <form
            onSubmit={e => e.preventDefault()}
            className="align-item-center d-flex gap-3"
          >
            <Input
              allowClear
              required
              type="text"
              style={{ height: 40, width: '100%' }}
              placeholder="Enter Title,Name or etc"
            />
            <button
              type="submit"
              className="btn btn-success fw-semibold py-2 rounded-3"
            >
              Search
            </button>
          </form>
        </div>

        <div>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            className="d-flex flex-wrap gap-2 justify-content-between"
          >
            <Form.Item className="my-2 " name="status" label="">
              <Select
                style={{ height: 40, width: 100 }}
                placeholder="Status"
                allowClear
                popupMatchSelectWidth={false}
              >
                <Option value="pending">Pending</Option>
                <Option value="approved">Approved</Option>
                <Option value="rejected">Rejected</Option>
              </Select>
            </Form.Item>

            <Form.Item className="my-2 " name="time" label="">
              <Select
                placeholder="Time"
                style={{ height: 40, width: 100 }}
                allowClear
                popupMatchSelectWidth={false}
              >
                <Option value="7days">Last 7 Days</Option>
                <Option value="30days">Last 30 Days</Option>
                <Option value="90days">Last 90 Days</Option>
                <Option value="365days">Last 365 Days</Option>
              </Select>
            </Form.Item>

            <Form.Item className="my-2 ">
              <button
                type="submit"
                className="btn btn-success fw-semibold py-2 rounded-3"
              >
                Apply
              </button>
            </Form.Item>

            <Form.Item className="my-2 ">
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-danger fw-semibold py-2 rounded-3"
              >
                Reset
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped fs-3 table-bordered text-capitalize text-nowrap">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Applied Date</th>

              {/* <th>Name</th> */}

              <th>How Long</th>
              <th>How Much</th>
              <th>Status</th>
              <th>Approved Amount</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {data.map((application, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{application.title}</td>
                <td>{application.date}</td>
                {/* <td>{application.user.name}</td> */}

                <td>{application.how_long}</td>
                <td>${application.how_much}</td>
                <td
                  className={`text-capitalize ${
                    application.status === 'rejected'
                      ? 'text-danger'
                      : application.status === 'approved'
                      ? 'text-success'
                      : application.status === 'pending'
                      ? 'text-warning'
                      : ''
                  } text-center `}
                >
                  {application.status}
                </td>
                <td>${application.approved_amount}</td>
                <td>{application.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllApplications;
