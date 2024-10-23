import './setnewtimer.css'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function SetNewTimer() {
  const navigate = useNavigate();

  const newTimer = () => {
    navigate('/SetTimer')
  };

    return (
        <motion.button
        onClick={newTimer}
        className="newtimer-btn"
        whileHover={{
          scale: 1.1,
          boxShadow: '5px 5px 15px #000'
      }}
        >
          SET NEW TIMER
        </motion.button>
      );
}

export default SetNewTimer
