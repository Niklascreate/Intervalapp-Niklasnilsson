import './digitaltimer.css'

function DigitalTimer({ time }) {
  // Konvertera tiden till timmar och minuter
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;

  return (
    <div className='digitaltimer-wrapper'>
      <h2 className='digital-time'>{formattedTime}</h2>
    </div>
  )
}

export default DigitalTimer;