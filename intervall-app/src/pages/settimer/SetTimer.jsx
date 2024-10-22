import Menu from '../../components/menu/Menu';
import StartBtn from '../../components/startbtn/StartBtn';
import './settimer.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    navigate('/TimerPage', { state: { time: seconds } });
  };

  return (
    <>
      <Menu />
      <div className="settimer-wrapper">
        <section className='timer-container'>
          <aside className='decrease' onClick={decreaseTime}></aside>
          <h3 className='set-time'>{time}</h3>
          <aside className='increase' onClick={increaseTime}></aside>
        </section>
        <p className='minutes'>minutes</p>
        <StartBtn handleStartClick={handleStart} />
      </div>
    </>
  );
}

export default SetTimer;
