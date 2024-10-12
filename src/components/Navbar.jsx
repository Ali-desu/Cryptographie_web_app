import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/classic-ciphers">Classic Ciphers</Link></li>
        <li><Link to="/cryptanalysis">Cryptanalysis</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
