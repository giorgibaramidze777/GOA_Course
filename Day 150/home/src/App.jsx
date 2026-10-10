import { useState } from 'react'
import cart from './assets/shoppingCart.png'
import good from './assets/good.png'
import great from './assets/great.png'
import mega from './assets/mega.png'
import ultra from './assets/ultra.png'
import Card from './component/Card'
import Card2 from './component/Card2'

function App() {
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(0)
  const [shop, setShop] = useState([])
  
  return (
    <>
      <div className='flex flex-row justify-center'>
          <h1 className='text-[30px]'>PC Shop</h1>
        <div className='translate-x-[200px] flex flex-row gap-[40px]'>
          <p>About us</p>
          <p>Contact us</p>
          <img src={cart} />
        </div>
        
      </div>
      <hr />
      <div className='flex flex-row gap-[100px]'>
        <div>
          <Card img={good} pt='$899' pc='Good PC'/>
          <button className='bg-[#913D3D] p-[10px] rounded-[5px] h-[50px] w-[200px] translate-x-[100px]' onClick={() => {
              setShop(prev => [...prev, <div><Card2 img={good} pc='Good PC' price='899'/></div>])
          }}>Add To Cart</button>
        </div>
        <div>
          <Card img={great} pt='$1999' pc='Great PC'/>
          <button className='bg-[#913D3D] p-[10px] rounded-[5px] h-[50px] w-[200px] translate-x-[100px]' onClick={() => {
              setShop(prev => [...prev, <div><Card2 img={great} pc='Great PC' price='1999'/></div>])
          }}>Add To Cart</button>
        </div>
        <div>
          <Card img={mega} pt='$2999' pc='Mega PC'/>
          <button className='bg-[#913D3D] p-[10px] rounded-[5px] h-[50px] w-[200px] translate-x-[100px]' onClick={() => {
              setShop(prev => [...prev, <div><Card2 img={mega} pc='Mega PC' price='2999'/></div>])
          }}>Add To Cart</button>
        </div>
        <div>
          <Card img={ultra} pt='$9999' pc='Ultra PC'/>
          <button className='bg-[#913D3D] p-[10px] rounded-[5px] h-[50px] w-[200px] translate-x-[100px]' onClick={() => {
              setShop(prev => [...prev, <div><Card2 img={ultra} pc='Ultra PC' price='9999'/></div>])
          }}>Add To Cart</button>
        </div>
      </div>

      <div className='translate-x-[2000px] w-[250px] bg-white shadow-xl/30'>
        <h1>Shopping Cart</h1>
        <p>Amount: <span>0</span></p>
        <p>Total: $<span>0</span></p>
        <hr />
        <div id='shop'>
           {shop.map((item, index) => {
            return item
           })}
        </div>

      </div>

    </>
  )
}

export default App
