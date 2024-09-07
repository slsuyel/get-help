import { useState, useEffect } from 'react';
import { callApi } from '@/utilities/functions';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import { TSingleDecision } from '@/types';
import BackBtn from '@/components/reusable/BackBtn';

const SingleDecision = () => {
  const { id } = useParams();
  const [donation, setDonation] = useState<TSingleDecision>();

  useEffect(() => {
    const fetchDecision = async () => {
      try {
        const res = await callApi('get', `/api/decisions/${id}`);

        setDonation(res.data);
      } catch (error) {
        console.error('Error fetching decision:', error);
      }
    };

    fetchDecision();
  }, [id]);

  if (!donation) {
    return <p>Loading...</p>;
  }

  const user = donation.user;

  return (
    <div className="row mx-auto">
      <div className=" my-3">
        <BackBtn />
      </div>

      <div className="col-md-6">
        <Card
          bordered={true}
          className=" rounded-lg"
          style={{ width: '100%' }}
          title={
            <h3 className="text-xl font-semibold text-red-600">
              Application Details
            </h3>
          }
        >
          <p className="text-gray-700 my-2">
            <span className="text-lg font-semibold text-black">Why:</span>{' '}
            {donation?.why || 'N/A'}
          </p>
          <p className="text-gray-700 my-2">
            <span className="text-lg font-semibold text-black">Duration:</span>{' '}
            {donation?.how_long.start_date}
            {donation?.how_long.end_date}
          </p>
          <p className="text-gray-700 my-2">
            <span className="text-lg font-semibold text-black">
              Amount Needed:
            </span>{' '}
            {donation.currency} {donation?.how_much || 'N/A'}
          </p>
          <p className="text-gray-700 my-2">
            <span className="text-lg font-semibold text-black">
              Applied Date:
            </span>{' '}
            20/08/2024
          </p>
          <p className="text-gray-700 my-2">
            <span className="text-lg font-semibold text-black">Note:</span>{' '}
            {donation?.note || 'N/A'}
          </p>
          <hr className="my-4" />

          {donation?.status === 'approved' && (
            <>
              <p className="text-gray-700 my-2">
                <span className="text-lg font-semibold text-green-600">
                  Approved Amount:
                </span>{' '}
                ${donation?.approved_amount || 'N/A'}
              </p>
              <p className="text-gray-700 my-2">
                <span className="text-lg font-semibold text-green-600">
                  Author Feedback:
                </span>{' '}
                {donation?.feedback || 'N/A'}
              </p>
            </>
          )}

          {donation?.status === 'rejected' && (
            <p className="text-gray-700 my-2">
              <span className="text-lg font-semibold text-red-600">
                Rejected:
              </span>{' '}
              {donation?.feedback || 'N/A'}
            </p>
          )}

          {donation?.status === 'pending' && (
            <p className="btn btn-warning text-lg font-medium p-2 px-4 bg-red-500 text-white mt-3 rounded-lg">
              Wait for Admin Review
            </p>
          )}
        </Card>
      </div>

      <div className="col-md-6">
        <Card
          title={
            <h3 className="text-xl font-semibold text-red-600">
              User Information
            </h3>
          }
          bordered={true}
          className=" rounded-lg"
        >
          <div className="table-responsive">
            <table className="table-auto w-full text-left text-gray-700">
              <tbody>
                <tr className="border-b">
                  <th className="py-2 pr-4">Name:</th>
                  <td className="py-2">{user?.name || 'N/A'}</td>
                </tr>
                <tr className="border-b">
                  <th className="py-2 pr-4">Category:</th>
                  <td className="py-2">{user?.category || 'N/A'}</td>
                </tr>
                <tr className="border-b">
                  <th className="py-2 pr-4">Phone:</th>
                  <td className="py-2">{user?.phone || 'N/A'}</td>
                </tr>
                <tr className="border-b">
                  <th className="py-2 pr-4">Permanent Address:</th>
                  <td className="py-2">{user?.permanent_address || 'N/A'}</td>
                </tr>
                <tr className="border-b">
                  <th className="py-2 pr-4">Highest Education:</th>
                  <td className="py-2">{user?.highest_education || 'N/A'}</td>
                </tr>
                <tr>
                  <th className="py-2 pr-4">Total Applications:</th>
                  <td className="py-2">{user?.decisions?.length || 0}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingleDecision;
