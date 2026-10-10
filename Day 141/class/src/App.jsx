import { useState } from 'react'
import iconList from './assets/icon-list.svg'
import usefulImg from './assets/illustration-sign-up-desktop.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[500px] w-[700px] flex justify-center items-center bg-white rounded-xl'>
         <div className='flex flex-col gap-[20px] p-[20px]'>
          <h1 className='font-black text-[32px]'>Stay updated!</h1>
          <p>Join 60.000+ product managers receving monthly <br />updates on:</p>
          <div className='flex flex-row gap-[5px]'>
             <div className='flex flex-col gap-[5px]'>
               <img src={iconList} alt="error" className='w-[20px] h-[20px]'/>
               <img src={iconList} alt="error" className='w-[20px] h-[20px]'/>
               <img src={iconList} alt="error" className='w-[20px] h-[20px]'/>
             </div>
             <div className='flex flex-col'>
              <p>Product discovery and building what matters</p>
              <p>measuring to ensure uptades are a success</p>
              <p>and much more!</p>
             </div>
          </div>
          <h5 className='font-black'>Email adress</h5>
          <input type="email" placeholder='email@company.com' className='border p-[10px]'/>
          <button className='bg-[#232742] text-white p-[10px] cursor-pointer'>Subscribe to monthly newsletter</button>
        </div>
          <img src={usefulImg} alt="Error" className='w-[400px] h-[450px]'/>
      </div>
    </>
  )
}

export default App
