import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import SetTimer from './pages/settimer/SetTimer';
import TimerPage from './pages/timerpage/TimerPage';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SetTimer" element={<SetTimer />} />
          <Route path="/TimerPage" element={<TimerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
