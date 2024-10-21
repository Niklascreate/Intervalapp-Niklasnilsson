import AnalogTimer from '../../components/analogtimer/AnalogTimer';
import DigitalTimer from '../../components/digitaltimer/DigitalTimer';
import './timerpage.css';
import Timer from 'easytimer.js';
import Menu from '../../components/menu/Menu';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AbortBtn from '../../components/abortbtn/AbortBtn';

const timer = new Timer();

function TimerPage() {
  const [timeLeft, setTimeLeft] = useState();
  const [displayAnalog, setDisplayAnalog] = useState(true); // Visa analog timer som standard

  const location = useLocation();
  const { time } = location.state || { time: 0 }; 

  useEffect(() => {
    timer.start({ countdown: true, startValue: { seconds: time } });
    timer.addEventListener('secondsUpdated', function (e) {
       setTimeLeft(timer.getTimeValues().toString()); //setTimeLeft(timer.getTimeValues().seconds);
    });
    return () => {
      timer.stop();
    }
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
        {displayAnalog ? <AnalogTimer time={time} /> : <DigitalTimer time={timeLeft} />}
        <AbortBtn />
      </div>
    </>
  );
}

export default TimerPage;
