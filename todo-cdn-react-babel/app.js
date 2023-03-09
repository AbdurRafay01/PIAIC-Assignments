"use strict";

// import React from 'react';
// import ReactDOM from 'react-dom';

console.log("hello");

const App = () => {
  const { useState } = React;
  const [tasks, setTasks] = useState([]);


  const handleSubmit = (e) => {
    console.log(e.target);
    let taskName = e.target.task.value;
    setTasks([...tasks, taskName]);
    // setTasks()
    e.preventDefault();
  }

  const handleDelete = (e) => {
    console.log(e.target.value);
    let index = e.target.value;
    let newTasks = _.clone(tasks);
    console.log('newTasks', typeof(newTasks));
    console.log('tasks', typeof(tasks));
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <>
      <h1>Todo App</h1>
      <ul>
        {tasks.map((obj, i) => {
          return (
            <li key={i}>
              {obj}
              <button name="deleteButton" value={i} onClick={handleDelete}>Delete</button>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
