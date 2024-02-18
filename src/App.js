
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Signup from './pages/Signup';


function App() {
  return (
   <>
   <BrowserRouter>
   
    <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/signup' element={<Signup/>}/>
    </Routes>
   
   </BrowserRouter>
   </>
  );
}

export default App;
