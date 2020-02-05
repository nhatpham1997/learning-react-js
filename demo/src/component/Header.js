import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                        <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/team">Team</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;