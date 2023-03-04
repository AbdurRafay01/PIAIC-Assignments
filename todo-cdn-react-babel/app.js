'use strict'

// import React from 'react';
// import ReactDOM from 'react-dom';

console.log('hello');



const App = () => {
  const { useState } = React;
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    let taskName = e.target.task.value;
    setTasks([...tasks, taskName])
    // setTasks()
    e.preventDefault();
  };

  return (
    <>
      <h1>Todo App</h1>
      <ul>
        {tasks.map((obj, i) => {
          return (
            <li key={i}>{obj}</li>
          )
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);