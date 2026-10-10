import { useState } from 'react';
import imgh from './assets/image-header-desktop.jpg';
import imghMobile from './assets/image-header-mobile.jpg';

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center bg-[#090b1a] p-[20px]">
        
        <div className="w-full max-w-[1110px] md:h-[450px] flex flex-col-reverse md:flex-row bg-[#1c1938] rounded-[10px] overflow-hidden">
          
          <div className="w-[100%] md:w-[50%] p-[40px_24px] md:p-[60px_40px_60px_60px] flex flex-col justify-between text-center md:text-left">
            <div>
              <h1 className="text-[28px] md:text-[45px] font-[700] text-[#ffffff] leading-[1.2] md:leading-[1.1]">
                Get <span className="text-[#9353c3]">insights</span> that help your business grow.
              </h1>

              <p className="text-[#ffffff99] p-[16px_0_32px_0] md:p-[20px_0_40px_0] text-[15px] leading-[1.6]">
                Discover the benefits of data analytics and make<br className="hidden md:block" /> better decisions regarding revenue, customer experience, and overall efficiency.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-[24px] md:gap-0 md:pr-[40px]">
              <div>
                <h1 className="text-[#ffffff] text-[24px] font-[700]">10k+</h1>
                <p className="text-[#ffffff99] text-[12px]">COMPANIES</p>
              </div>
              
              <div>
                <h1 className="text-[#ffffff] text-[24px] font-[700]">314</h1>
                <p className="text-[#ffffff99] text-[12px]">TEMPLATES</p>
              </div>

              <div>
                <h1 className="text-[#ffffff] text-[24px] font-[700]">12M+</h1>
                <p className="text-[#ffffff99] text-[12px]">QUERIES</p>
              </div>
            </div>
          </div>

          <div className="relative w-[100%] md:w-[50%] h-[240px] md:h-[100%] bg-[#9353c3]">
            
            <img 
              src={imghMobile} 
              className="w-full h-full object-cover opacity-[0.75] mix-blend-multiply md:hidden" 
              alt="Header Mobile" 
            />

            <img 
              src={imgh} 
              className="hidden md:block w-full h-full opacity-[0.75] mix-blend-multiply" alt="Header Desktop" />

          </div>

        </div>
      </div>
    </>
  )
}

export default App;