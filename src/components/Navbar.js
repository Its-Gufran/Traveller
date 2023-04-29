import React from 'react';
import { MenuItems } from './MenuItems';

import { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
           <nav className='NavbarItems'>
            <h1 className='nav-logo'>Trippy</h1>
            <div className='menu-icons' onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" 
                : "fas fa-bars"}></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
             {MenuItems.map((item, index) => {
                return(
                    <li key={index}><a className={item.cName} href='/'><i className={item.icon}></i>{item.title}</a></li>
                );
             }
             )
            } 
            <button>Sign up</button>

            </ul>
           </nav>
        )
    }
};

export default Navbar;