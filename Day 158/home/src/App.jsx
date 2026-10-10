import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Card from './components/Card'
import Cart from './components/Cart'
import cart from './assets/icon-add-to-cart.svg'
import waffle from './assets/image-waffle-desktop.jpg'
import creme from './assets/image-creme-brulee-desktop.jpg'
import macaron from './assets/image-macaron-desktop.jpg'
import tiramisu from './assets/image-tiramisu-desktop.jpg'
import baklava from './assets/image-baklava-desktop.jpg'
import meringue from './assets/image-meringue-desktop.jpg'
import cake from './assets/image-cake-desktop.jpg'
import brownie from './assets/image-brownie-desktop.jpg'
import pana from './assets/image-panna-cotta-desktop.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<>
          <h1 className='text-[32px]'>Desserts</h1>
          <div className='flex flex-row gap-[25px]'>
            <Card img={waffle} cat='Waffle' text='Waffle with Berries' price='6.50' cart={cart} />
            <Card img={creme} cat='Créme Brŭlée' text='Waffle with Berries' price='7.00' cart={cart} />
            <Card img={macaron} cat='Macaron' text='Macaron Mix of Five' price='8.00' cart={cart} />
          </div>
          <div className='flex flex-row gap-[25px]'>
            <Card img={tiramisu} cat='Tiramisu' text='Classic Tiramisu' price='5.50' cart={cart} />
            <Card img={baklava} cat='Baklava' text='Pistachio Baklava' price='4.00' cart={cart} />
            <Card img={meringue} cat='Pie' text='Lemon Meringue Pie' price='5.00' cart={cart} />
          </div>
          <div className='flex flex-row gap-[25px]'>
            <Card img={cake} cat='Cake' text='Red Velvet Cake' price='4.50' cart={cart} />
            <Card img={brownie} cat='Brownie' text='Salted Caramel Brownie' price='5.50' cart={cart} />
            <Card img={pana} cat='Panna Cotta' text='Vanilla Panna Cotta' price='6.50' cart={cart} />
          </div>
        </>} />
      </Routes>
    </>
  )
}

export default App

