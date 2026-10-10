import './App.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] px-4">
      <div className="w-full max-w-sm bg-[#1E1E1E] rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] px-6 py-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <img src="/avatar-jessica.jpeg" alt="Jessica Randall" className="w-24 h-24 rounded-full border-4 border-[#373737]" />
          <div>
            <h1 className="text-white text-2xl font-bold">Jessica Randall</h1>
            <p className="text-sm text-[#8F8F8F] mt-1">London, United Kingdom</p>
          </div>
        </div>
        <p className="text-[#BBBBBB] text-sm mt-6 leading-6">"Front-end developer and avid reader."</p>
        <div className="mt-8 space-y-3">
          <button className="w-full bg-[#272727] text-white text-sm py-3 rounded-xl hover:bg-green-500 transition-colors duration-200 cursor-pointer">GitHub</button>
          <button className="w-full bg-[#272727] text-white text-sm py-3 rounded-xl hover:bg-green-500 transition-colors duration-200 cursor-pointer">Frontend Mentor</button>
          <button className="w-full bg-[#272727] text-white text-sm py-3 rounded-xl hover:bg-green-500 transition-colors duration-200 cursor-pointer">LinkedIn</button>
          <button className="w-full bg-[#272727] text-white text-sm py-3 rounded-xl hover:bg-green-500 transition-colors duration-200 cursor-pointer">Twitter</button>
          <button className="w-full bg-[#272727] text-white text-sm py-3 rounded-xl hover:bg-green-500 transition-colors duration-200 cursor-pointer">Instagram</button>
        </div>
      </div>
    </div>
  )
}

export default App
