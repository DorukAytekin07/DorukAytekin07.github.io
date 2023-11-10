import React from "react";
import Documentlar from '../../documents.json'

export default class Documents extends React.Component {

    dokumantasyon = Documentlar.document.map(dokuman => {
            return(<Document {...dokuman}></Document>)
        }
    )

    render(){
        return (
            <div>
                <h2 className="project-title">
                    <a href="https://dorukaytekin07.github.io/documents" className="project-title">My Documents</a>
                </h2>
                <section id="work">
                    {this.dokumantasyon}
                </section>
            </div>
        );
    }
}

class Document extends React.Component {
    render(){
        return(
            <div className="project-div">
                <img className="project-img" src={this.props.img} alt="Doruk Aytekin Project"/>
                <h3 className="project-p">{this.props.name}</h3>
                <a className="project-a" href={this.props.link} target="_blank"><p>Show More</p></a>
            </div>
        );
            

    }
    
}