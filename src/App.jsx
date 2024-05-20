import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import DiscountProducts from './components/DiscountProducts/DiscountProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <DiscountProducts></DiscountProducts>
    </>
  )
}

export default App
