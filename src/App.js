import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ContextoProvider } from './Components/NavbarHeader/Context/MiContexto';
import { NavbarHeader } from './Components/NavbarHeader/NavbarHeader';
import GlobalStyle from './GlobalStyles/GlobalStyles';
import { Pokeapi } from './pages/Pokeapi/Pokeapi';
import { ToDo } from './pages/toDo/toDo';


function App() {
  return (
    <>
    <GlobalStyle/>
    <ContextoProvider>
    <BrowserRouter>
    <NavbarHeader/>
        <Routes>
          <Route path='/home' element={<ToDo/>}/>
          <Route path='/pokeapi' element={<Pokeapi />}/>
        </Routes>
    </BrowserRouter>
    </ContextoProvider>
    </>
  )
   
  ;
}

export default App;
