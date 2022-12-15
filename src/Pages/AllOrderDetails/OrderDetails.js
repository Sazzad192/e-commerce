import React from 'react';
import {RxCross2} from 'react-icons/rx';
import {AiOutlineShareAlt} from 'react-icons/ai';
import {BsTelephone} from 'react-icons/bs';
import {FaWhatsappSquare} from 'react-icons/fa';

const OrderDetails = ({orderData}) => {
    const {order} = orderData;
    return (
        <div>
            {
                order.map(data => {
                return(
                    <div key={data.id}>
                        <div className='row'>
                            <div className="col">
                                <img className='product-picture rounded' src={data.picture} alt="" />
                            </div>
                            <div className="col-6">
                                <div className='d-flex flex-column justify-content-start text-start'>
                                    <div className='fs-6'>{data.name}</div>
                                    <div className='fw-bold'>${data.price}</div>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <button type="button" className="btn btn-sm fw-bold" style={{background:"#c0e2f2", border:"2px solid #9dc4d7"}}>{order.length}</button> <RxCross2/> ${data.price}
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-2 d-flex flex-column justify-content-end mb-3 fw-bold text-center">
                                ${
                                    data.price * order.length
                                }
                            </div>
                        </div>
                    </div>
                    
                )} )
            }
            <hr />
            <div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Item Total</p>
                    <p>$600</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Delivery</p>
                    <p>$600</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Order Total</p>
                    <p>$600</p>
                </div>
            </div>
            <hr />
            <div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>{'Customer Details'.toUpperCase()}</p>
                    <p className='text-primary fw-bold fs-4'><AiOutlineShareAlt/> Share</p>
                </div>
            </div>
            <div className="d-flex bd-highlight">
                <div className="p-2 bd-highlight">
                    <p>Name</p>
                    <p>Mobile</p>
                    <p>Address</p>
                    <p>PinCode</p>
                    <p>City</p>
                    <p>Payment</p>
                </div>
                <div className="p-2 flex-grow-1 bd-highlight">
                    <p>Sazzadul Islam</p>
                    <div className='d-flex justify-content-between'><p>+880 1755972192</p> <div className='d-flex justify-content-between'><BsTelephone className='bg-primary text-white p-1 me-2 fs-1'/><FaWhatsappSquare className='fs-1 text-success'/></div></div>
                    
                    <p>Senpara Porbota, Mirpur-13</p>
                    <p>4110058</p>
                    <p>Dhaka</p>
                    <div className='d-flex justify-content-between'><p>Cash On Delivery</p> <p className='text-danger px-1 fw-bolder' style={{background:"rgb(217, 149, 149)"}}>PAD</p></div>
                </div>
            </div>
            <hr style={{marginTop:"-10px"}}/>
            <div className='d-flex justify-content-evenly pb-4'>
                <button type="button" className="btn btn-outline-danger">Reject Order</button>
                <button type="button" className="btn btn-success">Accept Order</button>
            </div>
        </div>
    );
};

export default OrderDetails;