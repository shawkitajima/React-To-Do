import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  let [todos, setTodos] = useState([]);

  let [newTodo, setNewTodo] = useState({
  })


  return (
    <div className='whole'>
      <h1>A Simple React To Do Application</h1>
      <div className='submit'>
        <input onChange={e => setNewTodo({todo: e.target.value, status: 'Incomplete'})}></input>
        <button onClick={() => setTodos([...todos, newTodo])}>Add Todo</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
      {todos.map((todo, idx) => (
        <tr key={idx}>
          <td>{todo.todo}</td>
          <td>{todo.status}</td>
          {todo.status === 'Incomplete' ? 
          (<td><button onClick={idx, evt => {
              let todosCopy = [...todos];
              let obj = {...todosCopy[idx]}
              obj.status = 'Complete';
              todosCopy.splice(idx, 1, obj);
              setTodos(todosCopy)
            }}>Complete</button></td>) 
            :
            (<td><button onClick={idx, evt => {
              let todosCopy = [...todos];
              todosCopy.splice(idx, 1);
              setTodos(todosCopy)
            }}>Delete</button></td>)
            }
        </tr>
      ))}
        </tbody>
      </table>
    </div>
    )    
}

export default App;
