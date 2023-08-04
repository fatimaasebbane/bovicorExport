import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Acceuil from './pages/acceuil';
import Races from './pages/races';
import Galerie from './pages/galerie';
import Contact from './pages/contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './pages/error';
function App() {
  return (
    <div className="App ">
      <BrowserRouter>

        <Routes>
          <Route index element={<Acceuil />}></Route>
          <Route path='/acceuil' element={<Acceuil />}></Route>
          <Route path='/races' element={<Races />}></Route>
          <Route path='/galerie' element={<Galerie />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<Error />}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
