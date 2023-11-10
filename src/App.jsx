import Footer from "./Components/HomePage/Footer"
import Home from "./Components/Home";
import SQL from "./Components/SQL";
import Documents from "./Components/DocumentsPage";
import { Routes, Route, HashRouter } from 'react-router-dom';

import "./App.css"
import './CSS/Key.css'
function App() {
  return(
    <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/sql" exact element={<SQL/>} />
          <Route path="/documents" exact element={<Documents/>} />
        </Routes>
        <Footer></Footer>
    </HashRouter>
    

  );
  
  
}

export default App
