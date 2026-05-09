import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchingBox";
import ImageSlider from "../components/Carousel";
import Specialists from "../components/Specialization";
import SpecialistPage from "../components/MedicalTeam";
import Blog from "../components/Blogs";
import FamilySection from "../components/FamilySec";
import Faq from "../components/Faq";
import Contact from "../components/Contactus";
import Footer from "../components/Footer";

export default function Home() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then((data) => setStates(data));
  }, []);

  useEffect(() => {
    if (!selectedState) return;

    fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, [selectedState]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!selectedState || !selectedCity) {
      alert("Please select state and city");
      return;
    }

    navigate(`/search?state=${selectedState}&city=${selectedCity}`);
  };

  return (
    <div className="home">
      <Navbar/>

     
      {/* 🔵 HERO SECTION */}
      <section className="hero">
      <Hero/>
        
       
      </section>
      <SearchBox/>

      <ImageSlider/>
      <Specialists/>
      
        


      {/* 👨‍⚕️ DOCTORS */}
      <SpecialistPage/>
      <Blog/>
      <FamilySection/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}