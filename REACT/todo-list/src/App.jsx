// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Display from './components/Display';
import { useState } from 'react';

const App = () => {
  //* SET STATE overall todo list
  const [todos, setTodos] = useState([])






  //* handler function addtask
  const addTask = (newTask) => {
    setTodos([...todos, newTask]);

  };





  // *Handle Completion of task check box
  const completeTasks = (idx) => {
    const updatedTodos = todos.map((todo, i) =>{
      if(idx === i){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    } );
    setTodos(updatedTodos);
  }




  
  // * DELETE FUNCTION
  const deleteTask = (indexToDelete) => {
    const alltodos = todos.filter((todo, index) => indexToDelete !== index)
    setTodos(alltodos)
  }



  return (
    <div className="App">
      <Todo addTask={addTask} />
      <Display deleteTask={deleteTask} completeTasks={completeTasks} todos={todos} />
    </div>
  );
}

export default App;
