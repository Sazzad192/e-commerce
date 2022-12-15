import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import {BiArrowBack} from 'react-icons/bi'
import { useLoaderData, useNavigate } from 'react-router-dom';
import CustomerCard from './CustomerCard';


const CustomerList = () => {
    const navigate = useNavigate();
    const customerData = useLoaderData();

    return (
        <div>
            <Header>
                <BiArrowBack onClick={() => navigate(-1)} className='ms-3 mt-4 fs-3 fw-bold'/>
                <h3 className='text-center pb-4'>My Customer</h3>

                <div className="input-group pb-3">
                    <input type="text" placeholder='Search by customer Name' className="form-control" aria-label="Text input with dropdown button"/>
                </div>
            </Header>
            
            <div className='pb-5'>
                {
                    customerData.map(element => <CustomerCard 
                    key={element.id}
                    customerData={element}>
                    </CustomerCard>)
                }
            </div>

        </div>
    );
};

export default CustomerList;