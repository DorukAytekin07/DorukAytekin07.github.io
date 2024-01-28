import Home from "./Components/Pages/Home";
import { AdminPanel } from "./Components/Pages/AdminPanel.jsx";
import AdminPage from "./Components/Admin/AdminPage.jsx";
import Documents from "./Components/Pages/DocumentsPage";
import SQL from "./Components/Pages/SQL";
import Mathematic from "./Components/Pages/Math";
import Algebra from "./Components/Documents/Math/Algebra";
import PreCalculus from "./Components/Documents/Math/PreCalculus";
import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom';
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
import "./Components/Admin/CSS/LoginPage.css"
function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
        </Routes>

        <Routes>
          <Route path="/adminpanel" exact element={<AdminPanel/>}/>
        </Routes>

        <Routes>
          <Route path="/adminpage" exact element={<AdminPage/>}/>
        </Routes>

        <Routes>
          <Route path="/documents" exact element={<Documents/>} />
        </Routes>
          
        <Routes>
          <Route path="/sql" exact element={<SQL/>} />
        </Routes>

        <Routes>
          <Route path="/math" exact element={<Mathematic/>} />
        </Routes>
          
        <Routes>
          <Route path="/algebra" exact element={<Algebra/>} />
        </Routes>

        <Routes>
          <Route path="/precalculus" exact element={<PreCalculus/>} />        
        </Routes>
    </BrowserRouter>
  );  
}
export default App
