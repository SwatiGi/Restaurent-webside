import React from 'react'
import { MdShoppingCart } from 'react-icons/md';
import "./Header.css"
const Header = () => {
  return (
      <div className='header'>
      <div className='react-meals'>ReactMeals</div>
      <div className='icon-container'>
        <MdShoppingCart color='white' size={22} />
        <p className='your-cart' >Your Cart</p>
        <button className='count-btn'>0</button>
      </div>
          
      </div>
  )
}

export default Header