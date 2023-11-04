import Footer from "./Components/HomePage/Footer"
import Home from "./Components/Home";
import SQL from "./Components/SQL";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css"
function App() {
  return(
    // make website favoruable for multiple page website 
    //so you can make sql documentation page and other documentation pages
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/sql" exact element={<SQL/>} />
      </Routes>
      <Footer></Footer>
    </Router>

  );
  
  
}

export default App
