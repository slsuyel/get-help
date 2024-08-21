/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from 'antd';
import { Form, Select } from 'antd';

const { Option } = Select;

const AllApplications = () => {
  const data = [
    {
      applicant_id: 24,
      name: 'John Doe',
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
      applicant_id: 25,
      name: 'Jane Smith',
      title: 'Medical Expenses',
      why: 'The student requires funds for a necessary surgery.',
      howLong: 'Immediate',
      howMuch: 3000,
      note: 'The surgery is urgent, and the student has no other means to cover the costs.',
      status: 'rejected',
      approved_amount: 0,
      feedback: 'Currently we cannot provide you, Try again later',
    },
    {
      applicant_id: 26,
      name: 'Alice Johnson',
      title: 'Tuition Fees for Final Semester',
      why: 'The student needs to pay for the final semester to complete their degree.',
      howLong: '4 months',
      howMuch: 1000,
      note: 'The student has maintained a strong academic record but is facing financial challenges due to family circumstances.',
      status: 'approved',
      approved_amount: 500,
      feedback: 'Here is admin feedback',
    },
    {
      applicant_id: 27,
      name: 'Bob Brown',
      title: 'Living Expenses',
      why: 'The student needs help with rent and utilities.',
      howLong: '3 months',
      howMuch: 600,
      note: 'The student lost a part-time job and needs temporary assistance.',
      status: 'pending',
      approved_amount: 0,
      feedback: '',
    },
    {
      applicant_id: 28,
      name: 'Charlie Davis',
      title: 'Lab Equipment',
      why: 'The student needs specialized equipment for a final project.',
      howLong: '1 month',
      howMuch: 400,
      note: 'The equipment is required to complete a key project for graduation.',
      status: 'approved',
      approved_amount: 400,
      feedback: 'Approved with full amount',
    },
  ];

  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log('Form Data:', values);
  };

  const handleReset = () => {
    form.resetFields();
  };

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
              <th>Name</th>

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
                <td>{application.name}</td>

                <td>{application.howLong}</td>
                <td>${application.howMuch}</td>
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
