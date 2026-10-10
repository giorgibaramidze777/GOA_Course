import { useState } from 'react'
import logo from './assets/logo.svg'
import bed from './assets/icon-bed.svg'
import house from './assets/icon-house.svg'
import pin from './assets/icon-pin.svg'
import breakfastOUT from './assets/icon-breakfast-outline.svg'
import mail from './assets/icon-mail.svg'
import idk from './assets/image.png'
import img from './assets/imagecopy.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#FBF6F0] w-[100%] h-[100vh] gap-[15px]'>
        <div>
        <div className='w-[250px] p-[20px]'>
          <img src={logo} alt="Error" />
          <hr />
          <div className='flex flex-col gap-[5px]'>
            <div className='flex flex-row'>
              <img src={bed} alt="Error" />
              <p>Your stay</p>
            </div>
            <div className='flex flex-row gap-[5px]'>
              <img src={house} alt="Error" />
              <p>The house</p>
            </div>
            <div className='flex flex-row gap-[5px]'>
              <img src={pin} alt="Error" />
              <p>Around town</p>
            </div>
            <div className='flex flex-row gap-[5px]'>
              <img src={breakfastOUT} alt="Error" />
              <p>Breakfast</p>
            </div>
            <div className='flex flex-row gap-[5px]'>
              <img src={mail} alt="Error" />
              <p>Messages</p>
            </div>
            <div className='relative right-[10px] top-[62vh]'>
              <img src={idk} alt="Error" />
              <p className='text-[12px] text-[#BFBAB3]'>EST. 1987</p>
              <p className='text-[12px] text-[#BFBAB3]'>MAISON SOLEIL 12 RUE DES</p>
              <p className='text-[12px] text-[#BFBAB3]'>OLIVIERS CASSIS</p>
              <p className='text-[12px] text-[#BFBAB3]'>© 2026 GIORQA BARAMBINYO</p>
            </div>
        </div>

            <div className='relative left-[280px] top-[-360px]'>
              <p className='text-[12px] text-[#BFBAB3]'>BOOKING · CONFIRMED</p>
              <h1 className='text-[26px]'>Bienvenue, <span className='italic text-[#A04B31]'>Lucia.</span></h1>
              <div>
                <img src={img} alt="Error" className='scale-[500px]'/>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App