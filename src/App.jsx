import Home from "./Components/Pages/Home";
import SQL from "./Components/Pages/SQL";
import Documents from "./Components/Pages/DocumentsPage";
import { Routes, Route, HashRouter } from 'react-router-dom';
import Helmet from 'react-helmet'

import "./App.css"
import './CSS/Certificates.css'
import './CSS/Projects.css'
import './CSS/Navbar.css'
import './CSS/Welcome.css'
import './CSS/Social.css'
import './CSS/Footer.css'
import './CSS/CodeBlocks.css'


function App() {
  return(
    <HashRouter>
        <Helmet>
          <title>Doruk Aytekin Personal Website</title>
          <meta name="keywords" content="Doruk Aytekin,doruk aytekin,Doruk,doruk" />
          <meta name="description" content="Hello to my personal website my name is Doruk Aytekin in this website i release my projects and publish my certificates"/>
          <link rel="canonical" href="https://dorukaytekin07.github.io"/>
        </Helmet>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/sql" exact element={<SQL/>} />
          <Route path="/documents" exact element={<Documents/>} />
        </Routes>
    </HashRouter>
  );  
}

export default App
