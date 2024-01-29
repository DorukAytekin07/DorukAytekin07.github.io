import Sertifikalar from "../../../JSON/certificates.json"
import React from "react"
export default class CertificatesArrange extends React.Component {
    certificate = Sertifikalar.certificates.map(sertifika => {
        return(<Certificate {...sertifika}></Certificate>)
    })
    render(){
    return(
        <div>
            <section className="admin-certificates-container">
                <div className="admin-certificates">
                    {this.certificate}
                </div>
            </section>
            <br />
            <div className="add-area">
                
                <form className="add-area" action="">
                <h1 className="about-me-title">Add New Certificate</h1>
                    <input className="admin-text-area" type="file"/> <br />
                    <button className="admin-button">Add</button>
                </form>
            </div>
        </div>
    )
    }
}
class Certificate extends React.Component{
    render(){
        return(
            <div>
                <img className="admin-certificate" src={this.props.img} loading="lazy" title={"Doruk Aytekin Certificate"} alt="Doruk Aytekin Certificate" width={1280} height={720}/>
                <span className="admin-buttons-container">
                   <button className="admin-button">Modify</button> 
                    <button className="admin-button">Delete</button> 
                </span>
            </div>
        )
    }
}

