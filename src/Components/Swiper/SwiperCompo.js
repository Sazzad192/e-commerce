import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

const SwiperCompo = ({children}) => {
    return (
        <div>
            <div style={{marginBottom:"20px"}} className="text-center">
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={22}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {children}
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperCompo;