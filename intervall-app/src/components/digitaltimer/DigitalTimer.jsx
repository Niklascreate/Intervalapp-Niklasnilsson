import './digitaltimer.css';
import { useEffect, useState } from 'react';

function DigitalTimer({ initialTime }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // Starta nedräkning
    setTimeLeft(initialTime); // Återställ tiden när initialTime ändras
    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1; // Räkna ner
        } else {
          clearInterval(intervalId); // Stoppa timern när tiden är slut
          return 0; // Se till att tiden inte går under noll
        }
      });
    }, 1000);

    return () => clearInterval(intervalId); // Rensa intervallet vid avmontering
  }, [initialTime]);

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
