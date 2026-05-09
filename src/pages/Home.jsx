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