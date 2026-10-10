import { useState } from 'react';

export default function Task1() {
  const [text, setText] = useState('Hello World');

  const changeText = () => {
    setText('Text changed');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={changeText}>change text</button>
    </div>
  );
}