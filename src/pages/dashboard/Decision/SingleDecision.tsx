import { useState, useEffect } from 'react';
import { callApi } from '@/utilities/functions';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import { TDecision } from '@/types';

const SingleDecision = () => {
  const { id } = useParams();
  const [donation, setDonation] = useState<TDecision>();

  useEffect(() => {
    const fetchDecision = async () => {
      try {
        const res = await callApi('get', `/api/decisions/${id}`);
        console.log(res);
        setDonation(res);
      } catch (error) {
        console.error('Error fetching decision:', error);
      }
    };

    fetchDecision();
  }, [id]);

  console.log(donation);

  if (!donation) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Card
        // title={
        //   <div className="align-items-baseline d-flex flex-wrap justify-content-between">
        //     <h1>{donation.title}</h1>
        //     {admin?.role === 'admin' && (
        //       <button
        //         onClick={() => {
        //           handleUpdate(donation);
        //         }}
        //         className="btn btn-primary fs-3 fw-normal p-1 px-3"
        //       >
        //         Update
        //       </button>
        //     )}
        //   </div>
        // }
        bordered={true}
        style={{ width: '100%' }}
      >
        <p className="text-body-secondary my-2">
          <span className="fs-4 text-dark">Why:</span> {donation.why}
        </p>
        <p className="text-body-secondary my-2">
          <span className="fs-4 text-dark">Duration:</span> {donation.how_long}
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
          <p className="btn btn-warning fs-3 fw-normal p-1 px-4 text-bg-danger mt-3">
            Wait for Admin review
          </p>
        )}
      </Card>
    </div>
  );
};

export default SingleDecision;
