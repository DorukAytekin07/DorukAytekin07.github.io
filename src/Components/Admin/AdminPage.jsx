import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginPage, isloggedin } from "./LoginPage";
export default function AdminPage() {
    const navigate = useNavigate()
    if(!isloggedin){
        useEffect(() => {
            navigate("/adminpanel")
          }, []);
    }
    return(
        <div>
            <h1 className="center-middle">Admin Page</h1>
        </div>
    )
}