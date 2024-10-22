import './analogtimer.css';
import { useEffect, useState } from 'react';

function AnalogTimer({ time }) {
  const [minuteDegrees, setMinuteDegrees] = useState(0);
  const [secondDegrees, setSecondDegrees] = useState(0);

  useEffect(() => {
    const updateDegrees = () => {
      const totalMinutes = Math.floor(time / 60);
      const seconds = time % 60;

      setMinuteDegrees((totalMinutes % 60) * 6);
      // Ändra till - (seconds * 6) för att snurra medurs
      setSecondDegrees(-(seconds * 6)); // Motsatt riktning
    };

    updateDegrees();

    const intervalId = setInterval(() => {
      if (time > 0) {
        updateDegrees();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div className="analogtimer-wrapper">
      <img className='timer-circle' src="src\assets\minutes.svg" alt="" />
      <article
        className="min-spinner"
        style={{ transform: `translateX(-50%) translateY(-100%) rotate(${minuteDegrees}deg)` }}
      ></article>
      <article
        className="sek-spinner"
        style={{ transform: `translateX(-50%) translateY(-100%) rotate(${secondDegrees}deg)` }}
      ></article>
    
    </div>
  );
}

export default AnalogTimer;
