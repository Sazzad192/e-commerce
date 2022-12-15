import React from 'react';
import './Navbar.css';
import { BiCategoryAlt} from 'react-icons/bi';
import { BsBorderOuter } from 'react-icons/bs';
import { IoHomeOutline } from 'react-icons/io5';
import { SiGooglemessages } from 'react-icons/si';
import { VscAccount } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <nav>
            <ul className="nav nav-pills nav-fill" style={{background:"white"}}>
                <li className="nav-item">
                    <NavLink to={'/home'} className={({ isActive }) => isActive ? `nav-link d-flex flex-column align-items-center text-primary bg-white lg:fw-bold` : `nav-link d-flex flex-column align-items-center text-black-50 bg-white lg:fw-bold` }>
                        <IoHomeOutline/>
                        Home
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to={'/allorder'} className={({ isActive }) => isActive ? `nav-link d-flex flex-column align-items-center text-primary bg-white position-relative lg:fw-bold` : `nav-link d-flex flex-column align-items-center text-black-50 bg-white position-relative lg:fw-bold` }>
                    <span className="position-absolute top-5 start-50 translate-middle badge ms-3 rounded-pill bg-danger">12</span>
                        <BsBorderOuter/>
                        Order
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/"} aria-current="page" href="#" className={({ isActive }) => isActive ? `nav-link d-flex flex-column align-items-center text-primary bg-white lg:fw-bold` : `nav-link d-flex flex-column align-items-center text-black-50 bg-white lg:fw-bold`}>
                        <BiCategoryAlt/>
                        Product
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={''} className={`nav-link d-flex flex-column align-items-center text-black-50 bg-white lg:fw-bold`}>
                        <SiGooglemessages/>
                        Message
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/order/customerlist'} className={({ isActive }) => isActive ? `nav-link d-flex flex-column align-items-center text-primary bg-white lg:fw-bold` : `nav-link d-flex flex-column align-items-center text-black-50 bg-white lg:fw-bold`}>
                        <VscAccount/>
                        Account
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;