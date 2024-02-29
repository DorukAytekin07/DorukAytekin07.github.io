import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isloggedin } from "./LoginPage";
export default function AdminPage() {
    const navigate = useNavigate()
    if(!isloggedin){
        useEffect(() => {
            navigate("/adminpanel")
          }, []);
    }
    return(
        <div className="container">
            <div className="area-container">
                <h1 className="area-title">Certificates</h1>
                <a className="area-link" href="/certificatesarrange"><h2 className="link-text">Go To Page</h2></a>
            </div>
            <div className="area-container">
                <h1 className="area-title">Projects</h1>
                <a className="area-link" href="/projectsarrange"><h2 className="link-text">Go To Page</h2></a>
            </div>
            <div className="area-container">
                <h1 className="area-title">Documents</h1>
                <a className="area-link" href="/documentsarrange"><h2 className="link-text">Go To Page</h2></a>
            </div>
            <div className="area-container">
                <h1 className="area-title">Math Topics</h1>
                <a className="area-link" href="/mathtopicsarrange"><h2 className="link-text">Go To Page</h2></a>
            </div>
        </div>
    )
}