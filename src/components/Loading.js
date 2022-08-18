import { useNavigate } from 'react-router';
import '../content/styles/loading.css';

const Loading = ({ text, back }) => {
  back = isNaN(back) ? Number.back : back;
  const navigate = useNavigate();
  const goBack = () => navigate(back ? back : '/');
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="loading_container"
        title="Click to go back"
        role="button"
        tabIndex="0"
        onClick={goBack}
      >
        <div className="loading"></div>
        <h4 style={{ fontSize: '0.8rem' }}>{text}</h4>
      </div>
    </>
  );
};

export default Loading;
