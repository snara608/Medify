import heroImg from "../assets/hero.svg";
import "./styles2.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero-image-wrapper">
  <img
    src={heroImg}
    alt="Doctors"
    className="hero-img"
  />

  <Link to="/Centers">
    <button className="Hero-btn">Find Centers</button>
  </Link>
</div>
  );
}