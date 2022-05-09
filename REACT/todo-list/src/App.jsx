// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Display from './components/Display';
import { useState } from 'react';

const App = () => {
//* SET STATE overall todo list
const [todos, setTodos] = useState([])


//* handler function
const addTask = (newTask) =>{
setTodos([...todos, newTask]);
};

// * DELETE FUNCTION
const deleteTask = (index) => {
const alltasks = todos.filter((_,i) => index !==i)
setTodos(alltasks)
}

// create a function that flips complete.

  return (
    <fieldset className="App">
      <Todo addTask={addTask}/>
      <Display deleteTask = {deleteTask} todos={todos}/>
    </fieldset>
  );
}

export default App;
