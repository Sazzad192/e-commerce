import React from 'react';
import Header from '../../Components/Header/Header';
import ActiveOrdes from './Orders/ActiveOrder/ActiveOrdes';
import Overview from './Overview/Overview';
import {AiTwotoneStop} from 'react-icons/ai';
import {MdVerified} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {FaWhatsapp} from 'react-icons/fa';


const HomeHeader = () => {
    return (
        <div>
            <Header>
                <div className="d-flex justify-content-between pt-3 pb-5">
                    <h4>Mono Super Market <MdVerified></MdVerified></h4>
                    <div className='bg-white text-primary p-1 rounded-pill fw-bold'>
                        Online <AiTwotoneStop />
                    </div>
                </div>
            </Header>
            <div className="card mx-3" style={{width:"90%",marginTop:"-55px"}}>
                <div className="card-body">
                    <h5 className="card-title">Share More To Boom more</h5>
                    <p className="card-text">Some quick example text to build on the card title and make.</p>
                    <div className='d-flex justify-content-between'>
                        <p className='text-warning fw-bold'>Offer For Share More</p>
                        <Link className='text-decoration-none btn btn-success'> <FaWhatsapp/> WhatsApp</Link>
                    </div>
                </div>
            </div>
            <div className='mx-2 mt-4'>
                <Overview></Overview>
                <ActiveOrdes className='mx-3'></ActiveOrdes>
            </div>
        </div>
    );
};

export default HomeHeader;