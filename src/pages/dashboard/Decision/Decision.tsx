/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Col, Row } from 'antd';

import BackBtn from '@/components/reusable/BackBtn';
import Loader from '@/components/reusable/Loader';
import useSingleUser from '@/hooks/useSingleUser';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import useAdminProfile from '@/hooks/useAdminProfile';

import CreateDecision from './CreateDecision';

const Decision = () => {
  const { id } = useParams<{ id: string }>();
  const [currentD, setCurrentD] = useState();
  const { admin } = useAdminProfile();
  const { user, loading, refetch } = useSingleUser(id);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  if (loading) {
    return <Loader />;
  }

  const handleUpdate = (d: any) => {
    setCurrentD(d);
    setModalVisible(true);
  };

  console.log(user);

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
        <Col xs={24} sm={12} md={8}>
          <Card>
            <div className="table-responsive font_amazon">
              <table className="table table-striped fs-3 table-bordered text-capitalize text-nowrap">
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td>{user?.name}</td>
                  </tr>
                  <tr>
                    <th>Category:</th>
                    <td>{user?.category}</td>
                  </tr>
                  <tr>
                    <th>Phone:</th>
                    <td>{user?.phone}</td>
                  </tr>
                  <tr>
                    <th>Permanent Address:</th>
                    <td>{user?.permanent_address}</td>
                  </tr>
                  <tr>
                    <th>Highest Education:</th>
                    <td>{user?.highest_education}</td>
                  </tr>
                  <tr>
                    <th>Total Applications:</th>
                    <td>{user?.decisions?.length}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </Col>

        {user?.decisions?.map(donation => (
          <Col key={donation.id} xs={24} sm={12} md={8}>
            <Card
              title={
                <div className="align-items-baseline d-flex flex-wrap justify-content-between">
                  <h1>{donation.title}</h1>

                  {(admin?.role == 'admin' || admin?.role == 'super') && (
                    <button
                      disabled={donation.status === 'approved'}
                      onClick={() => handleUpdate(donation)}
                      className="btn btn-primary fs-3 fw-normal p-1 px-3"
                    >
                      Update
                    </button>
                  )}
                </div>
              }
              bordered
              style={{ width: '100%' }}
            >
              <p className="text-body-secondary my-2">
                <span className="fs-4 text-dark">Why:</span> {donation.why}
              </p>
              <p className="text-body-secondary my-2">
                <span className="fs-4 text-dark">Duration:</span>{' '}
                {donation.how_long.start_date}
                {' to '}
                {donation.how_long.end_date}
              </p>
              <p className="text-body-secondary my-2">
                <span className="fs-4 text-dark">Amount Needed:</span>{' '}
                {donation.currency} {''}
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
                <div className="d-flex justify-content-between flex-wrap gap-2 align-items-center">
                  <div>
                    <p className="text-body-secondary my-2">
                      <span className="fs-4 text-success">
                        Approved Amount:
                      </span>{' '}
                      {donation.currency} {''}
                      {donation.approved_amount}
                    </p>
                    <p className="text-body-secondary my-2">
                      <span className="fs-4 text-success">
                        Author Feedback:
                      </span>{' '}
                      {donation.feedback}
                    </p>
                  </div>

                  <div>
                    <Link
                      className="btn btn-success fs-4 fw-normal p-1 px-3"
                      to={`/dashboard/transaction/${donation.id}`}
                    >
                      Transaction
                    </Link>
                  </div>
                </div>
              )}

              {donation.status === 'reject' && (
                <>
                  <p className="text-body-secondary my-2">
                    <span className="fs-4 text-danger">
                      Sorry, your application has been rejected.
                    </span>
                  </p>
                  <p className="text-body-secondary my-2">
                    <span className="fs-4 text-success">Author Feedback:</span>{' '}
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

      <CreateDecision
        user={user}
        refetch={refetch}
        currentD={currentD}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </div>
  );
};

export default Decision;
