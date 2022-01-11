import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

import './Nation.css';

const Nation = (props) => {
    // console.log(props);
    const { name, Capital, img, area, population } = props.nation;
    const flag = <FontAwesomeIcon icon={faFlag} />

    return (
        <div className='individual-container'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Capital: {Capital}</h4>
            <h4>Area: {area} Km<sup>2</sup></h4>
            <h4>Population: {population} million</h4>
            <button
                onClick={() => props.handleAddToCart(props.nation)}
                className='regular-button'>{flag} Add To Cart</button>


        </div>
    );
};

export default Nation;