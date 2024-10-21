import Menu from '../../components/menu/Menu';
import StartBtn from '../../components/startbtn/StartBtn';
import './settimer.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SetTimer() {

  const [time, setTime] = useState(0); // Tiden i minuter
  const navigate = useNavigate();

  // Funktion för att öka tiden
  const increaseTime = () => {
    setTime(prev => prev + 1);
  };

  // Funktion för att minska tiden
  const decreaseTime = () => {
    setTime(prev => (prev > 0 ? prev - 1 : 0)); // Ingen negativ tid
  };

  // Omvandla minuter till sekunder för easyTimer
  const seconds = time * 60;

  const handleStart = () => {
    navigate('/TimerPage', { state: { time: seconds } }); // Navigera till TimerPage med tiden
  };


  return (
    <>
    <Menu />
    <div className="settimer-wrapper">
      <section className='timer-container'>
        <aside className='decrease'  onClick={decreaseTime}></aside>
        <h3 className='set-time'>{time}</h3>
        <aside className='increase'onClick={increaseTime}></aside>
      </section>
      <p className='minutes'>minutes</p>
      <StartBtn onClick={handleStart} />
    </div>
    </>
  );
}

export default SetTimer;