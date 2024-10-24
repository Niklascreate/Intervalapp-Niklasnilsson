import './startbtn.css';
import { motion } from 'framer-motion';

function StartBtn({ handleStartClick }) {
  return (
    <motion.button className="start-btn"
    onClick={handleStartClick}
    whileHover={{
        scale: 1.1,
        boxShadow: '5px 5px 15px #000'
    }}
    >
      START TIMER
    </motion.button>
  );
}

export default StartBtn;