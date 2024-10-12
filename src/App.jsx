// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ClassicCiphers from './pages/ClassicCiphers';
import Cryptanalysis from './pages/Cryptanalysis';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classic-ciphers" element={<ClassicCiphers />} />
          <Route path="/cryptanalysis" element={<Cryptanalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
