import './App.css';
import { useSelector } from 'react-redux';

import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

/**
 * Todo App
 * 
 * App.js - Hämtar redux store alla todos och loopa ut dessa
 * TodoItem.js - Visar en todo och tar en todo som props
 * AddTodo.js - Lägger till en todo från inputfält och sparar i vår redux store
 * 
 */

function App() {
  const todos = useSelector((state) => { return state.todos });

  const todoItems = todos.map((todo) => {
    return <TodoItem task={ todo.task } done={ todo.done }
              key={ todo.id } id={ todo.id } />
  })

  return (
    <div className="App">
      <section>
        <h2>Todo App</h2>
        <ul>
          { todoItems }
        </ul>
      </section>
      <AddTodo />
    </div>
  );
}

export default App;
