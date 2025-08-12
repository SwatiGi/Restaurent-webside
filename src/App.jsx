import React from 'react'
import Header from './components/Header'

import Meals from './components/Meal/Meals'
import FoodSummery from './components/FoodDetail/FoodSummery'





const App = () => {
  return (
    <>
      <Header />
  <FoodSummery/>
      <Meals/>
    </>
  )
}

export default App
