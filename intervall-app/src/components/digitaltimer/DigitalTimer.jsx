import './digitaltimer.css';
import { useEffect, useState } from 'react';

function DigitalTimer({ time }) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    setTimeLeft(time);
  }, [time]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className='digitaltimer-wrapper'>
      <h2 className='digital-time'>{formattedTime}</h2>
    </div>
  );
}

export default DigitalTimer;
