import { useState } from "react";
import Booking from "./Booking";

export default function HospitalCard({ hospital }) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div>
      {/* REQUIRED TAG */}
      <h3>{hospital["Hospital Name"]}</h3>

      <p>{hospital.Address}</p>
      <p>{hospital.City}</p>
      <p>{hospital.State}</p>
      <p>{hospital["ZIP Code"]}</p>
      <p>Rating: {hospital["Hospital overall rating"]}</p>

      <button onClick={() => setShowBooking(!showBooking)}>
        Book FREE Center Visit
      </button>

      {showBooking && <Booking hospital={hospital} />}
    </div>
  );
}