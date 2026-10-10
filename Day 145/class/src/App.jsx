import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('#A0FC69');

  const flipColor = () => {
    const hexCharacters = 'abcdef0123456789';
    let newHex = '#';
    for (let i = 0; i < 6; i++) {
      newHex += hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
    }
    setColor(newHex);
  };

  return (
    <>
      <div className="min-h-screen w-full flex flex-col font-sans" style={{backgroundColor: color, transition: 'background-color 0.3s ease-in-out'}}>
      <header className="w-full h-[75px] bg-white shadow-[0_3px_7px_rgba(0,0,0,0.15)] flex justify-evenly items-center font-extrabold text-[21px] z-10">
        <p className="text-[#0dc8c9]">Color Flipper</p>
        <h2 className="text-gray-800">Hex</h2>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center gap-[50px] px-4">
        <h2 className="bg-[#333333] text-white py-2.5 px-5 rounded text-xl md:text-2xl font-bold shadow-lg tracking-wide select-all text-center"> Background Color:{' '} <span style={{color: color}}> {color} </span></h2>

        <button onClick={flipColor} className="bg-transparent border-2 border-black font-semibold text-black py-1.5 px-4 rounded-[4.5px] cursor-pointer hover:bg-black/10 transform scale-[1.3] tracking-wider">CLICK ME</button>
      </main>
    </div>
    </>
  )
}

export default App
