import React, { useEffect, useState } from 'react';
import OrderCard from '../../../Shared/OrderCard/OrderCard';
import HomeHeader from '../../HomeHeader';


const AcceptedOrder = () => {
    const [orders, setOrders] = useState([]);
    const pendingOrders = orders.filter(data=> data.status === 'Accepted')

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

export default AcceptedOrder;