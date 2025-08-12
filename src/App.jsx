
import Header from './components/Header'

import Meals from './components/Meal/Meals'
import FoodSummery from './components/FoodDetail/FoodSummery'
import { useState } from 'react'
import ContextProvider from './store/ContextProvider'





const App = () => {

  return (
    <ContextProvider>
      <Header />
        <FoodSummery />
      <Meals/>
    </ContextProvider>
  )
}

export default App
