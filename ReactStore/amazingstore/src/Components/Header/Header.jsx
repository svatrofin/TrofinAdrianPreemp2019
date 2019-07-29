import React from 'react';
import './Header.css'
import Logo from '../Logo/Logo';
import Contact from'../Contact/Contact';
import Navbar from '../Navbar/Navbar';


class Header extends React.Component {
    render() {
        return (
        <div className="header-container">
            <div className="header-top-container">
            <Logo/>
            <Contact/>
            <Navbar/>
            </div>
                
        </div>
        );
}
}
export default Header;