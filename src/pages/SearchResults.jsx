import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HospitalCard from "../components/HospitalCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Faq from "../components/Faq";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
import Logo from "../assets/Group 1000011079.svg";
import "./styles.css";


export default function SearchResults() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const state = query.get("state");
  const city = query.get("city");

  useEffect(() => {
    if (!state || !city) return;

    setLoading(true);

    fetch(
      `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHospitals(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to fetch medical centers");
        setLoading(false);
      });
  }, [state, city]);

  return (
    <div className="search-results-wrapper">
      <Navbar/>
      <SearchBar/>
      {/* REQUIRED HEADING */}
      <div className="results-section">
  <h1 className="results-heading">
    {hospitals.length} medical centers available in {city.toLocaleLowerCase()}
  </h1>

  {loading && <p className="loading">Loading data…</p>}
  
  <div className="results-container">
  {hospitals.map((hospital, index) => (
    
    <div className="hospital-row" key={index}>

      {/* LEFT = HOSPITAL CARD */}
      <HospitalCard hospital={hospital} />

      {/* RIGHT = LOGO ONLY ON FIRST ITEM */}
      {index === 0 && (
        <img
          src={Logo}
          alt="Logo"
          className="logoOne"
        />
      )}

    </div>

  ))}
</div>
</div>
      <Faq/>
      <Contactus/>
      <Footer/>
    </div>
  );
}