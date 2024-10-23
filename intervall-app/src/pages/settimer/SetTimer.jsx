import StartBtn from '../../components/startbtn/StartBtn';
import './settimer.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function SetTimer() {
  const [time, setTime] = useState(0);
  const navigate = useNavigate();

  const increaseTime = () => {
    setTime(prev => prev + 1);
  };

  const decreaseTime = () => {
    setTime(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleStart = () => {
    const seconds = time * 60;
    console.log('Skickar tid(kontroll)', seconds);
    navigate('/TimerPage', { state: { time: seconds } });
  };

  return (
    <div className="settimer-wrapper">
      <section className='timer-container'>
        <aside className='decrease' onClick={decreaseTime}></aside>
        <motion.h3
          className='set-time'
          key={time}
          animate={{ 
            x: [0, 3, -3, 0],
            y: [0, 3, -3, 0]
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          {time}
        </motion.h3>
        <aside className='increase' onClick={increaseTime}></aside>
      </section>
      <p className='minutes'>minutes</p>
      <StartBtn handleStartClick={handleStart} />
    </div>
  );
}

export default SetTimer;
