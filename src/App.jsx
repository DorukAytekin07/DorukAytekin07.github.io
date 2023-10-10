import SocialAccounts from "./Components/SocialAccounts"
import Welcome from "./Components/Welcome"
import Projects from "./Components/Projects"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Certificates from "./Components/Certificates"
import "./App.css"
function App() {
  //projelerin hreflerini ekle
  return(
    <div>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Projects></Projects>
      <SocialAccounts></SocialAccounts>
      <Certificates></Certificates>
      <Footer></Footer>
    </div>
  );
  
  
}

export default App
