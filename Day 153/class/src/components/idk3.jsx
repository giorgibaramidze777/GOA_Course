import { useState } from 'react';

export default function Task3() {
  const [value, setValue] = useState('');

  const clearInput = () => {
    setValue('');
  };

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="type smth"/>
      <button onClick={clearInput} style={{ marginLeft: '10px' }}>Clear</button>
    </div>
  );
}