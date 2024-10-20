// import Menu from '../../components/menu/Menu';
import StartBtn from '../../components/startbtn/StartBtn';
import './settimer.css';


function SetTimer() {

  return (
    <div className="settimer-wrapper">
        <section className='timer-container'>
          <aside className='increase'></aside>
          <h3 className='set-time'>10</h3>
          <aside className='decrease'></aside>
        </section>
        <p className='minutes'>minutes</p>
        <StartBtn />
    </div>
  )
}

export default SetTimer