import './setnewtimer.css'
import { useNavigate } from 'react-router-dom';

function SetNewTimer() {
  const navigate = useNavigate();

  const newTimer = () => {
    navigate('/SetTimer')
  };

    return (
        <button onClick={newTimer} className="newtimer-btn">
          SET NEW TIMER
        </button>
      );
}

export default SetNewTimer
