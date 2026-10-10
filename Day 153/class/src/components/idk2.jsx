import { useState } from 'react';

export default function Task2() {
  const [isVisible, setIsVisible] = useState(true);

  const hideDiv = () => {
    setIsVisible(false);
  };

  const showDiv = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <div
        style={{display: isVisible ? 'block' : 'none', width: '200px', height: '100px', backgroundColor: 'lightblue', marginBottom: '10px',}}>
        <p>ts is div</p>
      </div>
      <button onClick={hideDiv}>hide</button>
      <button onClick={showDiv} style={{ marginLeft: '10px' }}>show</button>
    </div>
  );
}