import './startbtn.css';
import { useNavigate } from 'react-router-dom';

function StartBtn() {
  const navigate = useNavigate();

  function goToAnalogpage() {
    navigate('/AnalogPage');
  }

  return (
    <div>
      <button onClick={goToAnalogpage} className='start-btn'>START TIMER</button>
    </div>
  );
}

export default StartBtn;
