import React from 'react';
import {IoIosArrowForward} from 'react-icons/io';
import {GoPrimitiveDot} from 'react-icons/go'
import { Link } from 'react-router-dom';

const OrderCard = ({orderData}) => {
    

    const {order_id,status,price, picture} = orderData;
    return (
        <div className='mx-3'>
            <div className="container ">
                <div className='row p-2'>
                    <div className='d-flex justify-content-between mb-3'>
                        <div>Order #{order_id} <span className='ml-2 bg-success text-white px-2'>New</span></div>
                        <div>Today 11:00 pm</div>
                    </div>

                    <div className="col">
                        <img className='product-picture rounded' src={picture} alt="picture" />
                    </div>
                    <div className="col-6">
                        <div className='d-flex flex-column justify-content-start align-item-center text-start'>
                            <div className='fs-6 text-secondary'>{order_id}</div>
                            <div className='fw-bold text-primary'> ${price}</div>
                        </div>
                        
                    </div>
                    <div className="col-2 text-center top-50 end-0 px-2">
                        <p className='text-danger fw-bolder' style={{background:"rgb(217, 149, 149)"}}>PAD</p>      
                    </div>

                    <hr className='mt-3 mb-1' />
                    <div className='d-flex justify-content-between align-items-center fw-bolder'>
                        <div> <GoPrimitiveDot className={status === "Pending" ? 'text-warning' : 'text-success'}/> {status}</div>
                        <div><Link to={`/order`} className='btn btn-outline-secondary'>Details<IoIosArrowForward/> </Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;