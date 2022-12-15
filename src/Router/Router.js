import { async } from '@firebase/util';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import OrderLayout from '../Layout/OrderLayout';
import Category from '../Pages/Category/Category';
import CustomerList from '../Pages/CustomerList/CustomerList';
import Home from '../Pages/Home/Home';
import AcceptedOrder from '../Pages/Home/Orders/AcceptedOrder/AcceptedOrder';
import Pending from '../Pages/Home/Orders/PendingOrder/Pending';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Login/Signup/Signup';
import Order from '../Pages/AllOrderDetails/Order';
import Product from '../Pages/Product';
import AllOrder from '../Pages/AllOrderDetails/AllOrder/AllOrder';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Product></Product>
            },
            {
                path:'/category',
                element:<Category></Category>
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader: async() =>{
                    return fetch('order.json');
                }
            },
            {
                path:'/pending',
                element:<Pending></Pending>
            },
            {
                path:'/accept',
                element:<AcceptedOrder></AcceptedOrder>
            },
            {
                path:'/allorder',
                element:<AllOrder></AllOrder>,
                loader: async() =>{
                    return fetch('product.json');
                }
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
        ]
    },
    {
        path:'/order',
        element:<OrderLayout></OrderLayout>,
        children:[
            {
                path:'/order',
                element:<Order></Order>
            },
            {
                path:'/order/customerlist',
                element:<CustomerList></CustomerList>,
                loader:()=> {
                    return fetch('/customer.json')
                }
            }
        ]
    }
])

export default router;