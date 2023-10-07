import React from "react";
import Sertifikalar from "../../src/certificates.json"

export default class Certificates extends React.Component {
    certificate = Sertifikalar.certificates.map(sertifika => {
        console.log(sertifika.img)
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
            
            <img className="certificate" src={JS} alt="" />
        )
    }
}