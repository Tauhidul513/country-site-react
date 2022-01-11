import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Nation from '../Nation/Nation';
import './Country.css';

const Country = () => {
    const [nations, setNations] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./country_details.JSON')
            .then(res => res.json())
            .then(data => setNations(data));
    }, [])

    const handleAddToCart = (nation) => {
        // console.log(nation.name);
        const newCart = [...cart, nation];
        setCart(newCart);
    }
    return (
        <div className='country-container'>
            <div className="nation-container">
                {
                    nations.map(nation => <Nation
                        key={nation.name}
                        nation={nation}
                        handleAddToCart={handleAddToCart}
                    >

                    </Nation>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Country;