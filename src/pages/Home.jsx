import { useEffect, useState } from "react";
import HospitalCard from "../components/HospitalCard";

export default function Home() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitals, setHospitals] = useState([]);

  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  // Fetch states
  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then(res => res.json())
      .then(data => setStates(data));
  }, []);

  // Fetch cities when state selected
  useEffect(() => {
    if (!selectedState) return;

    fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then(res => res.json())
      .then(data => setCities(data));
  }, [selectedState]);

  const handleSearch = () => {
    fetch(
      `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
    )
      .then(res => res.json())
      .then(data => setHospitals(data));
  };

  return (
    <div>

      {/* ✅ STATE DROPDOWN */}
      <div
        id="state"
        onClick={() => setShowStateDropdown(!showStateDropdown)}
        style={{ border: "1px solid black", padding: "10px", cursor: "pointer" }}
      >
        {selectedState || "Select State"}

        {showStateDropdown && (
          <ul>
            {states.map((state) => (
              <li
                key={state}
                onClick={(e) => {
                  e.stopPropagation(); // 🔥 IMPORTANT
                  setSelectedState(state);
                  setShowStateDropdown(false);
                }}
              >
                {state}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ✅ CITY DROPDOWN */}
      <div
        id="city"
        onClick={() => setShowCityDropdown(!showCityDropdown)}
        style={{ border: "1px solid black", padding: "10px", cursor: "pointer" }}
      >
        {selectedCity || "Select City"}

        {showCityDropdown && (
          <ul>
            {cities.map((city) => (
              <li
                key={city}
                onClick={(e) => {
                  e.stopPropagation(); // 🔥 IMPORTANT
                  setSelectedCity(city);
                  setShowCityDropdown(false);
                }}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ✅ SEARCH BUTTON */}
      <button id="searchBtn" type="submit" onClick={handleSearch}>
        Search
      </button>

      {/* ✅ RESULTS */}
      {hospitals.length > 0 && (
        <h1>
          {hospitals.length} medical centers available in{" "}
          {selectedCity.toLowerCase()}
        </h1>
      )}

      {hospitals.map((h, i) => (
        <HospitalCard key={i} hospital={h} />
      ))}
    </div>
  );
}