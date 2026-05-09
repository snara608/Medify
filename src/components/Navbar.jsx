import { Link } from "react-router-dom";
import "./styles2.css";
import LogoImg from "../assets/logo1.svg"

export default function Navbar() {
  return (
    <>
    <div >
      <Link to="/" className="top-home">Home</Link>
    </div>
   <div className="top-bar">
      <p className="Title-Text"> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
   </div>

  <nav className="navbar">
  {/* LEFT */}
  <div className="logo-section">
    <Link to="/">
      <img src={LogoImg} alt="Medify" className="medify-logo" />
    </Link>
  </div>


  <div className="Menubar">
    <Link to="/" className="nav-link">Find Doctors</Link>
    <Link to="/" className="nav-link">Hospitals</Link>
    <Link to="/" className="nav-link">Medicines</Link>
    <Link to="/" className="nav-link">Surgeries</Link>
    <Link to="/" className="nav-link">Software for Provider</Link>
    <Link to="/" className="nav-link">Facilities</Link>
  </div>


  <div className="right-section">
    <Link to="/my-bookings">
      <button className="booking-btn">My Bookings</button>
    </Link>
  </div>
</nav>
</>
   
  );
}