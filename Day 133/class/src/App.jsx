import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200 p-6">
      <div className="w-80 bg-white p-4 rounded-2xl shadow-xl text-center">
        
        <div className="w-full aspect-square mb-6">
          <img src="/image.png" alt="QR code" className="w-full h-full rounded-xl object-cover" />
        </div>

        <div className="px-2 pb-4">
          <h1 className="text-slate-900 font-bold text-xl mb-3 tracking-tight">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>

      </div>
    </div>
  );
}