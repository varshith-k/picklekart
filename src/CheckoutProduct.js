import React from 'react';
import './CheckoutProduct.css'

function CheckoutProduct({id, image,title, price, rating}) {
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} alt=''/>
        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'><small>Rs</small><strong>{price}</strong></p>

        </div>
    </div>
  )
}

export default CheckoutProduct