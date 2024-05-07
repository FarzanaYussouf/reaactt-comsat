
import './App.css';

import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from"./Pages/About";
import Course from './Pages/Course';
import Blog from "./Pages/Blog"
import {Route,Router,Routes } from 'react-router-dom';
function App() {
  return (
   <>
   
   <Routes>
    <Route path='/'element ={<Home/>}/>
   
    <Route path='/About'element ={<About/>}/>
    <Route path='/Course'element ={<Course/>}/>
    <Route path='/Blog'element ={<Blog/>}/>

   </Routes>
   
   
   <Footer/>
   
   
   </>
  );
}

export default App;
