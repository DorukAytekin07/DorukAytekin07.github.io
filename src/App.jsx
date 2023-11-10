import Footer from "./Components/HomePage/Footer"
import Home from "./Components/Home";
import SQL from "./Components/SQL";
import Documents from "./Components/DocumentsPage";
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import "./App.css"
import './CSS/Key.css'
function App() {
  return(
    <HashRouter>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="https://dorukaytekin07.github.io/sql" exact element={<SQL/>} />
          <Route path="https://dorukaytekin07.github.io/documents" exact element={<Documents/>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </HashRouter>
    

  );
  
  
}

export default App
