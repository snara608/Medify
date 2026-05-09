import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles2.css";

export default function SearchBar() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then(setStates);
  }, []);

  useEffect(() => {
    if (!selectedState) return;

    fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then((res) => res.json())
      .then(setCities);
  }, [selectedState]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!selectedState || !selectedCity) {
      alert("Please select state and city");
      return;
    }

    navigate(`/search?state=${selectedState}&city=${selectedCity}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="Search-panel"
    >
      {/* STATE */}
      <div className="State-btn">
        <span className="mr-2"></span>
        <select
          id="state"
          className="bg-transparent outline-none w-full"
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">State 🔍</option>
          {states.map((s, i) => (
            <option key={i}>{s}</option>
          ))}
        </select>
      </div>
  
      {/* CITY */}
      <div className="City-btn">
        <span className="mr-2"></span>
        <select
          id="city"
          className="bg-transparent outline-none w-full"
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">City 🔍</option>
          {cities.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>
      </div>
  
      {/* BUTTON */}
      <button
        id="searchBtn"
        className="search-Btn"
      >
        🔍 Search
      </button>
    </form>
    
  );
}