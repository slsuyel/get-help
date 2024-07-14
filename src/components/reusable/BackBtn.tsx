import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <i
      className="fa-solid fa-arrow-left ms-3 text-success"
      aria-hidden="true"
      style={{ fontSize: '20px', color: '#7d7676', cursor: 'pointer' }}
      onClick={goBack}
    />
  );
};

export default BackBtn;
