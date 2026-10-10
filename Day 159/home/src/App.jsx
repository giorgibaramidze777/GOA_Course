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
import cartI from './assets/shopping_cart_40dp_000000_FILL0_wght400_GRAD0_opsz40.png'
import cartE from './assets/illustration-empty-cart.svg'

function App() {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState([])
  const products = [
    {
      img: waffle,
      cat: 'Waffle',
      text: 'Waffle with Berries',
      price: '6.50'
    },
    {
      img: creme,
      cat: 'Créme Brŭlée',
      text: 'Créme Brŭlée',
      price: '7.00'
    },
    {
      img: macaron,
      cat: 'Macaron',
      text: 'Macaron Mix of Five',
      price: '8.00'
    },
    {
      img: tiramisu,
      cat: 'Tiramisu',
      text: 'Classic Tiramisu',
      price: '5.50'
    },
    {
      img: baklava,
      cat: 'Baklava',
      text: 'Pistachio Baklava',
      price: '4.00'
    },
    {
      img: meringue,
      cat: 'Pie',
      text: 'Lemon Meringue Pie',
      price: '5.00'
    },
    {
      img: cake,
      cat: 'Cake',
      text: 'Red Velvet Cake',
      price: '4.50'
    },
    {
      img: brownie,
      cat: 'Brownie',
      text: 'Salted Caramel Brownie',
      price: '5.50'
    },
    {
      img: pana,
      cat: 'Panna Cotta',
      text: 'Vanilla Panna Cotta',
      price: '6.50'
    }
  ];


  function addItem(info) {
    setItem([...item, info])
  }


  console.log(item)
  return (
    <>
      <Routes>
        <Route path="/Cart" element={<Cart img={cartE} imgg={waffle} />} />
        <Route path="/" element={<>
          <h1 className='text-[32px]'>Desserts</h1>
          <img src={cartI} alt='Error' className='w-[70px] h-[70px] absolute right-[0] top-[0] cursor-pointer' />
          <div className='flex flex-wrap gap-[25px] w-[825px]'>
            {products.map((item, index) => {
              return <Card key={index} img={item.img} cat={item.cat} text={item.text} price={item.price} cart={cart} click={() => addItem(item)} />
            })
            }
          </div>
        </>} />
      </Routes>
    </>
  )
}

export default App