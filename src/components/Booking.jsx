import { useState } from "react";
import "./styles2.css";

export default function Booking({ hospital }) {
  const [date, setDate] = useState("Today");
  const [time, setTime] = useState("");

  const slots = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"],
    Evening: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
  };

  const handleBooking = () => {
    const newBooking = {
      hospital: hospital["Hospital Name"],
      date,
      time,
    };

    const existing =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existing, newBooking])
    );

    alert("Booking Confirmed");
  };

  return (
    <div className="booking-wrapper">

      {/* DATE ROW */}
      <div className="booking-days">
      <div
      className={`day-card ${date === "Today" ? "active-day" : ""}`}
      onClick={() => setDate("Today")}
>
          <h4>Today</h4>
          <p>11 Slots Available</p>
        </div>

        <div
      className={`day-card ${date === "Tomorrow" ? "active-day" : ""}`}
      onClick={() => setDate("Tomorrow")}
>
          <h4>Tomorrow</h4>
          <p>17 Slots Available</p>
        </div>

        <div
  className={`day-card ${date === "Fri" ? "active-day" : ""}`}
  onClick={() => setDate("Fri")}
>
          <h4>Fri</h4>
          <p>18 Slots Available</p>
        </div>
      </div>

      {/* TIME SLOTS */}
      {Object.keys(slots).map((period) => (
        <div className="slot-section" key={period}>
          <h3 className="slot-title">{period}</h3>

          <div className="slot-buttons">
            {slots[period].map((t) => (
              <button
                key={t}
                className={`slot-btn ${time === t ? "selected-slot" : ""}`}
                onClick={() => setTime(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* CONFIRM */}
      <button
        className="confirm-booking-btn"
        onClick={handleBooking}
      >
        Confirm Booking
      </button>
    </div>
  );
}