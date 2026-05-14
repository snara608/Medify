import { useState } from "react";
import Booking from "./Booking";
import HospitalLogo from "../assets/div.u-pos-has.svg";
import "./styles2.css";

export default function HospitalCard({ hospital }) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="hospital-card">

      {/* 🔵 LEFT SIDE */}
      <div className="hospital-left">

        <img
          src={HospitalLogo}
          alt="HospiLogo"
          className="Hospi-logo"
        />

        <div className="hospital-info">
          <h3>{hospital["Hospital Name"]}</h3>

          <p>{hospital.Address}</p>

          <p>
            {hospital.City}, {hospital.State}
          </p>

          <p className="rating">
            ⭐ {hospital["Hospital overall rating"]}
          </p>
        </div>

      </div>

      {/* 🟢 RIGHT SIDE */}
      <div className="hospital-right">

        <p className="available">
          Available Today
        </p>

        <button
          className="book-btn"
          onClick={() => setShowBooking(!showBooking)}
        >
          Book FREE Center Visit
        </button>

      </div>

      {showBooking && (
  <div className="booking-container">
    <Booking hospital={hospital} />
  </div>
)}
    </div>
  );
}