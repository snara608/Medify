import { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>

      {bookings.map((b, i) => (
        <div key={i}>
          <h3>{b.hospital}</h3>
          <p>{b.date}</p>
          <p>{b.time}</p>
        </div>
      ))}
    </div>
  );
}