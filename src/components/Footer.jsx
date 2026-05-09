import MedifyLogo from "../assets/Group 7.svg";
import FacebookLogo from "../assets/a.elementor-icon.svg";
import PintrestLogo from "../assets/a.elementor-icon (3).svg";
import YoutubeLogo from "../assets/a.elementor-icon (2).svg";
import TwitterLogo from "../assets/a.elementor-icon (1).svg";
import { Link } from "react-router-dom";
import "./styles2.css";

export default function Footer() {
    return(
        <footer className="footer">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <img src={MedifyLogo} alt="Medify" className="footer-logo" />
  
          <div className="social-icons">
            <a href="/"><img src={FacebookLogo} alt="facebook" /></a>
            <a href="/"><img src={TwitterLogo} alt="twitter" /></a>
            <a href="/"><img src={YoutubeLogo} alt="youtube" /></a>
            <a href="/"><img src={PintrestLogo} alt="pinterest" /></a>
          </div>
          <p className="footer-copy">
                Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </p>
        </div>
  
        {/* RIGHT SIDE LINKS */}
        <div className="footer-links">
  
          <div className="link-column">
            <Link to="/about">About Us</Link>
            <Link to="/doctors">Find Doctors</Link>
            <Link to="/hospitals">Find Hospitals</Link>
            <Link to="/medicines">Buy Medicines</Link>
            <Link to="/ambulance">Ambulance</Link>
          </div>
  
          <div className="link-column">
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
  
          <div className="link-column">
            <Link to="/labs">Labs</Link>
            <Link to="/surgeries">Surgeries</Link>
            <Link to="/providers">For Providers</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
  
        </div>
      </footer>
    )
}