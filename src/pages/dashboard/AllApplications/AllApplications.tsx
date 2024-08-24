/* eslint-disable @typescript-eslint/no-explicit-any */

import Loader from '@/components/reusable/Loader';
import useAllDecision from '@/hooks/useAllDecision';
import { callApi } from '@/utilities/functions';
import { Input, message } from 'antd';
import { Form, Select } from 'antd';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

const { confirm } = Modal;
const { Option } = Select;

const AllApplications = () => {
  const { data, isLoading, refetch } = useAllDecision();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleFinish = (values: any) => {
    console.log('Form Data:', values);
  };

  const handleReset = () => {
    form.resetFields();
  };
  const handleAction = (id: number, text: string) => {
    confirm({
      title: `Are you sure you want to ${text} this Application?`,
      content: 'This action cannot be undone.',
      okText: 'Yes',
      cancelText: 'No',
      onOk: async () => {
        if (text === 'Delete') {
          const res = await callApi('Delete', `/api/decisions/${id}`);

          if (res.status === 200) {
            refetch();
            message.success('Application Deleted Successfully');
          } else {
            message.error('Application Deletion Failed');
          }
        }
        navigate(`/dashboard/applications/${id}`);
      },
    });
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
              <th>Action</th>
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
                <td
                  style={{ cursor: 'pointer' }}
                  className="d-flex flex-wrap justify-content-around"
                >
                  <i
                    onClick={() => handleAction(application.user_id, 'Update')}
                    className="fa-solid fa-pen-to-square text-primary"
                  ></i>
                  <i
                    onClick={() => handleAction(application.id, 'Delete')}
                    className="fa-solid fa-trash text-danger"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllApplications;
