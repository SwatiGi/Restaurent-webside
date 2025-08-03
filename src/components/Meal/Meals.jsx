import React from 'react'
import mealsData from "./MealsList"
import "./Meals.css"
const Meals = () => {
 console.log(mealsData)
  return (
      <div className='meals-container'>
      {mealsData.map((data) => {
        return <div div key={data.id}>
        <h3 >{data.name}</h3>
          <i>{data.description}</i>
          <p className='price'><b>${data.price}</b></p>
          <hr />
        </div>
      })}
      
      </div>
  )
}

export default Meals