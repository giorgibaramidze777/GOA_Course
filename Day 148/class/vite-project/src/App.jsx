import { useState } from 'react'
import clear from './assets/clear 1.png'
import location from './assets/current location icon.png'
import humidity from './assets/Humidity.png'
import pressure from './assets/pressure-white 1.png'
import search from './assets/search 1.png'
import uv from './assets/uv-white 1.png'
import wind from './assets/wind 1.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col justify-center gap-[150px]'>
      <div className='flex flex-row justify-between relative '>
        <div>
          <div className='bg-[#D9D9D9] w-[100px] h-[50px] rounded-full'>
            <div className='bg-[#111111] w-[30px] h-[30px] rounded-full translate-x-[60px] translate-y-[10px]'></div>
            </div>
            <p>dark mode</p>
        </div>
        <div className='bg-[#444444] w-[811px] h-[62px] translate-x-[30px] rounded-[40px] flex flex-row'><img src={search} className='w-[35px] h-[38px] translate-x-[15px] translate-y-[10px]'/><input type="text" placeholder='search for your prefered city...' className='border-hidden w-[627px] h-[28px] translate-x-[30px] translate-y-[13px] outline-none'/></div> 
          <div className='bg-[#4CBB17] rounded-full translate-x-[50px] w-[270px] h-[62px] flex flex-row cursor-pointer'><img src={location} className='w-[45px] h-[48px] translate-x-[10px] translate-y-[9px]'/><p className='translate-x-[30px] translate-y-[17px]'>Current Location</p></div>
        
      </div>
      <div className='flex justify-center items-center'>
        <div className='bg-[#444444] w-[1177px] h-[613px] justify-self-center self-center'>
        <div>
          <h1>75°F</h1>
          <p>feels like:   22°C</p>
        </div>
        <div className=''>
          <img src={clear} />
          <p>sunny</p>
        </div>
        <div>
          <div>
            <img src={humidity} />
            <h5>41%</h5>
            <p>humidity</p>
          </div>
          
          <h5>2km/h</h5>
          <p>wind speed</p>
          <h5>997hPa</h5>
          <p>pressure</p>
          <h5>8</h5>
          <p>UV</p>
        </div>
        
      </div>
      </div>
      
    </div>
      
    </>
  )
}

export default App
