import React from "react";
import SocialAccounts from "../HomePage/SocialAccounts.jsx"
import Welcome from "../HomePage/Welcome.jsx"
import Projects from "../HomePage/Projects.jsx"
import Certificates from "../HomePage/Certificates.jsx"
import Navbar from "../HomePage/Navbar.jsx";
import Documents from "../HomePage/Documents.jsx";
export default function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <Welcome></Welcome>
            <Projects></Projects>
            <Documents></Documents>
            <SocialAccounts></SocialAccounts>
            <Certificates></Certificates>
        </div>
    );
}