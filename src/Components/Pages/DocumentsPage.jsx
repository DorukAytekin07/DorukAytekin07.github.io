import React from "react";
import Documentlar from '../../JSON/documents.json'
import Navbar from "../DocumentNavbar";
import Footer from "../HomePage/Footer";
export default class Documents extends React.Component {
    dokumantasyon = Documentlar.document.map(dokuman => {
            return(<Document {...dokuman}></Document>)
        }
    )
    render(){
        return (
            <div>
                <Navbar></Navbar>
                <section className="certificates-container paddingtopdocuments">
                    <div className="certificates">
                        {this.dokumantasyon}
                    </div>
                </section>
                <Footer></Footer>
            </div>
        );
    }
}
class Document extends React.Component {
    render(){
        return(
            <div className="project-div">
                <img className="project-img" src={this.props.img} alt="Doruk Aytekin Document"/>
                <h3 className="project-p">{this.props.name}</h3>
                <a className="project-a" href={this.props.link} target="_blank"><p>Show More</p></a>
            </div>
        );
            

    }
    
}