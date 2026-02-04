import { Link } from "react-router-dom";
import "./assets/Spd.css";

function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">DriveEasy</h2>
      <ul>
        {/* ✅ FIX IS HERE */}
        <li><Link to="/home">Home</Link></li>

        <li><Link to="/fleet">Fleet</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/booking">Booking</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
