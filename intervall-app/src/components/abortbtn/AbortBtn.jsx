import './abortbtn.css';
import { useNavigate } from 'react-router-dom';

function AbortBtn() {
  const navigate = useNavigate();

  function GoToSetTimerpage() {
    navigate('/SetTimer');
  }

  return (
    <div>
      <button onClick={GoToSetTimerpage} className='abort-btn'>ABORT TIMER</button>
    </div>
  );
}

export default AbortBtn;