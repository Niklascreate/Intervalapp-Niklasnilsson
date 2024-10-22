import Menu from '../../components/menu/Menu';
import AnalogTimer from '../../components/analogtimer/AnalogTimer';
import DigitalTimer from '../../components/digitaltimer/DigitalTimer';
import './timerpage.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AbortBtn from '../../components/abortbtn/AbortBtn';
import Timer from 'easytimer.js';

const timer = new Timer();

function TimerPage() {
  const [displayAnalog, setDisplayAnalog] = useState(true);
  const [timeLeft, setTimeLeft] = useState();
  const navigate = useNavigate();

  const location = useLocation();
  const { time } = location.state || { time: 0 };

  useEffect(() => {
    timer.start({ countdown: true, startValues: { seconds: time } });
  
    const updateTimer = () => {
      const remainingTime = timer.getTimeValues().seconds;
      console.log(remainingTime);
      setTimeLeft(remainingTime);

      if (remainingTime <= 0) {
        timer.stop();
        navigate('/AlarmPage');
      }
    };


  
    timer.addEventListener('secondsUpdated', updateTimer);
  
    
    return () => {
      timer.removeEventListener('secondsUpdated', updateTimer);
    };
  }, [time]);

  const handleAnalogTimer = () => {
    setDisplayAnalog(true);
  };

  const handleDigitalTimer = () => {
    setDisplayAnalog(false);
  };

  return (
    <>
      <Menu 
        handleAnalogTimer={handleAnalogTimer}
        handleDigitalTimer={handleDigitalTimer}
      />
      <div className='timerpage-wrapper'>
        {displayAnalog ? <AnalogTimer time={timeLeft} /> : <DigitalTimer time={timeLeft}  />}
        <AbortBtn />
      </div>
    </>
  );
}

export default TimerPage;
