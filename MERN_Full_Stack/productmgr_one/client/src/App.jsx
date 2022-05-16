import './App.css';
import Main from './views/Main';
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Detail from './views/Detail';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      {/* <Link to ="/product">Home</Link>
      <Link to ="/product/:id">Details</Link> */}
    <Routes>
      <Route path="/product" element={<Main/>}/>
      <Route path="/product/:id" element={<Detail/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
