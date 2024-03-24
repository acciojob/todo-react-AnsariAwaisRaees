
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [todos, setTodos] = useState([]);
  let [newTodo, setNewTodo] = useState('');

  function addTodo(){
    if(newTodo.trim() !== ''){
      setTodos(...todos, newTodo);
      setNewTodo('');
    }
  }

  function removeTodo(i){
    let updatedTodo = todos.filter((element, index) => {
      return i !== index;
    });
    setTodos(updatedTodo);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>To-Do List</h1>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          todos.map(function(element,index) {
            <li key={index}>
              <div>{element}</div>
              <button onClick={() => removeTodo(index)}></button>
            </li>
          });
        </ul>
    </div>
  )
}

export default App
