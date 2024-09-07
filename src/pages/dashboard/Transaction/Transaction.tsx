/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { Form, Input, Select, Button, Modal } from 'antd';
import BackBtn from '@/components/reusable/BackBtn';
import { useState } from 'react';
import useAdminProfile from '@/hooks/useAdminProfile';
import Loader from '@/components/reusable/Loader';

const Transaction = () => {
  const { id } = useParams();
  console.log(id);
  const { admin, loading } = useAdminProfile();
  const { Option } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formValues, setFormValues] = useState(null);

  const showModal = (values: any) => {
    setFormValues(values);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log('Confirmed Payment:', formValues);
    setIsModalVisible(false);
    // Handle payment logic here
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (values: any) => {
    showModal(values); // Show the modal when form is submitted
  };

  const transactionData = {
    applicant_name: 'John Doe',
    application_name: 'Funds For Study',
    created_date: '2024-09-05',
    creator_name: 'Admin User',
    address: '1234 Elm Street, Springfield, USA',
    approved_amount: 10000,
    transaction_history: [
      {
        date: '2024-08-01',
        amount: 1000,
        payment_by: 'Bank',
        trans_id: 'mfoundation2021',
      },
      {
        date: '2024-08-05',
        amount: 1000,
        payment_by: 'Bank',
        trans_id: 'mfoundation2021',
      },
      {
        date: '2024-08-10',
        amount: 1000,
        payment_by: 'Bank',
        trans_id: 'mfoundation2021',
      },
      {
        date: '2024-08-15',
        amount: 1000,
        payment_by: 'Bank',
        trans_id: 'mfoundation2021',
      },
      {
        date: '2024-08-20',
        amount: 1000,
        payment_by: 'Bank',
        trans_id: 'mfoundation2021',
      },
      {
        date: '2024-08-22',
        amount: 1000,
        payment_by: 'Bank',
        trans_id: 'mfoundation2021',
      },
    ],
  };

  const totalCredited = transactionData.transaction_history.reduce(
    (sum, tx) => sum + tx.amount,
    0
  );
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="mt-4">
      <BackBtn />
      <div className="mt-3"></div>
      <div className=" mb-4 row  mx-auto">
        <div className="col-md-6 ">
          <div className="card px-3 py-2">
            <div className="card-header">Applicant Information</div>
            <div className="card-body">
              <p>
                <strong>Applicant Name:</strong>{' '}
                {transactionData.applicant_name}
              </p>
              <p>
                <strong>Application Created Date:</strong>{' '}
                {transactionData.created_date}
              </p>
              <p>
                <strong>Application Creator Name:</strong>{' '}
                {transactionData.creator_name}
              </p>
              <p>
                <strong>Address:</strong> {transactionData.address}
              </p>
              <p>
                <strong>Approved Amount:</strong> $
                {transactionData.approved_amount}
              </p>
              <p>
                <strong>Total Credited Amount:</strong> ${totalCredited}
              </p>
            </div>
          </div>
        </div>

        {admin?.role == 'admin' && (
          <div className="col-md-6 ">
            <div className="card px-3 py-2 ">
              <div className="card-header my-3">Make Payment</div>
              <Form layout="vertical" onFinish={handleSubmit}>
                <div className="row mx-auto mt-">
                  <div className="col-md-6">
                    <Form.Item
                      name="currency"
                      rules={[
                        {
                          required: true,
                          message: 'Please select a currency!',
                        },
                      ]}
                    >
                      <Select
                        style={{ height: 40, width: '100%' }}
                        placeholder="Select a currency"
                      >
                        <Option value="USD">USD</Option>
                        <Option value="BDT">BDT</Option>
                      </Select>
                    </Form.Item>
                  </div>

                  {/* Amount */}
                  <div className="col-md-6">
                    <Form.Item
                      name="amount"
                      rules={[
                        { required: true, message: 'Please enter an amount!' },
                      ]}
                    >
                      <Input
                        style={{ height: 40, width: '100%' }}
                        type="number"
                        placeholder="Enter amount"
                      />
                    </Form.Item>
                  </div>

                  {/* Payment Method */}
                  <div className="col-md-6">
                    <Form.Item
                      name="paymentBy"
                      rules={[
                        {
                          required: true,
                          message: 'Please select a payment method!',
                        },
                      ]}
                    >
                      <Select
                        style={{ height: 40, width: '100%' }}
                        placeholder="Select payment method"
                      >
                        <Option value="credit_card">Credit Card</Option>
                        <Option value="paypal">PayPal</Option>
                        <Option value="bank_transfer">Bank Transfer</Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="col-md-6">
                    <Form.Item label="">
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: '100%', height: 40 }}
                      >
                        Make Payment
                      </Button>
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        )}
      </div>
      <div className="card">
        <div className="card-header">Transaction History</div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Payment By</th>
                <th>Amount</th>
                <th>Transaction id</th>
              </tr>
            </thead>
            <tbody>
              {transactionData.transaction_history.map((transaction, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.payment_by}</td>
                  <td>${transaction.amount}</td>
                  <td>{transaction.trans_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        title="Confirm Payment"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Confirm"
        cancelText="Cancel"
      >
        <p>Are you sure you want to proceed with this payment?</p>
      </Modal>
    </div>
  );
};

export default Transaction;
