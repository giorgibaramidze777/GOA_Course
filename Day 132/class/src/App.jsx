import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div id='div1'>
       <div id='div2'>
          <img src="/image.png" alt="QR code" />
       </div>
       <div id='div3'>
         <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
       </div>
     </div>
    </>
  )
}

export default App
