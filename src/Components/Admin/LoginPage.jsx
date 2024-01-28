import { useState } from "react"
import { FaLock, FaUser } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

export let isloggedin

export function LoginPage(){
    const navigate = useNavigate()
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    
    const checkInformations = () => {
        if(email == "dorukaytekinexxon@gmail.com" && password == "rommel07."){
            isloggedin = true
            navigate("/adminpage")
        }
        else{
            alert("your password or email is incorrect")
        }
    }
    const changeEmail = event => {
        setemail(event.target.value)
    }
    const changePassword = event => {
        setpassword(event.target.value)
    }
    return(
        <div className="wrapper">
            <h1 className="title">Doruk Aytekin</h1>
            <h2 className="title">Login</h2>
            <form action="" className="form">
                <div className="input-box">
                    <FaUser className="icon"></FaUser>
                    <input onChange={changeEmail} value={email} type="email" placeholder="E-mail" name="Email" id="Adminemail" />
                </div>
                <div className="input-box">
                    <FaLock className="icon"></FaLock>
                    <input onChange={changePassword} value={password} type="password" placeholder="Password" name="Password" id="Adminpassword" />
                </div>
                <button onClick={checkInformations} className="button">Login</button>
            </form>
        </div>
    )
}