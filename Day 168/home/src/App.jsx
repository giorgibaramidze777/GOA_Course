import { useState } from 'react'
import search from './assets/search.png'
import cart from './assets/cart.png'
import ppl from './assets/random-ppl.png'
import shirt from './assets/tshirt.png'
import Card from './components/Card.jsx'
import jeans from './assets/jeans.png'
import sumShirt from './assets/sumShirt.png'
import sleeve from './assets/sleeve.png'
import ck from './assets/ck.png'
import zara from './assets/zara.png'
import versace from './assets/versace.png'
import prada from './assets/prada.png'
import gucci from './assets/gucci.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='flex flex-row items-center relative left-[300px] top-[5px]'>
          <h1 className='text-[32px] font-bold'>SHOP.CO</h1>
          <div className='p-[15px] flex flex-row'>
            <p className='text-[#515151] p-[7px]'>Shop</p>
            <p className='text-[#515151] p-[7px]'>On Sale</p>
            <p className='text-[#515151] p-[7px]'>New Arivals</p>
            <p className='text-[#515151] p-[7px]'>Brands</p>
          </div>
          <div className='flex flex-row p-[15px]'>
            <img src={search} alt="search" />
            <input type="text" placeholder='Search for products...' className='outline-none' />
          </div>
          <img src={cart} alt="cart" />
        </div>
      </div>

      <div>
        <div className='relative left-[300px] top-[30px]'>
          <h1 className='text-[45px] font-bold'>FIND CLOTHES</h1>
          <h1 className='text-[45px] font-bold'>THAT MATCHES</h1>
          <h1 className='text-[45px] font-bold'>YOUR STYLE</h1>
          <p className='text-[#c1c1c1]'>Browse through our diserse range of meliculosnly crafted germents, designed <br /> to bring out your individually and cater to your sense style.</p>
          <button className='bg-black text-white w-[150px] h-[40px] relative top-[15px] rounded-full'>Shop Now</button>
        </div>
        <div className='bg-[#000000]'>
          <img src={versace} />
        </div>
        <div>
          <img src={ppl} alt="people" className='w-[400px] relative left-[1100px] top-[-300px]' />
        </div>
        <div>
          <h1 className='text-[32px] font-bold text-center'>NEW ARRILVALS</h1>
          <div className='flex flex-row justify-center'>
             <Card img={shirt} text='T-shirt with Tape Details' price='$120'/>
             <Card img={jeans} text='Skinny Fit Jeans' price='$240'/>
             <Card img={sumShirt} text='Checkered' price='$180'/>
             <Card img={sleeve} text='Sleeve Striped T-shirt' price='$130'/>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
