import React from 'react';

import { FaGasPump, FaCar, FaFillDrip, FaHeartbeat, FaBookmark } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { Card } from './styles';


function CardVeiculo({name, model, price, fuel, km, year, image, marca, color}) {
    return (
        <Card>
            <a className="image">
                <img src={image.sourceUrl} alt=""/>
            </a>
            <div className="description">
                <div className="info-primaria">
                    <p className="marca">{marca}</p>
                    <p className="nome">{name}</p>
                    <p className="price">R${price}</p>
                </div>
                <div className="especificacoes">
                    <span><FaGasPump/>{fuel}</span>
                    <span><FaCar/>{km}</span>
                    <span><FaFillDrip/>{color}</span>
                    <span><FaHeartbeat/>{year}</span>
                    <span><FaBookmark/>{model}</span>
                </div>
                <div className="info">
                    <a href="">
                        <FiHeart className="like"/>
                    </a>
                </div>
            </div>
        </Card>
    );
}

export default CardVeiculo;