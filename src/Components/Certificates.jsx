import React from "react";
import Sertifikalar from "../certificates.json"

export default class Certificates extends React.Component {
    certificate = Sertifikalar.certificates.map(sertifika => {
        console.log(sertifika.img)
        return(<Certificate {...sertifika}></Certificate>)
    })
    render(){
        return(
            <div>
                <h2 className="certificates-title">My Certifications</h2>
                <section className="certificates-container">
                    <div className="certificates">
                        {this.certificate}
                    </div>
                </section>
            </div>
            
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