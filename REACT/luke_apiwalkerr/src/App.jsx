
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import People from './views/People';
import Planets from './views/Planets';

function App() {
  return (
    <BrowserRouter>
    {/* placed FormSearch outside of ROutes so it will alwasy display */}
      
      <Routes>
        <Route path='/' element={<SearchForm/>}>
          <Route path='people/:id' element={<People/>}/>
          <Route path='planets/:id' element={<Planets/>}/>
        </Route>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
