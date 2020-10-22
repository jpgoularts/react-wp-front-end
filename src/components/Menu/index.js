import React, { useState } from 'react';
import { MenuItem } from './styles';

function Menu({logoImg}) {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenu() {
        if(!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }

    return (
        <MenuItem>
            <div className="container">
                <nav data-menu={isOpen}>
                    <a href="" className="logo">
                        <img src={logoImg} alt=""/>
                    </a>
                    <button className="menu-toggle" onClick={handleMenu} >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Veículos</a>
                            </li>
                            <li>
                                <a href="">Fale conosco</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </MenuItem>
    );
}

export default Menu;