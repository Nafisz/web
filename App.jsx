/* src/App.js */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Location from './pages/Location';
import News from './pages/News';
import GalaxyCanvas from './components/GalaxyCanvas';
import TeamSection from './components/TeamSection';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-b from-black to-blue-900 text-cyan-400 font-orbitron">
        <GalaxyCanvas />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/location" element={<Location />} />
          <Route path="/news" element={<News />} />
          <Route path="/galery" element={<div className="text-center text-white pt-20">Galery Page (TBD)</div>} />
          <Route path="/services" element={<div className="text-center text-white pt-20">Services Page (TBD)</div>} />
        </Routes>
        <TeamSection /> {/* Tambahkan TeamSection di sini */}
      </div>
    </Router>
  );
}

export default App;