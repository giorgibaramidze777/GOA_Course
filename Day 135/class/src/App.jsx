import { useState } from 'react';
import illustrationHero from './assets/illustration-hero.svg';
import musicIcon from './assets/icon-music.svg';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#e0e8ff] flex items-center justify-center p-6 antialiased">
      
      <div className="bg-white w-full max-w-[450px] rounded-2xl shadow-2xl overflow-hidden flex flex-col tracking-wide">
        
        <img 
          src={illustrationHero} 
          alt="Illustration Hero" 
          className="w-full object-cover"
        />

        <div className="p-6 sm:p-10 text-center flex flex-col gap-6">
          
          <div className="flex flex-col gap-4">
            <h1 className="text-[28px] font-black text-[#1f2f56]">
              Order Summary
            </h1>
            <p className="text-[#7280a7] text-[15px] leading-relaxed px-2 font-medium">
              You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </p>
          </div>


          <div className="flex items-center justify-between bg-[#f5f7ff] p-4 sm:p-5 rounded-xl">
            <div className="flex items-center gap-4">
              <img src={musicIcon} alt="Music Icon" className="w-12 h-12" />
              <div className="text-left">
                <h2 className="text-[#1f2f56] font-black text-[15px]">
                  Annual Plan
                </h2>
                <p className="text-[#7280a7] text-[15px] font-medium">
                  $59.99/year
                </p>
              </div>
            </div>
            <a 
              href="#" 
              className="text-[#3829e0] hover:text-[#766cf1] text-sm font-bold underline hover:no-underline transition-colors duration-200"
            >
              Change
            </a>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <button 
              className="w-full bg-[#3829e0] hover:bg-[#766cf1] text-white font-black py-4 rounded-xl shadow-lg shadow-[#3829e0]/20 transition-all duration-200 cursor-pointer"
            >
              Proceed to Payment
            </button>
            <button 
              className="w-full text-[#7280a7] hover:text-[#1f2f56] font-black py-2 text-sm transition-colors duration-200 cursor-pointer"
            >
              Cancel Order
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;