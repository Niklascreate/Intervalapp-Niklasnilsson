import SetNewTimer from '../../components/setnewtimer/SetNewTimer'
import './alarmpage.css'
import { motion } from 'framer-motion'

function AlarmPage() {
  return (
    <div className='alarmpage-wrapper'>
      <img className='alarm-bgr' src="src\assets\alarm.svg" alt="" />
      <motion.img 
        className='alarm-icon'
        src="src\assets\alarm icon.svg"
        alt=""
        animate={{
          x: [0, 10, -10, 10, 0],
          rotate: [0, 10, -10, 10, 0],
          scale: [1, 1.1, 1, 1.1, 1],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          loop: Infinity,
        }}
      />
      <h2>Times up!</h2>
      <SetNewTimer />
    </div>
  )
}

export default AlarmPage