import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Faq from "../components/Faq";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";

import HospitalLogo1 from "../assets/div.u-pos-has.svg";
import Logo from "../assets/Group 1000011079.svg";

import "./styles.css";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(data);
  }, []);

  return (
    <div className="mybooking-page">

      <Navbar />

      <SearchBar />

      <div className="booking-page-wrapper">

        {/* LEFT SIDE */}
        <div className="booking-left">

          <h1 className="booking-main-title">
            My Bookings
          </h1>

          {bookings.map((b, i) => (
            <div className="booking-card" key={i}>

              {/* LEFT */}
              <div className="booking-card-left">

                <img
                  src={HospitalLogo1}
                  alt="Hospital"
                  className="booking-hospital-logo"
                />

                <div className="booking-info">

                <h3>
                  {String(b.hospital || b.hospitalName).toLowerCase()}
                </h3>

                    <p>{b.date}</p>
                    <p>{b.time}</p>

                </div>
              </div>

              {/* RIGHT */}
              <div className="booking-status">

                <button className="booked-btn">
                  Booked
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE LOGO */}
        <div className="booking-right">

          <img
            src={Logo}
            alt="Logo"
            className="booking-banner"
          />

        </div>

      </div>

      <Faq />

      <Contactus />

      <Footer />

    </div>
  );
}