import { useState } from "react";

export default function Booking({ hospital }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const slots = {
    Morning: ["10:00 AM", "11:00 AM"],
    Afternoon: ["1:00 PM", "2:00 PM"],
    Evening: ["5:00 PM", "6:00 PM"],
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
    <div>
      <p>Today</p>

      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      {Object.keys(slots).map((period) => (
        <div key={period}>
          <p>{period}</p>

          {slots[period].map((t) => (
            <button key={t} onClick={() => setTime(t)}>
              {t}
            </button>
          ))}
        </div>
      ))}

      <button onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
}