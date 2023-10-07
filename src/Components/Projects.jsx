import React from "react";
import Projeler from '../projects.json'

export default class Projects extends React.Component{
    
    
    proje = Projeler.projects.map(project => {              
        return(<Project {...project}></Project>) 
    })
    render(){
        return(
        
            <section id="works">
                <h2 className="project-title">My Projects</h2>
                {this.proje}
            </section>
        
    
        );    
    }
}
class Project extends React.Component {
    render(){
        return(
            <div className="project-div">
                <img className="project-img" src={this.props.img} alt=""/>
                <p className="project-p">{this.props.description}</p>
                <a className="project-a" href="#"><p>Show More</p></a>
            </div>
        );
            
            
    }
}