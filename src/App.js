import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavbarHeader } from './Components/NavbarHeader/NavbarHeader';
import GlobalStyle from './GlobalStyles/GlobalStyles';
import { Pokeapi } from './pages/Pokeapi/Pokeapi';
import { ToDo } from './pages/toDo/toDo';


function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <NavbarHeader/>
        <Routes>
          <Route path='/todo' element={<ToDo/>}/>
          <Route path='/pokeapi' element={<Pokeapi />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
   
  ;
}

export default App;
