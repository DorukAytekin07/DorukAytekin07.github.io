import React from "react";
import SocialAccounts from "./SocialAccounts.jsx"
import Welcome from "./Welcome.jsx"
import Projects from "./Projects.jsx"
import Certificates from "./Certificates.jsx"
export default function Home(){
    return(
        <div>
            <Welcome></Welcome>
            <Projects></Projects>
            <SocialAccounts></SocialAccounts>
            <Certificates></Certificates>
        </div>
    );
}