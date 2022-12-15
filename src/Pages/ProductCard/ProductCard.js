import React from 'react';
import './ProductCard.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {AiOutlineShareAlt} from 'react-icons/ai'

const ProductCard = ({data}) => {

    const {name, price, stock, picture} = data;
    return (
        <div className="container">
            <div className='row'>
                <div className="col">
                    <img className='product-picture rounded' src={picture} alt="" />
                </div>
                <div className="col-6">
                    <div className='d-flex flex-column justify-content-start text-start'>
                        <div className='fs-6'>{name}</div>
                        <div className='fw-bold'>${price}</div>
                        <div className='text-success fw-semibold'>{stock}</div>
                    </div>
                    
                </div>
                <div className="col-2 d-flex flex-column justify-content-between text-center">
                        <BsThreeDotsVertical/>
                        
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                        </div>
                </div>
                <hr className='mt-3 mb-1' />
                <div className='text-center'><AiOutlineShareAlt/>Share Product</div>
            </div>
        </div>
    );
};

export default ProductCard;