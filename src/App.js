
import './App.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route,Router, Routes } from 'react-router-dom';
function App() {
  return (
   <>
   <Navbar/>
   {/* <Routes>
    <Route path='/'element ={<Home/>}/>

   </Routes> */}
   <Home/>
   
   <Footer/>
   
   
   </>
  );
}

export default App;
