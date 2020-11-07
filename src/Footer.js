import React from 'react';
import { IconFlagCA } from 'material-ui-flags';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            {/* Logo */}
            <div className="footer__logoContainer">
                <Link to='/'>
                    <img className='footer__logo' src={require('./amazon_logo.png')}/>
                </Link>
            </div>
            {/* Country */}
            <div className="footer__country">
                <IconFlagCA className='footer__countryFlag'/>
                <p className='footer__countryName'>
                    <small>Canada</small>
                </p>
            </div>
        </footer>
    )
}

export default Footer
