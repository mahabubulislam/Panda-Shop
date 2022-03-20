import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
const Menu = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container">
            <a className="navbar-brand" href="#">Nike React</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#products">Product</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#cart">Cart <sup>{props.count}</sup></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Login">Login</a>
                </li>
                </ul>
            </div>
          </div>
        </nav>
    );
};

export default Menu;