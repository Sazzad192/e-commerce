import React from "react";

import { Link, NavLink } from 'react-router-dom';
import {IoIosArrowForward} from 'react-icons/io';
import {SwiperSlide} from 'swiper/react';
import SwiperCompo from "../../../../Components/Swiper/SwiperCompo";

const ActiveOrdes = () => {

    let activeStyle = {
        background: "rgb(59, 59, 226)",
        color:"white",
        borderRadius: "10px",
        padding:"0 18px"
    }

    let inactiveStyle = {
        color:"black"
    }

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h3>Active Orders</h3>
                <Link className='text-decoration-none text-black'>View All <IoIosArrowForward/></Link>
            </div>

            {/* imported from Swip components */}
            <SwiperCompo>
                <SwiperSlide><NavLink className='text-decoration-none' to={'/pending'} style={({ isActive }) =>isActive ? activeStyle : inactiveStyle }>Pending <span>(69)</span></NavLink></SwiperSlide>

                <SwiperSlide><NavLink className='text-decoration-none' to={'/accept'} style={({ isActive }) =>isActive ? activeStyle : inactiveStyle }> Accepted <span>(13)</span></NavLink></SwiperSlide>
                
                <SwiperSlide><NavLink className='text-decoration-none text-black' > Shipted <span>(13)</span></NavLink></SwiperSlide>
            </SwiperCompo>
        </div>
    );
};

export default ActiveOrdes;