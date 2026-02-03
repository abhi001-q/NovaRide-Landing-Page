import "./Navbar.css";


function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">Nova-Ride</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
