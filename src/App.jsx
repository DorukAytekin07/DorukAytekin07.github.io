import Home from "./Components/Pages/Home";
import { AdminPanel } from "./Components/Pages/AdminPanel";
import AdminPage from "./Components/Admin/AdminPage";
import CertificatesArrange from "./Components/Admin/ArrangePages/CertificatesArrange";
import ProjectsArrange from "./Components/Admin/ArrangePages/ProjectsArrange";
import MathTopicsArrange from "./Components/Admin/ArrangePages/MathTopicsArrange";
import DocumentsArrange from "./Components/Admin/ArrangePages/DocumentsArrange";
import Documents from "./Components/Pages/DocumentsPage";
import SQL from "./Components/Pages/SQL";
import Mathematic from "./Components/Pages/Math";
import Algebra from "./Components/Documents/Math/Algebra";
import PreCalculus from "./Components/Documents/Math/PreCalculus";
import { Routes, Route, HashRouter} from 'react-router-dom';
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
import "./Components/Admin/CSS/AdminPage.css"
function App() {
  return(
    <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/adminpanel" exact element={<AdminPanel/>}/>
          <Route path="/adminpage" exact element={<AdminPage/>}/>
          <Route path="/certificatesarrange" exact element={<CertificatesArrange/>}/>
          <Route path="/projectsarrange" exact element={<ProjectsArrange/>}/>
          <Route path="/mathtopicsarrange" exact element={<MathTopicsArrange/>}/>
          <Route path="/documentsarrange" exact element={<DocumentsArrange/>}/>
          <Route path="/documents" exact element={<Documents/>} />
          <Route path="/sql" exact element={<SQL/>} />
          <Route path="/math" exact element={<Mathematic/>} />
          <Route path="/algebra" exact element={<Algebra/>} />
          <Route path="/precalculus" exact element={<PreCalculus/>} />        
        </Routes>
    </HashRouter>
  );  
}
export default App
