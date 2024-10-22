import './analogtimer.css';
import { useEffect, useState } from 'react';

function AnalogTimer({ time }) {
  const [minuteDegrees, setMinuteDegrees] = useState(0);
  const [secondDegrees, setSecondDegrees] = useState(0);

  useEffect(() => {
    const updateAngles = () => {
      const totalMinutes = Math.floor(time / 60);
      const seconds = time % 60;

      // Beräkna vinklar baserat på den nuvarande tiden
      setMinuteDegrees((totalMinutes % 60) * 6);
      setSecondDegrees(-(seconds * 6));
    };

    updateAngles(); // Uppdatera initiala vinklar
    const intervalId = setInterval(updateAngles, 1000); // Uppdatera vinklar varje sekund

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div className="analogtimer-wrapper">
      <img className='timer-circle' src="src/assets/minutes.svg" alt="" />
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
