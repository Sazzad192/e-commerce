import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const OrderLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default OrderLayout;