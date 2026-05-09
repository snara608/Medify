import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "./styles2.css";
import DoctorOne from "../assets/div.med-doctor-style-three.svg";
import DoctorTwo from "../assets/div.med-doctor-style-three (1).svg";
import DoctorThree from "../assets/div.med-doctor-style-three (2).svg";

export default function SpecialistPage() {
    const images = [DoctorOne, DoctorTwo, DoctorThree, DoctorOne, DoctorTwo, DoctorThree];
    return(
        <div className="Specialist-wrapper">
             <h2 className="special-txt">Our Medical Specialists</h2>
             <div className="team-slide">
             <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper2"
            >
                {images.map((img, i) => (
                <SwiperSlide key={i}>
                    <img src={img} alt={`slide-${i}`} className="slide-img2" />
            </SwiperSlide>
            ))}
        </Swiper>
             </div>
             

      
        </div>
    )
}