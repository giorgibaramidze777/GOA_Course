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
import menu from './assets/menu.png'
import browse from './assets/browse.png'
import sarah from './assets/sarah.png'
import alex from './assets/alex.png'
import james from './assets/james.png'
import mail from './assets/mail.png'
import payment from './assets/payment.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='flex flex-row items-center justify-center'>
          <h1 className='text-[32px] font-bold pl-[1%]'>SHOP.CO</h1>
          {/* <div className='border bg-[#C9C7C8] absolute top-[0] z-40 w-[100px]'>
            <p className='text-[#515151] p-[7px]'>Shop</p>
            <p className='text-[#515151] p-[7px]'>On Sale</p>
            <p className='text-[#515151] p-[7px]'>New Arivals</p>
            <p className='text-[#515151] p-[7px]'>Brands</p>
          </div> */}
          <div className='inline pl-[10px] sm:hidden p-[0px]'>
            <img src={menu} />
          </div>
          <div className='hidden sm:inline'>
            <div className='p-[15px] flex flex-row'>
              <p className='text-[#515151] p-[7px]'>Shop</p>
              <p className='text-[#515151] p-[7px]'>On Sale</p>
              <p className='text-[#515151] p-[7px]'>New Arivals</p>
              <p className='text-[#515151] p-[7px]'>Brands</p>
            </div>
          </div>

          <div className='flex flex-row p-[15px]'>
            <img src={search} alt="search" />
            <input type="text" placeholder='Search for products...' className='outline-none' />
          </div>
          <img src={cart} alt="cart" />
        </div>
      </div>

      <div>
        <div className='relative left-[10%] top-[30px]'>
          <h1 className='text-[45px] font-bold'>FIND CLOTHES</h1>
          <h1 className='text-[45px] font-bold'>THAT MATCHES</h1>
          <h1 className='text-[45px] font-bold'>YOUR STYLE</h1>
          <p className='text-[#c1c1c1] flex flex-wrap'>Browse through our diserse range of meliculosnly crafted germents, designed</p>
          <p className='text-[#c1c1c1] flex flex-wrap'>to bring out your individually and cater to your sense style.</p>
          <button className='bg-black text-white w-[150px] h-[40px] relative top-[15px] rounded-full'>Shop Now</button>
        </div>
        <div className='hidden xl:inline'>
          <img src={ppl} alt="people" className='w-[400px] relative left-[70%] top-[-300px]' />
        </div>
        <div className='hidden lg:inline'>
          <div className='bg-[#000000] flex flex-wrap items-evenly justify-evenly relative left-[0px] top-[150px] w-[100%]  xl:top-[-300px]'>
            <img src={versace} className='p-[20px] h-[100px]' />
            <img src={zara} className='p-[20px] h-[100px]' />
            <img src={gucci} className='p-[20px] h-[100px]' />
            <img src={prada} className='p-[20px] h-[100px]' />
            <img src={ck} className='p-[20px] h-[100px]' />
          </div>
        </div>

        <div className='relative top-[200px] xl:top-[-100px]'>
          <h1 className='text-[32px] font-bold text-center'>NEW ARRILVALS</h1>
          <div className='flex flex-row justify-center'>
            <Card img={shirt} text='T-shirt with Tape Details' price='$120' />
            <Card img={jeans} text='Skinny Fit Jeans' price='$240' />
            <Card img={sumShirt} text='Checkered Shirt' price='$180' />
            <Card img={sleeve} text='Sleeve Striped T-shirt' price='$130' />
          </div>
        </div>

        <div className='relative top-[230px] xl:top-[-70px]'>
          <h1 className='text-[32px] font-bold text-center'>TOP SELLING</h1>
          <div className='flex flex-row justify-center'>
            <Card img={shirt} text='T-shirt with Tape Details' price='$120' />
            <Card img={jeans} text='Skinny Fit Jeans' price='$240' />
            <Card img={sumShirt} text='Checkered Shirt' price='$180' />
            <Card img={sleeve} text='Sleeve Striped T-shirt' price='$130' />
          </div>
        </div>

        <div className='flex justify-center items-center relative top-[340px] xl:top-[10px]'>
          <img src={browse} className='w-[800px]' />
        </div>

        <div className='flex flex-col items-center justify-center pt-[3%]'>
          <h1 className='text-[32px] font-bold'>OUR HAPPY CUSTOMERS</h1>
          <div className='flex flex-row items-center justify-center pt-[3%]'>
            <img src={sarah} />
            <img src={alex} />
            <img src={james} />
          </div>
        </div>

        <div className='bg-[#000000] rounded-[15px] w-[95%] h-[30%] pt-[7px] flex justify-self-center'>
          <div className='inline'>
            <h1 className='text-[32px] text-[#ffffff] font-bold pl-[60px] pt-[50px] pb-[19px]'>STAY UPTO ABOUT <br /> OUR LATEST OFFERS</h1>
            <div>
              <div>
              <div className='w-[75%] flex flex-row bg-[#ffffff] rounded-[15px] relative bottom-[80%] right-[-300%] '>
                <img src={mail} className='p-[5px]' />
                <input type="text" placeholder='Enter your email address' className='outline-none' />
              </div>

              </div>
            </div>

          </div>

        </div>
        <div className='flex flex-row justify-between'>
          <div className='relative top-[10%]'>
            <h1 className='text-[32px] font-bold'>SHOP.CO</h1>
            <p className='text-[#c1c1c1] flex flex-wrap'>We have clothes that suits your style and</p>
            <p className='text-[#c1c1c1] flex flex-wrap'>which you're proud to wear.</p>
            <p className='text-[#c1c1c1] flex flex-wrap'>From women to men.</p>
          </div>

          <div className='pl-[15px]'>
            <h1 className='font-thin tracking-[3px]'>COMPANY</h1>
            <p className='text-[#c1c1c1]'>About</p>
            <p className='text-[#c1c1c1]'>Features</p>
            <p className='text-[#c1c1c1]'>Works</p>
            <p className='text-[#c1c1c1]'>Career</p>
          </div>
          <div className='pl-[15px]'>
            <h1 className='font-thin tracking-[3px]'>HELP</h1>
            <p className='text-[#c1c1c1]'>Customer Support</p>
            <p className='text-[#c1c1c1]'>Delivery Details</p>
            <p className='text-[#c1c1c1]'>Terms & Conditions</p>
            <p className='text-[#c1c1c1]'>Privacy Policy</p>
          </div>
          <div className='pl-[15px]'>
            <h1 className='font-thin tracking-[3px]'>FAQ</h1>
            <p className='text-[#c1c1c1]'>Account</p>
            <p className='text-[#c1c1c1]'>Manage Deliveries</p>
            <p className='text-[#c1c1c1]'>Orders</p>
            <p className='text-[#c1c1c1]'>Payments</p>
          </div>
          <div className='pl-[10px]'>
            <h1 className='font-thin tracking-[3px]'>RESOURCES</h1>
            <p className='text-[#c1c1c1]'>Free eBooks</p>
            <p className='text-[#c1c1c1]'>Development Tutorial</p>
            <p className='text-[#c1c1c1]'>How to - blog</p>
            <p className='text-[#c1c1c1]'>Youtube Playlist</p>
          </div>
        </div>
        <hr className='h-[0.5px] pt-[8px] pb-[8px]'/>
        <div className='flex flex-row justify-between'>
          <p className='text-[#c1c1c1]'>Shop.co © 2000-2026, All Rights Reserved</p>
          <img src={payment} />
        </div>


      </div>

    </>
  )
}

export default App