import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { FooterDiv } from './styles';

function Footer({logoImg, linkFacebook, linkInstagram, linkWhatsApp}) {
    return (
        <FooterDiv>
            <div className="container align">
                <div className="footer-info">
                    <a className="logo">
                        <img src={logoImg} alt="ConceptCar" />
                    </a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget accumsan orci, quis sagittis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </div>
                <div className="footer-social">
                    <h5>Entre em contato!</h5>
                    <div>
                        <a href={linkFacebook} target="_blank">
                            <FaFacebook/>
                        </a>
                        <a href={linkInstagram} target="_blank">
                            <FaInstagram/>
                        </a>
                        <a href={linkWhatsApp} target="_blank">
                            <FaWhatsapp/>
                        </a>
                    </div>
                </div>
            </div>
        </FooterDiv>
    );
}

export default Footer;