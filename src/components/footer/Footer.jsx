import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from './m.jpg';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/home">Movies App</Link>
                    </div>
                </div>
                
                <div className="BigFooter">
                    
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/contactus">Contact us</Link>
                    </div>

                    <div className="footer__content__menu">
                        <Link to="/">Add Moive</Link>
                    </div>

                    

                </div>
            </div>
        </div>
    );
}

export default Footer;
