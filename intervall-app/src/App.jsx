import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import SetTimer from './pages/settimer/SetTimer';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SetTimer" element={<SetTimer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
