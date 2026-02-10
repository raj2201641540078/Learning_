import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RoseDay from './pages/RoseDay';
import Login from './pages/Login';
import ProposeDay from './pages/ProposeDay';
import ChocolateDay from './pages/ChocolateDay';
import TeddyDay from './pages/TeddyDay';
import PromiseDay from './pages/PromiseDay';
import HugDay from './pages/HugDay';
import KissDay from './pages/KissDay';
import ValentineDay from './pages/ValentineDay';
import Memories from './pages/Memories';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rose-day" element={<RoseDay />} />
        <Route path="/propose-day" element={<ProposeDay />} />
        <Route path="/chocolate-day" element={<ChocolateDay />} />
        <Route path="/teddy-day" element={<TeddyDay />} />
        <Route path="/promise-day" element={<PromiseDay />} />
        <Route path="/hug-day" element={<HugDay />} />
        <Route path="/kiss-day" element={<KissDay />} />
        <Route path="/valentine-day" element={<ValentineDay />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
