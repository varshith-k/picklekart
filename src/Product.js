import React from 'react'
import "./Product.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
function Product({id, title, image, price, category}) {
  const [{basket}, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    //dispatch some action to data layer
dispatch({
  type: 'ADD_TO_BASKET',
  item : {
    id : id,
    title: title,
    image : image,
    price : price,
    category: category,
  },
});
  };
  return (
    <div className='product'>
    <div className='product_info'>
      <p>{title}</p>
      <p className='product_price'>
        <small>INR </small>
        <strong>{price}</strong>
        <small> Rs/KG</small>
      </p>
      <div className='product_type'>
        <p>{category}</p>
        </div>
      </div>
      <img src={image} alt=''/>
      
      <button onClick={addToBasket}>Add To <ShoppingCartIcon/></button>
    </div>
  )
}

export default Product