import { useState } from 'react'
import sidebar from './assets/bg-sidebar-desktop.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[500px] w-[800px] flex justify-center items-center bg-white rounded-xl gap-[20px]'>
         <div className='p-[50px]'>
           <img src={sidebar} alt="Error" className='h-[470px]' />
         </div>
         <div>
           <h1 className='text-[32px]'>Personal info</h1>
           <p>Please provide your name, email address, and phone number.</p>
           <div>
             <label htmlFor="name" className='font-black'>Name</label><br />
             <input type="email" name='name' placeholder='e.g. Stephen King' className='border p-[10px] w-[400px]'/>
           </div>
           <div>
             <label htmlFor="name" className='font-black'>Email address</label><br />
             <input type="text" name='name' placeholder='e.g. stephenking@lorem.com' className='border p-[10px] w-[400px]'/>
           </div>
           <div>
             <label htmlFor="name" className='font-black'>Phone Number</label><br />
             <input type="tel" name='name' placeholder='e.g +1 234 567 890' className='border p-[10px] w-[400px]'/>
           </div>
           <button className='p-[5px] bg-[#03295A] text-white'>Next Step</button>
         </div>
      </div>
    </>
  )
}

export default App
