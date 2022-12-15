import React from 'react';
import Header from '../../../Components/Header/Header';
import {GoSettings} from 'react-icons/go'
import SwiperCompo from '../../../Components/Swiper/SwiperCompo';
import { SwiperSlide } from 'swiper/react';
import { NavLink, useLoaderData } from 'react-router-dom';
import OrderCard from '../../Shared/OrderCard/OrderCard';


const AllOrder = () => {
    const product = useLoaderData();

    let activeStyle = {
        background: "rgb(59, 59, 226)",
        color:"white",
        borderRadius: "10px",
        padding:"0 18px"
    }
    
    return (
        <div>
            <Header>
                <div class="d-flex bd-highlight pb-4 pt-2">
                    <div class="p-2 flex-fill bd-highlight text-end"><h4>All Order (20)</h4></div>
                    <div class="p-2 flex-fill bd-highlight text-end"><GoSettings className='fs-2 fw-bold'/></div>
                </div>

                <div className="input-group pb-3">
                    <input type="text" placeholder='Search by customer Name' className="form-control" aria-label="Text input with dropdown button"/>
                </div>
            </Header>

            <div>
                <SwiperCompo>
                    <SwiperSlide><NavLink className='text-decoration-none text-black' to={'/pending'} style={({ isActive }) =>isActive ? activeStyle : undefined }>All time<span>(22)</span></NavLink></SwiperSlide>

                    <SwiperSlide><NavLink className='text-decoration-none text-black' to={'/accept'} style={({ isActive }) =>isActive ? activeStyle : undefined }> Today<span>(13)</span></NavLink></SwiperSlide>
                    
                    <SwiperSlide><NavLink className='text-decoration-none text-black' > Yestarday <span>(13)</span></NavLink></SwiperSlide>
                </SwiperCompo>
            </div>
            {/* product */}
            <div>
                {
                    product.map(element => <OrderCard key={element.id} orderData={element}></OrderCard>)
                }
            </div>
        </div>
    );
};

export default AllOrder;