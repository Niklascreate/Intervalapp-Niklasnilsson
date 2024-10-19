import './homepage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function nextPage() {
    navigate('/SetTimer');
  }

  return (
    <div className='homepage-wrapper'>
      <img className='homepage-img' src="src\assets\homepageicon.svg" onClick={nextPage} alt="" />
    </div>
  )
}

export default HomePage