import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-100">
      <div id="div1" className="w-[300px] h-[300px] flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-xl">
        <span className="text-slate-500 text-xs uppercase tracking-widest mb-1">Current Count</span>
        <span className="text-5xl font-semibold text-slate-200">{count}</span>
      </div>
      <div className="mt-8 flex gap-3">
        <button onClick={() => setCount(count + 1)} className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-sm rounded-lg border border-slate-700">Increase</button>
        <button onClick={() => setCount(count - 1)} className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-sm rounded-lg border border-slate-700">Decrease</button>
        <button onClick={() => setCount(count * 2)} className="px-5 py-2.5 bg-slate-100 hover:bg-white text-slate-950 text-sm font-semibold rounded-lg">Multiply by 2</button>
      </div>
    </div>
  )
}

export default App