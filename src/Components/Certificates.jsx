import React from "react";
import JavaBasic from "../../src/assets/img/certificates/Java Certificate.webp"
import CS from "../../src/assets/img/certificates/CS-Certificate.webp"
import CSS from "../../src/assets/img/certificates/CSS Certificate.webp"
import JSADS from "../../src/assets/img/certificates/JavaScript Algorithms And Data Structures Certificate.webp"
import JS from "../../src/assets/img/certificates/JavaScript Certificate.webp"
import PS from "../../src/assets/img/certificates/Problem Solving Certificate.webp"
import Python from "../../src/assets/img/certificates/Python Certificate.webp"
import RWD from "../../src/assets/img/certificates/Responsive Web Design Certificate.webp"
import SQL from "../../src/assets/img/certificates/SQL Certificate.webp"




export default class Certificates extends React.Component {
    render(){
        return(
            <section>
                <h2 className="certificates-title">My Certifications</h2>
                <div className="certificates">
                    <img className="certificate" src={JavaBasic} alt="" />
                    <img className="certificate" src={CS} alt="" />
                    <img className="certificate" src={CSS} alt="" />
                    <img className="certificate" src={JS} alt="" />
                    <img className="certificate" src={PS} alt="" />
                    <img className="certificate" src={Python} alt="" />
                    <img className="certificate" src={SQL} alt="" />
                    <img className="certificate" src={RWD} alt="" />
                    <img className="certificate" src={JSADS} alt="" />
                </div>
            </section>
        );
    }
}