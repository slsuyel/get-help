/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { Form, Input, Select, Button, Modal, message } from 'antd';
import BackBtn from '@/components/reusable/BackBtn';
import { useState } from 'react';
import useAdminProfile from '@/hooks/useAdminProfile';
import Loader from '@/components/reusable/Loader';
import { callApi } from '@/utilities/functions';

import useSingleDecision from '@/hooks/useSingleDecision';

const Transaction = () => {
  const { id } = useParams();
  const { admin, loading } = useAdminProfile();
  const { decision, loading: dload, refetch } = useSingleDecision(Number(id));
  const { Option } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [loader, setLoader] = useState(false);
  const showModal = (values: any) => {
    setFormValues(values);
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
    setLoader(true);
    // Format the date as YYYY-MM-DD HH:MM:SS
    const today = new Date().toISOString().slice(0, 19).replace('T', ' ');
    try {
      const res = await callApi('POST', '/api/transactions', {
        decision_id: id,
        datetime: today,
        ...formValues,
      });

      if (res.status === 201) {
        message.success('Transaction created successfully');
        setLoader(false);
        refetch();
      }
    } catch (error) {
      message.error('Transaction created successfully');
      console.error('API Error:', error);
      setLoader(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (values: any) => {
    showModal(values);
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

  const totalCredited = decision?.transactions.reduce(
    (sum, tx) => sum + Number(tx.amount),
    0
  );

  if (loading || dload) {
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
                <strong>Applicant Name:</strong> {decision?.user.name}
              </p>
              <p>
                <strong>Application Created Date:</strong>{' '}
                {transactionData.created_date}
              </p>
              <p>
                <strong>Application Creator Name:</strong>{' '}
                {decision?.user.creator}
              </p>
              <p>
                <strong>Address:</strong> : {decision?.user.current_address}
              </p>
              <p>
                <strong>Approved Amount:</strong> {decision?.currency}{' '}
                {decision?.approved_amount}
              </p>
              <p>
                <strong>Total Credited Amount:</strong> {decision?.currency}{' '}
                {totalCredited}
              </p>
            </div>
          </div>
        </div>
        {(admin?.role === 'admin' || admin?.role === 'super') && (
          <div className="col-md-6">
            <div className="card px-3">
              <div className="card-header my-2 mb-3">Make Payment</div>
              <Form layout="vertical" onFinish={handleSubmit}>
                <div className="row mx-auto mt-">
                  {/* Currency */}
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
                        {
                          required: true,
                          message: 'Please enter an amount!',
                        },
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
                      name="payment_by"
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
                    <Form.Item name="note">
                      <Input
                        style={{ height: 40, width: '100%' }}
                        type="text"
                        placeholder="Enter any note!"
                      />
                    </Form.Item>
                  </div>
                  {/* Submit Button */}
                  <div className="col-md-4">
                    <Form.Item>
                      <Button
                        loading={loader}
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
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {decision?.transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{transaction.datetime}</td>
                  <td>{transaction.payment_by}</td>
                  <td>${transaction.amount}</td>
                  <td>{transaction.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        title="Confirm Payment"
        open={isModalVisible}
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
