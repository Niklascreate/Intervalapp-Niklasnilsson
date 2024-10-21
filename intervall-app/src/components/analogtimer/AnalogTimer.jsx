import './analogtimer.css';

function AnalogTimer({ time }) {
  console.log("Analog Timer time:", time);
  const totalMinutes = Math.floor(time / 60);
  const seconds = time % 60;
  const minuteDegrees = (totalMinutes % 60) * 6;
  const secondDegrees = seconds * 6;

  return (
    <div className="analogtimer-wrapper">
      <article className="min-spinner" style={{ transform: `translateX(-50%) translateY(-100%) rotate(${minuteDegrees}deg)` }}></article>
      <article className="sek-spinner" style={{ transform: `translateX(-50%) translateY(-100%) rotate(${secondDegrees}deg)` }}></article>
    </div>
  );
}


export default AnalogTimer;