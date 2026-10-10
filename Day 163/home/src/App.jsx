import { useState } from 'react'
import light from './assets/light.png'
import search from './assets/search.png'
import pfp from './assets/pfp.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[1400px]'>
        <div className='flex flex-row justify-evenly items-center'>
          <h1 className='text-[30px]'>devFinder</h1>
          <div className='flex flex-row gap-[10px]'>
            <p>LIGHT</p>
            <img src={light} className='w-[20px]' />
          </div>

        </div>
        <div className='bg-[#1F2A48] rounded-[7px] w-[610px] h-[70px] flex flex-row relative left-[400px] items-center justify-between'>
          <div className='flex flex-row gap-[10px] items-center'>
            <img src={search} />
            <input type="text" placeholder='Search GitHub username...' className='border-none outline-none' />
          </div>
          <div className='p-[10px]'>
            <button className='bg-[#0079FE] w-[100px] h-[50px] rounded-[10px] cursor-pointer'>Search</button>
          </div>
        </div>
        <div className='bg-[#1F2A48] w-[610px] h-[400px] relative left-[400px] rounded-[10px] top-[20px]'>
          <img src={pfp} className='w-[100px] rounded-full relative left-[50px] top-[40px]' />
          <div className='flex flex-row relative left-[200px] top-[-40px]'>
            <div className='flex flex-col'>
              <h1>The Octocat</h1>
              <p className='text-[#0E52A3]'>@octocat</p>
              <p className='text-[#9BA0AC]'>This profile has no bio</p>
            </div>
            <p className='text-[#9BA0AC]'>joined 25 Jan 2011</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
