import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import './styles/main.css';


const App = () => {
  
  const [count, setCount] = useState(0);``
  
  return (
    <>
      <h1>Counter</h1>
      <p>{ count }</p>
      <button onClick={() => {setCount(count + 1)}}>Increment</button>
      <button onClick={() => {setCount(count - 1)}}>Decrement</button>
      <button onClick={() => {setCount(0)}}>Reset</button>
      <p id='creditLine'>Styling done by chatgpt</p>
    </>

)
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

