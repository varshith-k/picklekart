import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {
  //eslint-disable-next-line
   const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src='\images\advertise.jpg' alt=''></img>
        <div>
          <h3>Hello, {user?.email}</h3>
        <h2 className='checkout_title'>
          Your Kart
          </h2>
          {basket.map(item=>(<CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            category={item.category}/>))
            }
            <CheckoutProduct
            id={101}
            title={'Test ProductProductProductProductProductProductProductProductProductProductProductProductProduct '}
            image={'/images/pickle-a.jpg'}
            price={200}
            category={'🥩'}
            /><CheckoutProduct
            id={101}
            title={'Test ProductProductProductProductProductProductProductProductProductProductProductProductProduct '}
            image={'/images/pickle-a.jpg'}
            price={200}
            category={'🥩'}
            />
{/* <CheckoutProduct/> */}
{/* <CheckoutProduct/> */}
{/* <CheckoutProduct/> */}

        </div>
        </div>
      <div className='checkout_right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout