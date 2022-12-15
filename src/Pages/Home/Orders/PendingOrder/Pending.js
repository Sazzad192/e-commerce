import React, { useEffect, useState } from 'react';
import Header from '../../../../Components/Header/Header';
import ActiveOrdes from '../ActiveOrder/ActiveOrdes';
import Overview from '../../Overview/Overview';
import {MdVerified} from 'react-icons/md';
import {AiTwotoneStop} from 'react-icons/ai';
import OrderCard from '../../../Shared/OrderCard/OrderCard';
import HomeHeader from '../../HomeHeader';

const Pending = () => {
    const [orders, setOrders] = useState([]);
    const pendingOrders = orders.filter(data=> data.status === 'Pending')

    useEffect(()=>{
        fetch('order.json')
        .then(res=>res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <HomeHeader></HomeHeader>
            <div className='pb-5'>
                {
                    pendingOrders.map(element=> <OrderCard
                    key={element.id}
                    orderData={element}></OrderCard>)
                }
            </div>
        </div>
    );
};

export default Pending;