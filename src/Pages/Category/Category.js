import React from 'react';
import Header from '../../Components/Header/Header';
import {FiSearch} from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Category = () => {
    return (
        <div>
            <Header>    
                <div className='d-flex justify-content-around py-3'>
                    <div className="title">Catalogue</div>
                    <div className='ml-5'>
                        <FiSearch/>
                    </div>
                </div>
                <div className=" bg-primary mt-2">
                    <div className=" nav nav-tabs d-flex bg-primary">
                        <Link to={'/'} className="text-center nav-link text-white bg-primary col-6" clicked>Product</Link>
                        <Link to={'/category'} className="text-center nav-link text-white bg-primary col-6">Category</Link>
                    </div>
                </div>
            </Header>
            <h2 className='text-danger text-center'> No data avaiable </h2>
        </div>
    );
};

export default Category;