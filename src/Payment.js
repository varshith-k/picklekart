import { useElements } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { CardElement } from '@stripe/react-stripe-js';
import { useStripe } from '@stripe/react-stripe-js';

function Payment() {
    //eslint-disable-next-line
    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error,setError] = useState(null);
    // const [processing,setProcessing] = useState(null);
    const [disabled,setDisabled] = useState(true);

    const handleSubmit = e => {

    }
    const handleChange = event => {
        //listen to changes in cardelement
        //display errors while he types his card number and details
             setDisabled(event.empty);
             setError(event.error? event.error.message : "");
    }

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
{/* Stripe Magic */}
<form onSubmit={handleSubmit}>
    <CardElement onChange={handleChange}/>
    <div className='payment_price'></div>
    </form>
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