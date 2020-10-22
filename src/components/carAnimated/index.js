import React from 'react';

import carLeft from '../../assets/img/car-left.png';
import carRight from '../../assets/img/car-right.png';

import { Cars } from './styles';

function CarAnimated() {
    return (
        <Cars>
            <img className="car from-left" src={carRight} alt=""/>
            <img className="car from-right" src={carLeft} alt=""/>
        </Cars>
    );
}

export default CarAnimated;