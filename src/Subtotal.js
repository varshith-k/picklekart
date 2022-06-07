import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate();
  //eslint-disable-next-line
  const [{basket},dispatch] = useStateValue();
  return (

    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) =>(<>
        <p>Order Total ( {basket?.length} items ): <strong>{value}</strong></p>
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
        <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal