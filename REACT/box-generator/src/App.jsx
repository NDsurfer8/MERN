// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';

const App = () => {
// initial state
// [state,function to update state]
// setColors is a function
  const [colors, setColor] = useState([]);

  // CREATE A FUNCTION THAT HANDLES ADDING COLOR
  const addColor = (newColor) => {
  // add newColor to the LIST of COLORS
  setColor([...colors, newColor]);
  }

  return (
    <div className="App">
      {/* passing down function addColor to FORM */}
      <Form addColor = {addColor}/>
      <Display allColors = {colors}/>
    </div>
  );
}

export default App;
