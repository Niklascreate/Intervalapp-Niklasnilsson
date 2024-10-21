import './startbtn.css';

function StartBtn({ onClick }) {
  return (
    <button className="start-btn" onClick={onClick}>
      Starta Timer
    </button>
  );
}

export default StartBtn;