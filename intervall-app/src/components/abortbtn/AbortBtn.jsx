import './abortbtn.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function AbortBtn() {
  const navigate = useNavigate();

  function GoToSetTimerpage() {
    navigate('/SetTimer');
  }

  return (
    <div className='abortbtn-wrapper'>
      <motion.button
        onClick={GoToSetTimerpage} 
        className='abort-btn'
        whileHover={{
        scale: 1.1,
        boxShadow: '5px 5px 15px #000'
      }}
      >ABORT TIMER</motion.button>
    </div>
  );
}

export default AbortBtn;