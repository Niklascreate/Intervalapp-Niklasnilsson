import './startbtn.css';

function StartBtn({ handleStartClick }) {
  return (
    <button className="start-btn" onClick={handleStartClick}>
      Starta Timer
    </button>
  );
}

export default StartBtn;