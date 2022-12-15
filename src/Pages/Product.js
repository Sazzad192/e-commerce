import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import {FiSearch} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className=''>
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

            

            <div className='mx-3 overflow-hidden'>
                {
                    products.map(element => <ProductCard 
                        key={element.id}
                        data={element}></ProductCard>)
                }
            </div>

            <div className="d-flex justify-content-center sticky-bottom" style={{bottom: "60px"}}>
                <button type="submit" className='text-white border-0 rounded p-3 mx-auto' style={{background: "rgb(240, 90, 56)"}}>Add new product</button>
            </div>
        </div>
    );
};

export default Product;