import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import {BiArrowBack} from 'react-icons/bi'
import {useNavigate } from 'react-router-dom';
import OrderDetails from './OrderDetails';

const Order = () => {
    const navigate = useNavigate();
    const [order, setOrder] = useState([]);

    useEffect(()=>{
        fetch('order.json')
        .then(res=>res.json())
        .then(data => setOrder(data.filter(element => element.order_id === 27759)))
    },[])   

    return (
        <div>
            <Header>
                <div className='d-flex justify-content-left py-3'>
                    <BiArrowBack onClick={() => navigate(-1)} className='me-5'/>
                    <p className='ms-5'>Order</p>
                </div>
            </Header>
            <div className='mx-4' style={{marginTop:"-15px"}}>
            {
                order.map(element => <OrderDetails key={element}
                orderData = {element}></OrderDetails>)
            }
            </div>
        </div>
    );
};

export default Order;