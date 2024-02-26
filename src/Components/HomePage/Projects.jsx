import React from "react";
import Projeler from '../../JSON/projects.json'
export default class Projects extends React.Component{
    proje = Projeler.projects.map(project => {              
        return(<Project {...project}></Project>) 
    })
    render(){
        return(
            <div id="works">
                <h2 className="project-title">My Projects</h2>
                <section id="work">
                    {this.proje}
                </section>
            </div>
        );    
    }
}
class Project extends React.Component {
    render(){
        return(
            <div className="project-div">
                <img className="project-img" src={this.props.img} loading="lazy" title={"Doruk Aytekin " + this.props.description} alt="Doruk Aytekin Project" width={1280} height={720}/>
                <h3 className="project-p">{this.props.description}</h3>
                <a className="project-a" href={this.props.href} target="_blank" rel="noopener"><p>Show More</p></a>
            </div>
        );
    }
}