import Home from "./Components/Pages/Home";
import SQL from "./Components/Pages/SQL";
import Documents from "./Components/Pages/DocumentsPage";
import Mathematic from "./Components/Pages/Math";
import { Routes, Route, HashRouter } from 'react-router-dom';
import "./App.css"
import './CSS/Certificates.css'
import './CSS/Projects.css'
import './CSS/Navbar.css'
import './CSS/Welcome.css'
import './CSS/Social.css'
import './CSS/Footer.css'
import './CSS/CodeBlocks.css'
import './CSS/QuestionBlocks.css'
import './CSS/SQLCodes.css'
function App() {
  return(
    <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/sql" exact element={<SQL/>} />
          <Route path="/math" exact element={<Mathematic/>} />
          <Route path="/documents" exact element={<Documents/>} />
        </Routes>
    </HashRouter>
  );  
}
export default App
