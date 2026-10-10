import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div id='div1' style={{ width: '300px', height: '300px', backgroundColor: color }}>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px'}}>
        <button onClick={() => setColor('yellow')}>Yellow</button>
        <button onClick={() => setColor('red')}>Red</button>
        <button onClick={() => setColor('green')}>Green</button>
        <button onClick={() => setColor('blue')}>Blue</button>
        <button onClick={() => setColor('orange')}>Orange</button>
        <button onClick={() => setColor('brown')}>Brown</button>
      </div>
    </>
  )
}

export default App