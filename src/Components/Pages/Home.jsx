import React from "react";
import SocialAccounts from "../HomePage/SocialAccounts.jsx"
import Welcome from "../HomePage/Welcome.jsx"
import Projects from "../HomePage/Projects.jsx"
import Certificates from "../HomePage/Certificates.jsx"
import Navbar from "../HomePage/Navbar.jsx";
import Documents from "../HomePage/Documents.jsx";
import Footer from "../HomePage/Footer.jsx";
import Helmet from 'react-helmet'
export default function Home(){
    return(
        <div>
            <Helmet>
                <title>Doruk Aytekin Personal Website</title>
                <meta name="keywords" content="Doruk Aytekin,doruk aytekin,Doruk,doruk" />
                <meta name="description" content="Hello to my personal website my name is Doruk Aytekin in this website i release my projects and publish my certificates"/>
                <link rel="canonical" href="https://dorukdev07.web.app/"/>
            </Helmet>
            <Navbar></Navbar>
            <Welcome></Welcome>
            <Projects></Projects>
            <Documents></Documents>
            <SocialAccounts></SocialAccounts>
            <Certificates></Certificates>
            <Footer></Footer>
        </div>
    );
}