import { useRef } from 'react';

function InputColorChanger() {
  const inputRef = useRef(null);

  const changeColor = (color) => {
    if (inputRef.current) {
      inputRef.current.style.color = color;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <input ref={inputRef} type="text" placeholder="type smth" style={{ fontSize: '16px', padding: '8px', marginRight: '10px' }}/>
      
      <div style={{ marginTop: '15px' }}>
        <button onClick={() => changeColor('red')} style={{ marginRight: '5px', color: 'red' }}>Red</button>
        <button onClick={() => changeColor('blue')} style={{ marginRight: '5px', color: 'blue' }}> Blue</button>
        <button onClick={() => changeColor('black')} style={{ color: 'black' }}>Black</button>
      </div>
    </div>
  );
}

export default Idk5;