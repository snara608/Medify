import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  // 🔹 Fetch states
  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then((data) => setStates(data));
  }, []);

  // 🔹 Fetch cities when state changes
  useEffect(() => {
    if (!selectedState) return;

    fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, [selectedState]);

  // 🔹 Handle search
  const handleSearch = (e) => {
    e.preventDefault();

    if (!selectedState || !selectedCity) {
      alert("Please select state and city");
      return;
    }

    navigate(`/search?state=${selectedState}&city=${selectedCity}`);
  };

  return (
    <form onSubmit={handleSearch}>
      {/* REQUIRED IDs */}
      <div id="state">
        <select onChange={(e) => setSelectedState(e.target.value)}>
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div id="city">
        <select onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* REQUIRED BUTTON */}
      <button type="submit" id="searchBtn">
        Search
      </button>
    </form>
  );
}