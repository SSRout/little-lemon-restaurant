import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🍋 Little Lemon</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Book Table</Link></li>
      </ul>
      <Link to="/booking" className="cta-btn">Reserve Now</Link>
    </nav>
  );
}