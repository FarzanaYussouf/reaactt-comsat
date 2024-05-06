
import './App.css';

import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from"./Pages/About";
import {Route,Router,Routes } from 'react-router-dom';
function App() {
  return (
   <>
   
   <Routes>
    <Route path='/'element ={<Home/>}/>
   
    <Route path='/About'element ={<About/>}/>

   </Routes>
   
   
   <Footer/>
   
   
   </>
  );
}

export default App;
