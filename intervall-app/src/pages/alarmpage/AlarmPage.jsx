import SetNewTimer from '../../components/setnewtimer/SetNewTimer'
import './alarmpage.css'
import { motion } from 'framer-motion'

function AlarmPage() {
  return (
    <div className='alarmpage-wrapper'>
      <img className='alarm-bgr' src="src\assets\alarm.svg" alt="" />
      <img className='alarm-icon' src="src\assets\alarm icon.svg" alt="" />
      <h2>Times up!</h2>
      <SetNewTimer />
    </div>
  )
}

export default AlarmPage
