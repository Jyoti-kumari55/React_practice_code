import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext';

export const cartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  return (
    <div className='cartItem'>
    <img src={productImage} />
    <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p>Price : ${price}</p>
        <div className='countHandler'>
        <button>-</button>
            <input value={cartItems[id]} />
            <button>+</button>
        </div>
    </div>
      
    </div>
  )
}


