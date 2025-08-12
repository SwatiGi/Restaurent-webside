import React, { useContext, useState } from 'react'
import { MdShoppingCart } from 'react-icons/md';
import "./Header.css"
import Modal from './Portal/Modal'
import CardContext from '../store/CardContext'
const Header = () => {
  let [toggal, setToggal] = useState(true)
  let {count} = useContext(CardContext)
   const totalCount = Object.values(count).reduce((sum, num) => sum + num, 0);
  return (
      <div className='header'>
      <div className='react-meals'>ReactMeals</div>
      {toggal?<div onClick={()=>setToggal(!toggal)} className='icon-container'>
        <MdShoppingCart color='white' size={22} />
        <p className='your-cart' >Your Cart</p>
        <button className='count-btn'>{totalCount}</button>
      </div>:  <Modal onclose={() => setToggal(true)}>
          <p>Your cart items will show here</p>
        </Modal>}
      
          
      </div>
  )
}

export default Header