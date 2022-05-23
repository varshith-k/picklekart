import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image,title, price, rating}) {
  /* eslint-disable */
  const [{ basket }, dispatch] = useStateValue();
   const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    })
}
  return (

    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} alt=''/>
        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'><small>Rs</small><strong>{price}</strong></p>
        <div className='checkoutProduct_category'> Veg </div>
        <button onClick={removeFromBasket}>Remove from Kart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct