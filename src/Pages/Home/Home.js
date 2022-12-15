import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderCard from '../Shared/OrderCard/OrderCard';
import HomeHeader from './HomeHeader';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <HomeHeader></HomeHeader>
            <div className='pb-5'>
                {
                    data.map(element=> <OrderCard
                    key={element.id}
                    orderData={element}></OrderCard>)
                }
            </div>
        </div>
    );
};

export default Home;