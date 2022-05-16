import React from 'react'
import "./Product.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Product({title, image, price, category}) {
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
      
      <button>Add To <ShoppingCartIcon/></button>
    </div>
  )
}

export default Product