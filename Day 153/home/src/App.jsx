import { useRef } from 'react'

function App() {
  const buttonRef = useRef(null)
  const inputRef = useRef(null)
  const textRef = useRef(null)

  const increaseSize = () => {
    const currentSize = Number(buttonRef.current.style.fontSize.replace('px', '')) || 16
    buttonRef.current.style.fontSize = `${currentSize + 5}px`
  }

  const decreaseSize = () => {
    const currentSize = Number(buttonRef.current.style.fontSize.replace('px', '')) || 16
    buttonRef.current.style.fontSize = `${currentSize - 5}px`
  }

  const changeInputColor = (color) => {
    inputRef.current.style.color = color
  }

  const changeParagraphText = () => {
    textRef.current.textContent = 'Text changed!'
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <div>
          <button ref={buttonRef} style={{ fontSize: '16px' }}>
            Main Button
          </button>
          <button onClick={increaseSize} style={{ marginLeft: '10px' }}>
            Increase
          </button>
          <button onClick={decreaseSize} style={{ marginLeft: '10px' }}>
            Decrease
          </button>
        </div>

        <div>
          <input ref={inputRef} defaultValue="Sample text" style={{ color: 'black' }} />
          <button onClick={() => changeInputColor('red')} style={{ marginLeft: '10px' }}>
            Red
          </button>
          <button onClick={() => changeInputColor('blue')} style={{ marginLeft: '10px' }}>
            Blue
          </button>
          <button onClick={() => changeInputColor('black')} style={{ marginLeft: '10px' }}>
            Black
          </button>
        </div>

        <div>
          <p ref={textRef}>Hello World</p>
          <button onClick={changeParagraphText}>Change text</button>
        </div>
      </div>
    </>
  )
}

export default App
