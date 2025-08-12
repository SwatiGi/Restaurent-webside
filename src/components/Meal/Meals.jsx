import mealsData from "./MealsList"
import "./Meals.css"
import { FaPlus } from 'react-icons/fa';
import { useContext } from "react"
import CardContext from "../../store/CardContext"
import React from "react";
const Meals = () => {
 let {count,setCount} = useContext(CardContext)
  let handleCount = (id) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  }
  return (
    <>
    <div className='meals-container'>
      {mealsData.map((data) => {
        return  <React.Fragment key={data.id}>
 <div  className='description' key={data.id}>
          <div>
          <h3 >{data.name}</h3>
          <i>{data.description}</i>
            <p className='price'><b>${data.price}</b></p>
          
          </div>
          <div className='amount'>
            <div className='amount-div'><h3>Amount</h3>
              <input
                type="text"
                disabled
                className='input'
               value={count[data.id] ?? 0}
              /></div>
            <button onClick={()=>handleCount(data.id)} className='add-btn'>  <FaPlus /> Add</button></div>
          
          </div>
          <hr />
</React.Fragment>
      })}
      
      </div>
    </>
  )
}

export default Meals