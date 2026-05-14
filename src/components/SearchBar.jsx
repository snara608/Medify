import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles2.css";

export default function SearchBar() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [showStates, setShowStates] = useState(false);
  const [showCities, setShowCities] = useState(false);

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
      <div
        id="state"
        className="State-btn"
        data-testid="state"
      >
        <input
          type="text"
          placeholder="State 🔍"
          value={selectedState}
          readOnly
          className="search-input"
          onClick={() => setShowStates(!showStates)}
        />

        {showStates && (
          <ul className="dropdown-list">
            {states.map((s, i) => (
              <li
                key={i}
                onClick={() => {
                  setSelectedState(s);
                  setShowStates(false);
                }}
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CITY */}
      <div
        id="city"
        className="City-btn"
        data-testid="city"
      >
        <input
          type="text"
          placeholder="City 🔍"
          value={selectedCity}
          readOnly
          className="search-input"
          onClick={() => setShowCities(!showCities)}
        />

        {showCities && (
          <ul className="dropdown-list">
            {cities.map((c, i) => (
              <li
                key={i}
                onClick={() => {
                  setSelectedCity(c);
                  setShowCities(false);
                }}
              >
                {c}
              </li>
            ))}
          </ul>
        )}
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