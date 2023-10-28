import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css"
function App() {
  return(
    // make website favoruable for multiple page website 
    //so you can make sql documentation page and other documentation pages
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home/>} />
      </Routes>
      <Footer></Footer>
    </Router>

  );
  
  
}

export default App
