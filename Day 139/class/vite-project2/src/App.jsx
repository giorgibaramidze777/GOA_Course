import { useState } from 'react'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f2f2f2] px-6 py-12 font-sans">
      <div className="flex max-w-[920px] flex-col overflow-hidden rounded-[8px] lg:flex-row">
        
        <div className="bg-[#e28625] p-12 flex flex-col justify-between text-white/75">
          <div>
            <div className="mb-9 flex h-10 items-center">
              <img src="/sedan-icon.svg" alt="Sedan Icon" />
            </div>
            <h2 className="mb-7 text-4xl font-bold tracking-wide text-white uppercase">
              Sedans
            </h2>
            <p className="mb-14 text-[15px] leading-relaxed font-light max-w-[220px]">
              Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
            </p>
          </div>
          <button className="w-fit rounded-full bg-[#f2f2f2] px-8 py-3 text-[15px] font-medium text-[#e28625] border-2 border-transparent hover:bg-transparent hover:text-[#f2f2f2] hover:border-[#f2f2f2] transition-colors duration-200">
            Learn More
          </button>
        </div>

        <div className="bg-[#006971] p-12 flex flex-col justify-between text-white/75">
          <div>
            <div className="mb-9 flex h-10 items-center">
              <img src="/suv-icon.svg" alt="SUV Icon" />
            </div>
            <h2 className="mb-7 text-4xl font-bold tracking-wide text-white uppercase">
              SUVs
            </h2>
            <p className="mb-14 text-[15px] leading-relaxed font-light max-w-[220px]">
              Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
            </p>
          </div>
          <button className="w-fit rounded-full bg-[#f2f2f2] px-8 py-3 text-[15px] font-medium text-[#006971] border-2 border-transparent hover:bg-transparent hover:text-[#f2f2f2] hover:border-[#f2f2f2] transition-colors duration-200">
            Learn More
          </button>
        </div>

        <div className="bg-[#004140] p-12 flex flex-col justify-between text-white/75">
          <div>
            <div className="mb-9 flex h-10 items-center">
              <img src="/luxury-icon.svg" alt="Luxury Icon" />
            </div>
            <h2 className="mb-7 text-4xl font-bold tracking-wide text-white uppercase">
              Luxury
            </h2>
            <p className="mb-14 text-[15px] leading-relaxed font-light max-w-[220px]">
              Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
            </p>
          </div>
          <button className="w-fit rounded-full bg-[#f2f2f2] px-8 py-3 text-[15px] font-medium text-[#004140] border-2 border-transparent hover:bg-transparent hover:text-[#f2f2f2] hover:border-[#f2f2f2] transition-colors duration-200">
            Learn More
          </button>
        </div>

      </div>
    </div>
  )
}

export default App