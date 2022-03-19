import React from "react";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

// import "./index.css";
// import constants from "../../Constants";

const HeroSection = () => {
  return (
    <div>
      <div className="carousel">
        {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={"/assets/images/Pandit_ji_01.jpeg"} alt="Pandit Ji" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/assets/images/Baglamukhi_01.jpg"} alt="Baglamukhi" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/assets/images/Tulsi_01.jpeg"} alt="Tulsi Pooja" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/assets/images/Event_01.png"} alt="Event" />
          </SwiperSlide>
        </Swiper> */}
        {/* <div className="hero-title">
          <h1 className="main-title">{constants.heroTitle}</h1>
          <p className="description">{constants.heroDescription}</p>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
