import { useElements } from '@stripe/react-stripe-js';
import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { CardElement } from '@stripe/react-stripe-js';
import { useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios'
function Payment() {
    //eslint-disable-next-line
    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [error,setError] = useState(null);
    const [processing,setProcessing] = useState(null);
    const [succeeded,setSucceeded] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);

    useEffect(()=>{
        //generate special stripe secret that allows us to charge a customer
       const getClientSecret = async() =>{
              const response = await axios({
                  method : 'post',
                  //stripe expects payments in sub unit for rs it is paisa which is 100p = 1rs
                  url : `/payments/create?total=${getBasketTotal(basket)*100}`
              })
              setClientSecret(response.data.clientSecret)
       }
       getClientSecret();
    },[basket])

    const handleSubmit = async(event) => {
          event.preventDefault();
          setProcessing(true);
          //eslint-disable-next-line
          const payload = await stripe.confirmCardPayment(clientSecret,{
              payment_method:{
                  card: elements.getElement(CardElement)
              }
          }).then(({paymentIntent}) => {
  //payment intent is payment confirmation\
  setSucceeded(true);
  setError(null);
  setProcessing(false);
  navigate('/orders', { replace: true })
//   history.replace()
          })

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
    <div className='payment_priceContainer'>
    <CurrencyFormat
        renderText={(value) =>(<>
        <p>Subtotal ( {basket?.length} items ): <strong>{value}</strong>
        </p>
        {/* <small className='subtotal_gift'><input type='checkbox'/>This order is a gift.</small> */}
        </>)
        }
        decimalScale={2}
        // value={getBasketTotal(basket)}
        value={getBasketTotal(basket)}
        //val that is printed
        displayType={'text'}
        thousandSeparator={true}
        prefix={"₹"}
    />
    <button disabled={processing || disabled || succeeded}>
    <span>{processing? <p>Processing</p> : "Buy Now"} </span></button>
    </div>
    {error && <div>{error}</div>}
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