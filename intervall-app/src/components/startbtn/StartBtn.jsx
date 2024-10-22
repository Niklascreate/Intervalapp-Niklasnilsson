import './startbtn.css';

function StartBtn({ handleStartClick }) {
  return (
    <button className="start-btn" onClick={handleStartClick}>
      START TIMER
    </button>
  );
}

export default StartBtn;