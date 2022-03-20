import React from 'react';
import './Menu.css'
const Menu = (props) => {
    return (
        <div className='container d-flex justify-content-between bg-light'>
            <h4 className='m-3 p-2'>Panda Shop</h4>
            <nav className='m-3 p-2 d-flex'>
                <li><a href="Home.js">Home</a></li>
                <li><a href="https">Products</a></li>
                <li><a href="https">Cart <sup>{props.count}</sup></a></li>
                <li><a href="https">Login</a></li>
            </nav>
        </div>
    );
};

export default Menu;