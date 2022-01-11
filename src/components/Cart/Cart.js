import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const { cart } = props;
    let total = 0;
    let area = 0;
    let name = '';
    for (const nation of cart) {
        total = total + parseFloat(nation.population);
        area = area + parseFloat(nation.area);
        name = name + '"' + nation.name + '"' + ' ';
    }
    return (
        <div className='cart'>
            <h2>Country Population:</h2>
            <h3>Country Selected: {cart.length}</h3>
            <h3>Name Selected: {name}  </h3>
            <h4>Total Area: {area} Km<sup>2</sup></h4>
            <h4>Total Population: {total.toFixed(2)} Million</h4>
            <button className='cart-btn'>Done</button>
        </div>
    );
};

export default Cart;