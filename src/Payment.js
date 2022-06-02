import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
        < div className='payment_container'>
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>
        <div className='payment_section'>
<div className='payment_title'>
    <h3>Delivery Address</h3>
</div>
<div className='payment_address'>
    <p>{user?.email}</p>
    <p>H.No XYZ</p>
    <p>Renigunta</p>
    <p>India</p>
</div>
        </div>
        <div className='payment_section'>
        <div className='payment_title'>
        <h3>Review Items</h3>
        </div>
        <div className='payment_items'>
            {basket.map(item =>(
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                category={item.category}/>
            ))}
        </div>
        </div>
        <div className='payment_section'>
        <div className='payment_title'>
        <h3>Payment Method</h3>
        </div>
        <div className='payment_details'>

        </div>
        </div>
        {/* Payment Section - Delivery Address
        Payment Section - Review Items 
        Payment Section - Method */}
            
        </div>
    </div>
  )
}

export default Payment