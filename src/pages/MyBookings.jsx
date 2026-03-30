import { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  return (
    <div>
      {/* REQUIRED HEADING */}
      <h1>My Bookings</h1>

      {bookings.map((b, index) => (
        <div key={index}>
          <h3>{b.hospitalName}</h3>
          <p>{b.city}, {b.state}</p>
          <p>Date: {b.date}</p>
          <p>Time: {b.time}</p>
        </div>
      ))}
    </div>
  );
}