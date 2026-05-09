import FirstImg from "../assets/Group 10.svg";
import SecondImg from "../assets/Group 11.svg";
import "./styles2.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

export default function ImageSlider() {
    const images = [FirstImg, SecondImg, FirstImg, SecondImg, FirstImg]
    return (
     <div className="Image-section">
         <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`slide-${i}`} className="slide-img" />
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
       
    )
} 

