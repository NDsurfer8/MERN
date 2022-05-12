// import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NumOrWord from './views/NumOrWord';
import WordColor from './views/WordColor';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="home" element={<Home/>} />
      <Route path=":numorword" element={<NumOrWord/>} />
      <Route path=":word/:color/:colorbg" element={<WordColor/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
