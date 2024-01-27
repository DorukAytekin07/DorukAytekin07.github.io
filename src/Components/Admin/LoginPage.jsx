import { FaLock, FaUser } from "react-icons/fa"
export function LoginPage(){
    return(
        <div className="wrapper">
            <h1 className="title">Doruk Aytekin</h1>
            <h2 className="title">Login</h2>
            <form action="" className="form">
                <div className="input-box">
                    <FaUser className="icon"></FaUser>
                    <input type="email" placeholder="E-mail" name="Email" id="Adminemail" />
                </div>
                <div className="input-box">
                    <FaLock className="icon"></FaLock>
                    <input type="password" placeholder="Password" name="Password" id="Adminpassword" />
                </div>
                <button className="button">Login</button>
            </form>
        </div>
    )
}