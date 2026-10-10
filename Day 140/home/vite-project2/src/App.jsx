import { useState } from 'react'
import Card from './components/car.jsx'
import sedan from './assets/icon-sedans.svg'
import luxury from './assets/icon-luxury.svg'
import suv from './assets/icon-suvs.svg'


function App() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 font-sans">
      <div className="flex max-w-[920px] flex-col overflow-hidden rounded-[8px] lg:flex-row">
        
        <div className="bg-[#e28625] p-12 flex flex-col justify-between text-white/75">
          <Card text="sedans" ptext="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip." img={sedan}/>
        </div>

        <div className="bg-[#006971] p-12 flex flex-col justify-between text-white/75">
          <Card text="SUVS" ptext="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." img={suv}/>
        </div>

        <div className="bg-[#004140] p-12 flex flex-col justify-between text-white/75">
          <Card text="luxury" ptext="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." img={luxury}/>
        </div>

      </div>
    </div>
  )
}

export default App