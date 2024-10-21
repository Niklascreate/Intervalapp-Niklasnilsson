import './analogtimer.css';

function AnalogTimer({ time }) {
  const totalMinutes = Math.floor(time / 60);
  const seconds = time % 60;
  const minuteDegrees = (totalMinutes % 60) * 6; // Endast minuter över den senaste timmen
  const secondDegrees = seconds * 6; // Varje sekund roterar 6 grader

  return (
    <div className="analogtimer-wrapper">
      <article className="min-spinner" style={{ transform: `rotate(${minuteDegrees}deg)` }}></article>
      <article className="sek-spinner" style={{ transform: `rotate(${secondDegrees}deg)` }}></article>
    </div>
  );
}

export default AnalogTimer;