import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HospitalCard from "../components/HospitalCard";

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
    <div>
      {/* REQUIRED HEADING */}
      <h1>
        {hospitals.length} medical centers available in {city}
      </h1>

      {loading && <p>Loading data…</p>}

      {hospitals.map((hospital, index) => (
        <HospitalCard key={index} hospital={hospital} />
      ))}
    </div>
  );
}