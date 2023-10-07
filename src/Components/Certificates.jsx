import React from "react";
import JS from "../assets/img/certificates/CS-Certificate.webp"
import Sertifikalar from "../certificates.json"

export default class Certificates extends React.Component {
    certificate = Sertifikalar.certificates.map(sertifika => {
        return(<Certificate {...sertifika}></Certificate>)
    })
    render(){
        return(
            <section>
                <h2 className="certificates-title">My Certifications</h2>
                <div className="certificates">
                    {this.certificate}
                </div>
            </section>
        );
    }
}
class Certificate extends React.Component{
    render(){
        return(
            <img className="certificate" src={this.props.img} alt="" />
        )
    }
}