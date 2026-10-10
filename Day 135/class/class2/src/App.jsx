import { useState } from 'react';
import img from './assets/image-equilibrium.jpg';
import iconEthereum from './assets/icon-ethereum.svg';
import imgAvatar from './assets/image-avatar.png';
function App() {
  return (
    <div className="w-[400px] h-[600px] bg-[#15273F] flex items-center justify-center self-center rounded-[5px] flex-col gap-[10px]">
      <img src={img} alt="Equilibrium" className="w-[370px] h-[370px] object-cover rounded-[5px]"/>
      <h1 className="text-white text-[24px] font-bold">Equilibrium #3429</h1>
      <p className="text-[#8BACD9] text-[18px] font-normal">Our Equilibrium collection promotes<br /> balance and calm.</p>
      <div className="flex items-center justify-between w-full px-[20px]">
        <div className="flex flex-row gap-[5px]">
          <img src={iconEthereum} alt="Ethereum Icon" className="w-[11px] h-[18px]"/>
          <p className="text-[#00FFF8] text-[18px] font-bold">0.041 ETH</p>
        </div>
        
        <p className="text-[#8BACD9] text-[18px] font-normal">3 days left</p>
      </div>
      <div className="flex items-center gap-[10px]">
        <img src={imgAvatar} alt="Avatar" className="w-[30px] h-[30px] object-cover rounded-full border-[1px] border-white"/>
        <p className="text-[#8BACD9] text-[18px] font-normal">Creation of <span className="text-white font-bold">Jules Wyvern</span></p>
      </div>
    </div>
  )
}

export default App;